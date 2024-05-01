import db from "@/db"
// 更新系统设置
export const updateSystemSetting = async (settings) => {
  await db.system_setting.update({  type: "system_setting" }, { $set: settings }, {
    upsert: true,
  })
}