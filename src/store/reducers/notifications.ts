import { createReducer, Reducer } from '@reduxjs/toolkit'
import { setNotifications, resetNotifications, Notification, changeReadOnNotifications, sortNotifications, changeAllReadOnNotifications } from '@actions/notifications'

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
        state.notifications = sort(state.notifications)
        state.notifications = action.payload
      })
      .addCase(resetNotifications, (state) => {
        state.notifications = []
      })
      .addCase(changeReadOnNotifications, (state, action) => {
        const notification = state.notifications.find((notification) => notification.id === action.payload)
        if (notification)
          notification.read = true
        state.notifications = sort(state.notifications)
      })
      .addCase(changeAllReadOnNotifications, (state) => {
        state.notifications.forEach(notification => notification.read = true)
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