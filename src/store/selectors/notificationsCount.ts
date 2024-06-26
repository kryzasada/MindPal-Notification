import store from '@store'

export const selectNotificationsCount = () => store.getState().notificationsCount
export const selectTotal = () => store.getState().notificationsCount.total
export const selectUnRead = () => store.getState().notificationsCount.unRead