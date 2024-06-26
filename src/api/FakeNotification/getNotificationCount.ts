import simulateRequest from "./simulateRequest"
import data from "@data/notifications.json"

const getNotificationCount = async () => {
  console.log("getNotificationCount request")
  await simulateRequest()
  return {
    total: data.length,
    unRead: data.filter(item => !item.read).length
  }
}

export default getNotificationCount