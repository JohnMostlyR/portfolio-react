import fetch from 'isomorphic-unfetch';
import marked from 'marked';

import {config} from '../../private';

marked.options({
  breaks: true,
});

async function getFromContentful({contentType, select = 'fields', locale = 'en-US'} = {}) {
  locale = (locale === 'en') ? 'en-US' : locale;

  const ENDPOINT = config.contentful.endpoint;
  const queryParam = {
    access_token: config.contentful.access_token,
    content_type: contentType,
    select,
    locale,
  };

  const query = Object.keys(queryParam)
      .reduce((accumulator, currentValue) => accumulator.concat(
          `${currentValue}=${queryParam[currentValue]}`), [])
      .join('&');

  try {
    const res = await fetch(`${ENDPOINT}${query}`);
    return await res.json();
  } catch (err) {
    console.error('Error occurred when trying gto get data from contentful: ', err.message);
  }
}

export async function getContentFromContentful({contentType, select = 'fields', locale = 'en-US'} = {}) {
  try {
    const json = await getFromContentful({contentType, select, locale});

    if (String(json.sys.type).toLowerCase() === 'array') {
      const markdown = json.items[0].fields.content; // About has one field

      return marked(markdown);
    }
  } catch (err) {
    console.error('Error occurred when trying gto get data from contentful: ', err.message);
  }
}

export default getFromContentful;