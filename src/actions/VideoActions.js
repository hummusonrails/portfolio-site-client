export function loadVideos() {
  return (dispatch => {

  const request = {
    method: 'get',
    data: JSON.stringify()
  };

  fetch('https://galvanize-cors-proxy.herokuapp.com/https://bengreenberg.herokuapp.com/api/videos/index.json', request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'LOAD_VIDEOS', data: data }))
  }
)}

// cors proxy: https://galvanize-cors-proxy.herokuapp.com/
