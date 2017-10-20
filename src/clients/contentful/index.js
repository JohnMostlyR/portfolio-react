import fetch from 'isomorphic-unfetch';
import marked from 'marked';

marked.options({
  breaks: true,
});

async function getFromContentful({contentType, select = 'fields', locale = 'en-US'} = {}) {
  locale = (locale === 'en') ? 'en-US' : locale;

  const ENDPOINT = 'https://cdn.contentful.com/spaces/1tymefars1bj/entries?';
  const queryParam = {
    access_token: '9e9c6e46f1e52cfe1d30836842c1d98b131c9cb130902159f51b44bf6c41f09e',
    content_type: contentType,
    select,
    locale,
  };

  const query = Object.keys(queryParam)
      .reduce((accumulator, currentValue) => accumulator.concat(
          `${currentValue}=${queryParam[currentValue]}`), [])
      .join('&');

  const res = await fetch(`${ENDPOINT}${query}`);

  return await res.json();
}

export async function getContentFromContentful({contentType, select = 'fields', locale = 'en-US'} = {}) {
  const json = await getFromContentful({contentType, select, locale});

  if (String(json.sys.type).toLowerCase() === 'array') {
    const markdown = json.items[0].fields.content; // About has one field

    return marked(markdown);
  }
}

export default getFromContentful;