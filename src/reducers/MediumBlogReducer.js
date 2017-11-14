let initialState = {
  postings: []
}

function MediumBlogReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MEDIUM_BLOG':
      return Object.assign({}, state, {
        postings: action.data
      })
    default:
      return state;
    }
  }

export default MediumBlogReducer;
