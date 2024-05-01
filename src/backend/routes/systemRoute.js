// src/backend/routes/scriptRoutes.js
import * as systemController from "@/controllers/systemController"

export default function (router) {
  router.post("/system/updateSystemSetting", systemController.updateSystemSetting)
}
