export const callJSONApi = (url, options) =>
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

export const callXMLApi = (url, options) =>
  fetch(url, options)
    .then(
      responseBody => (responseBody.text()),
      error => (Promise.reject(error)),
    )
    .then(
      response => ({ response }),
      error => ({ error }),
    ).catch(error => ({ error }));
