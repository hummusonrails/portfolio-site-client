let initialState = {
  postings: [],
  finishedLoading: false
}

function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_BLOG':
      return Object.assign({}, state, {
        postings: action.data,
        finishedLoading: true
      })
    default:
      return state;
    }
  }

export default BlogReducer;
