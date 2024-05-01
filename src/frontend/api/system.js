import http from "@lite-base/http"

// 更新系统设置
export function updateSystemSetting(data) {
  return http({
    url: `/system/updateSystemSetting`,
    method: "post",
    data
  })
}
