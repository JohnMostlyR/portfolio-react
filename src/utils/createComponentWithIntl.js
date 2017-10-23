import React from 'react';
import renderer from 'react-test-renderer';
import {IntlProvider, addLocaleData} from 'react-intl';

import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';

// Our translated strings
import localeData from '../../src/lang/translations.json';

addLocaleData([...en, ...nl]);

const createComponentWithIntl = (children, props = {locale: 'en', messages: localeData.nl}) => {
  return renderer.create(
      <IntlProvider {...props}>
        {children}
      </IntlProvider>,
  );
};

export default createComponentWithIntl;