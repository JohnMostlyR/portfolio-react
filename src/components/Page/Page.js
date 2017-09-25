import React from 'react';
import PropTypes from 'prop-types';
import PageSection from './PageSection';
import PageHeader from './PageHeader';
import PageBody from './PageBody';

const Page = (props) => (
  <PageSection>
    <PageHeader title={props.pageTitle} isLeftHanded={props.isHeaderLeftHanded}/>
    <PageBody>{props.children}</PageBody>
  </PageSection>
);

Page.propTypes = {
  title: PropTypes.string,
  isHeaderLeftHanded: PropTypes.bool,
};

Page.defaultProps = {
  title: 'TITLE',
  isHeaderLeftHanded: true,
};

export default Page;
