import * as systemService from "@/services/systemService"
import * as responseCodes from "@/constants/responseCodes"
export async function updateSystemSetting(req, res){
  try {
    const { socks5Api, twoCaptchaApi } = req.body
    await systemService.updateSystemSetting({ socks5Api, twoCaptchaApi })
    res.json({ code: responseCodes.SUCCESS, message: "success"})
  } catch (error) {
    res.json({ code: responseCodes.INTERNAL_SERVER_ERROR, message: error.message, data: null })
  }
}