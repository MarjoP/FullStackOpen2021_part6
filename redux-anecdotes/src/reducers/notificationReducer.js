const initialNotification = ''
var timeoutId = ''

const notificationReducer = (state = {initialNotification}, action) => {
    switch(action.type) {
        case 'NVOTE' :
          return action.data
        default:
            return ''
    }
}

export const setNotification = (notificationText, time) => {
    const mseconds = time * 1000
    clearTimeout(timeoutId)
    timeoutId=''
    return async dispatch => {
        dispatch({
          type: 'NVOTE', 
          data: notificationText
        })
       timeoutId =setTimeout(() => {
          dispatch({
            type: 'NVOTE',
            data: ''
        })}, mseconds)
      }
    }

export default notificationReducer