import { createReducer, Reducer } from '@reduxjs/toolkit'
import { setNotificationsCount, resetNotificationsCount } from '@actions/notificationsCount'

interface NotificationsCountState {
  total: number,
  unRead: number
}

const initialState: NotificationsCountState = {
  total: 0,
  unRead: 0,
}

const notificationsCountReducer: Reducer<NotificationsCountState> =
  createReducer(initialState, (builder) => {
    builder
      .addCase(setNotificationsCount, (state, action) => {
        state.total = action.payload.total
        state.unRead = action.payload.unRead
      })
      .addCase(resetNotificationsCount, (state) => {
        state.total = initialState.total
        state.unRead = initialState.unRead
      })
  })

export default notificationsCountReducer
export type { NotificationsCountState }
