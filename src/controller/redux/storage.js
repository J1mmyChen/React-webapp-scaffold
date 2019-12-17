const org_state = { history: '/' }

export const getHistory = (history) => ({
  type: 'GET_HISTORY',
  history
})

export const setHistory = (history) => ({
  type: 'SET_HISTORY',
  history
})

const storage = (state = org_state, action) => {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.history
      }

    default:
      return state
  }
}

export default storage
