import { createReducer, Reducer } from '@reduxjs/toolkit'
import { increment, decrement } from '@actions/notifications'

interface NotificationsState {
  notifications: number
}

const initialState: NotificationsState = {
  notifications: 0,
}

const notificationsReducer: Reducer<NotificationsState> =
  createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state) => {
        state.notifications += 1;
      })
      .addCase(decrement, (state) => {
        state.notifications -= 1;
      })
  })

export default notificationsReducer
export type { NotificationsState }
