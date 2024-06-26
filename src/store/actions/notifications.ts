import { createAction } from '@reduxjs/toolkit'

interface Notification {
  id: number
  type: string
  description: any
  timestamp: string
  read: boolean
}

interface SetNotificationsPayload extends Notification { }

export const addNotifications = createAction('addNotifications')
export const setNotifications = createAction<SetNotificationsPayload[]>('setNotifications')
export const setTrueReadOnNotification = createAction<number>('setTrueReadOnNotification')
export const setTrueAllReadOnNotifications = createAction('setTrueAllReadOnNotifications')
export const resetNotifications = createAction('resetNotifications')
export const sortNotifications = createAction('sortNotification')

export type { Notification }