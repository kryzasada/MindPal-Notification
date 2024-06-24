import { combineReducers } from 'redux'
import notificationsReducer, { NotificationsState } from './notifications'

export interface RootState {
  notifications: NotificationsState
}

const rootReducer = combineReducers({
  notifications: notificationsReducer,
})

export default rootReducer