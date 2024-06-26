import { createAction } from '@reduxjs/toolkit'

interface SetNotificationsCountPayload {
  total: number
  unRead: number
}

export const setNotificationsCount = createAction<SetNotificationsCountPayload>('setNotificationsCount')
export const resetNotificationsCount = createAction('resetNotificationsCount')