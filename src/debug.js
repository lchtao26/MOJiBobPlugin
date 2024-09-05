import { translate } from './main.js';

globalThis.$log = {
  info: console.log,
};

globalThis.$http = {
  request: async (options) => {
    return fetch(options.url, {
      method: options.method,
      headers: options.header,
      body: JSON.stringify(options.body),
    }).then(async (response) => {
      const data = await response.json();
      console.log(JSON.stringify(data));
      return {
        data,
      }
    });
  },
};

translate({text: 'お願'}, (data) => {
  console.log(data);
});

