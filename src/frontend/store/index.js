import Vue from "vue"
import Vuex from "vuex"
import dayjs from "dayjs"
import { local } from "@lite-base/storage"
import { updateSystemSetting } from "@/api/system"
Vue.use(Vuex)
function setTheme(themeName) {
  let linkElement = document.getElementById("dynamic-theme")
  if (!linkElement) {
    linkElement = document.createElement("link")
    linkElement.setAttribute("rel", "stylesheet")
    linkElement.setAttribute("id", "dynamic-theme")
    document.head.appendChild(linkElement)
  }
  linkElement.setAttribute("href", `theme/${themeName}.css`)
}
const setting = local.get("setting") || {}

window.addEventListener("load", () => {
  setTheme(setting.darkMode ? "theme-dark" : "theme-light")
})
export default new Vuex.Store({
  state: {
    setting: setting || {},
    logs: [],
  },
  mutations: {
    UPDATE_SETTING(state, setting) {
      setTheme(setting.darkMode ? "theme-dark" : "theme-light")
      state.setting = setting
      local.set("setting", setting)
      updateSystemSetting(setting)
    },
    ADD_LOG(state, log) {
      state.logs.push({ log, time: dayjs().format("YYYY-MM-DD HH:mm:ss") })
    },
    CLEAR_LOG(state) {
      state.logs = []
    },
  },
  actions: {},
  modules: {},
})
