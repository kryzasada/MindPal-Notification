import simulateRequest from "./simulateRequest"
import data from "@data/notifications.json"

const getNotificationCount = async () => {
  await simulateRequest()
  return {
    total: data.length,
    unRead: data.filter(item => !item.read).length
  }
}

export default getNotificationCount