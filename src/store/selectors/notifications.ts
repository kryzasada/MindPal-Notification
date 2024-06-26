import store from '@store'
import { Notification } from '@actions/notifications'

export const selectNotifications = (): Notification[] => store.getState().notifications.notifications
export const selectUnReadNotifications = (): Notification[] => store.getState().notifications.notifications.filter(item => !item.read)
