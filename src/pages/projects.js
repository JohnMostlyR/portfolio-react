import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import {Row, Column} from 'hedron';

import getFromContentful from '../clients/contentful/';
import StyledSection from '../components/StyledSection';
import PageHeader from '../components/PageHeader';
import Project from '../components/Project';
import mq from '../styles/templates/mediaQueries';

const ProjectsList = styled.ul`
  flex: 1 1 100%; // IE
  margin: 0 auto; // fallback for no flexbox
  list-style: none;
  padding-bottom: 9vmin;
`;

const ProjectsListItem = styled.li`
  margin-top: 2vh;
  position: relative;
  background-color: #F90;
  border-radius: .5rem;

  &:nth-child(odd) {
    background-color: #09F;
    color: #D0EB2A;

    ${mq.l`
      margin-left: 14vw;
      border-bottom-right-radius: 0;
    
      &:after {
        content: "";
        height: 9vmin;
        left: 0;
        position: absolute;
        right: 0;
        top: 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%2333ADFF' fill='%2333ADFF' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%230062A3' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%2333ADFF' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
        transform: rotateY(180deg);
      }
    `}
  }

  &:nth-child(even) {
    ${mq.l`
      margin-right: 14vw;
      border-bottom-left-radius: 0;

      &:after {
        content: "";
        height: 9vmin;
        left: 0;
        position: absolute;
        right: 0;
        top: 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 427.9 175.1 132.1' preserveAspectRatio='xMinYMid'%3E%3Cpath stroke='%23FFAD33' fill='%23FFAD33' d='M0 427.9l175.1 65.7-43.7-65.7z'/%3E%3Cpath fill='%23A36200' d='M175.1 493.6l-87.5 21.9v-54.8'/%3E%3Cpath fill='%23FFAD33' d='M87.6 515.5l21.2 44.5v-49.8'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: left top;
      }
    `}
  }
`;

class Projects extends React.Component {
  state = {
    projects: [],
  };

  componentWillMount() {
    const json = getFromContentful({contentType: 'projects', locale: 'nl'});
    json
        .then(
            (json) => {
              const receivedProjects = parseContent(json);
              this.setState(prevState => {
                return {
                  projects: prevState.projects.concat(receivedProjects),
                };
              });
            },
        )
        .catch(err => {
          console.error('Unable to get projects content from CMS: ', err.message);
        });
  }

  render() {
    return (
        <StyledSection>
          <Row tagName={'div'}>
            <Column>
              <PageHeader isLeftHanded>
                <FormattedMessage id={'portfolio.page.projects.title'}
                                  defaultMessage={'MY PROJECTS'}/>
              </PageHeader>
            </Column>
          </Row>
          <Row tagName={'div'}>
            <Column>
              <ProjectsList>
                {
                  this.state.projects.map((project, idx) => {
                    return (
                        <ProjectsListItem key={idx}>
                          <Project
                              thumbnailUrl={project.thumbnail.url}
                              title={project.title}
                              links={project.externalLinks}
                              detailsTitle={project.subtitle}
                              detailsBodyText={project.description}
                              isOdd={!(idx % 2)}
                          />
                        </ProjectsListItem>
                    );
                  })
                }
              </ProjectsList>
            </Column>
          </Row>
        </StyledSection>
    );
  }
}

function parseContent(data) {
  if (String(data.sys.type).toLowerCase() !== 'array') {
    return;
  }

  const entries = data
      .includes
      .Entry
      .reduce((acc, curr) => {
            const obj = {};
            obj[curr.sys.id] = curr.fields;
            return Object.assign(acc, obj);
          }, {},
      );

  const assets = data
      .includes
      .Asset
      .reduce((acc, curr) => {
            const obj = {};
            obj[curr.sys.id] = curr.fields;
            return Object.assign(acc, obj);
          }, {},
      );

  const projects = data
      .items
      .reduce((acc, curr) => {
        return acc.concat(curr.fields);
      }, [])
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA < dateB) {
          return 1;
        } else if (dateA > dateB) {
          return -1;
        } else {
          return 0;
        }
      })
      .reduce((acc, curr) => {
        if (curr.thumbnail) {
          curr.thumbnail = assets[curr.thumbnail.sys.id].file;
        } else {
          curr['thumbnail'] = {url: '#'};
        }

        return acc.concat(curr);
      }, [])
      .reduce((acc, curr) => {
        if (curr.externalLinks && Array.isArray(curr.externalLinks)) {
          const links = [];
          curr.externalLinks.forEach((link) => {
            const entry = entries[link.sys.id];
            if (entry) {
              links.push({
                faIcon: entry.icon,
                name: entry.destination,
                url: entry.url,
              });
            }
          });

          curr.externalLinks = links;
        } else {
          curr['externalLinks'] = [];
        }

        return acc.concat(curr);
      }, []);

  return projects || [];
}

export default Projects;
