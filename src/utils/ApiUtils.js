export const callJsonApi = (url, options) =>
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


export const callXmlApi = (url, options) => {
  fetch(url, options)
    .then(
      response => (response.ok ? response.text() : Promise.reject(response.text)),
      error => Promise.reject(error),
    )
    .then(
      responseText => ({ responseText }),
      error => ({ error }),
    )
    .catch(error => ({ error }));
};
