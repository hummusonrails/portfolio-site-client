let initialState = {
  videos: [],
  finishedLoading: false
}

function VideoReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_VIDEOS':
      return Object.assign({}, state, {
        videos: action.data,
        finishedLoading: true
      })
    default:
      return state;
    }
  }

export default VideoReducer;
