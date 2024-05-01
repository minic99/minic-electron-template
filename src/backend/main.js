// src/backend/main.js
import registerRoutes from "@/routes"
import Server from 'minic-serve'
const isDevelopment = process.env.NODE_ENV !== "production"
export default new Server({
  port: isDevelopment ? process.env.VUE_APP_BACKEND_PORT_DEV : process.env.VUE_APP_BACKEND_PORT || 3333,
  registerRoutes
})
