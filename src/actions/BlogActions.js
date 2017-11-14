export function loadTechBlog() {
  return (dispatch => {

  const request = {
    method: 'get',
    data: JSON.stringify()
  };

  fetch('https://bengreenberg.herokuapp.com/api/blog/tech.json', request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'LOAD_BLOG', data: data }))
  }
)}

export function loadMediumBlog() {
  return (dispatch => {

    const Feed = require('rss-to-json');

    Feed.load('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@rabbigreenberg', function(err, rss){
      if (err) {
        console.log(err)
      } else {
        dispatch({ type: 'LOAD_MEDIUM_BLOG', data: rss })
      }
    });
  })
}

// export function loadJewishBlog() {
//   return (dispatch => {
//
//   const request = {
//     method: 'get',
//     data: JSON.stringify()
//   };
//
//   fetch('https://bengreenberg.herokuapp.com/api/blog/jewish.json', request)
//     .then(data => data.json())
//     .then(data => dispatch({ type: 'LOAD_BLOG', data: data }))
//   }
// )}
