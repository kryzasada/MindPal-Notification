import simulateRequest from "./simulateRequest"
import data from "@data/notifications.json"

const getAllNotifications = async () => {
  await simulateRequest()
  return data
}

export default getAllNotifications