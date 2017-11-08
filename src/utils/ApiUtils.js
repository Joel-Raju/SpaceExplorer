export const callJSONApi = (url, options) => {
  fetch(url, options)
    .then(
      response => (response.ok
        ? response.json()
        : Promise.reject(response.text())
      ),
      error => Promise.reject(error),
    )
    .then(
      json => ({ json }),
      error => ({ error }),
    ).catch(error => ({ error }));
};

export const callXMLApi = (url, options) => {
  fetch(url, options)
    .then(
      response => response.text(),
      error => Promise.reject(error),
    ).catch(error => ({ error }));
};
