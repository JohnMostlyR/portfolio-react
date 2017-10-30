import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Wrapper = styled.div`
  padding-bottom: 1rem;
`;

const FormInfoItemsList = styled.ul`
  list-style: none;
`;

const FormInfo = () => (
    <Wrapper>
      <FormInfoItemsList>
        <li>
          <FontAwesome name="info-circle"/> <span><FormattedMessage
            id={'portfolio.page.contact.requirement.one'}
            defaultMessage={'Please fill in all fields'}/></span>
        </li>
      </FormInfoItemsList>
    </Wrapper>
);

export default FormInfo;