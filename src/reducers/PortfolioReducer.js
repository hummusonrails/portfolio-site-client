let initialState = {
  portfolio: [],
  finishedLoading: false
}

function PortfolioReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PORTFOLIO':
      return Object.assign({}, state, {
        portfolio: action.data,
        finishedLoading: true
      })
    default:
      return state;
    }
  }

export default PortfolioReducer;
