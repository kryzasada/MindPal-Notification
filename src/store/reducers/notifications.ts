import { createReducer, Reducer } from '@reduxjs/toolkit'
import { setNotifications, resetNotifications, Notification, setTrueReadOnNotification, sortNotifications, setTrueAllReadOnNotifications } from '@actions/notifications'

interface NotificationsState {
  notifications: Notification[]
}

const initialState: NotificationsState = {
  notifications: [],
}

const notificationsReducer: Reducer<NotificationsState> =
  createReducer(initialState, (builder) => {
    builder
      .addCase(setNotifications, (state, action) => {
        state.notifications = sort(action.payload)
      })
      .addCase(resetNotifications, (state) => {
        state.notifications = []
      })
      .addCase(setTrueReadOnNotification, (state, action) => {
        const notification = state.notifications.find(notification => notification.id === action.payload)
        if (notification)
          notification.read = true
        state.notifications = sort(state.notifications)
      })
      .addCase(setTrueAllReadOnNotifications, (state) => {
        state.notifications.forEach(notification => notification.read = true)
        state.notifications = sort(state.notifications)
      })
      .addCase(sortNotifications, (state) => {
        state.notifications = sort(state.notifications)
      })
  })

export default notificationsReducer
export type { NotificationsState }

const sort = (notifications: Notification[]): Notification[] => {
  return notifications.sort((a, b) => {
    if (a.read === b.read) {
      return a.id - b.id
    }
    return a.read ? 1 : -1
  })
}