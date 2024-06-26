import store from '@store'

export const selectNotifications = () => store.getState().notifications.notifications
export const selectUnReadNotifications = () => store.getState().notifications.notifications.filter(item => !item.read)
export const selectNotificationById = (id: number) => store.getState().notifications.notifications.find(item => item.id === id)
