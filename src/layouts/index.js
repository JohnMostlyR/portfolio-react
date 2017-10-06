import React from 'react';
import PropTypes from 'prop-types';

import PageSection from './PageSection';
import PageHeader from './PageHeader';
import PageBody from './PageBody';

const Layout = (props) => (
  <PageSection>
    <PageHeader title={props.pageTitle} isLeftHanded={props.isHeaderLeftHanded}/>
    <PageBody>{props.children}</PageBody>
  </PageSection>
);

Layout.propTypes = {
  children: PropTypes.object,
  pageTitle: PropTypes.string,
  isHeaderLeftHanded: PropTypes.bool,
};

Layout.defaultProps = {
  title: 'TITLE',
  isHeaderLeftHanded: true,
};

export default Layout;
