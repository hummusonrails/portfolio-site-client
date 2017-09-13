export function loadTechBlog() {
  return (dispatch => {

  const request = {
    method: 'get',
    data: JSON.stringify()
  };

  fetch('http://www.bengreenberg.org/api/blog/tech.json', request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'LOAD_BLOG', data: data }))
  }
)}

export function loadJewishBlog() {
  return (dispatch => {

  const request = {
    method: 'get',
    data: JSON.stringify()
  };

  fetch('http://www.bengreenberg.org/api/blog/jewish.json', request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'LOAD_BLOG', data: data }))
  }
)}
