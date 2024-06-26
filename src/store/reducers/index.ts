import { combineReducers } from 'redux'
import notificationsReducer, { NotificationsState } from './notifications'
import notificationsCountReducer, { NotificationsCountState } from './notificationsCount'

export interface rootReducersType {
  notifications: NotificationsState
  notificationsCount: NotificationsCountState
}

export const rootReducer = combineReducers({
  notifications: notificationsReducer,
  notificationsCount: notificationsCountReducer,
})