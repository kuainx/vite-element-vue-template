/*
 * @Author: KUAI(https://github.com/kuainx)
 * @Date: 2022-04-13 22:08:38
 * @LastEditTime: 2022-04-27 23:13:19
 * @LastEditors: KUAI
 * @Description:
 * @FilePath: \zhs-web-vite\src\utils\global-notification.js
 */
import { ElNotification } from 'element-plus'

const ANotification = params => {
  if (params.message.indexOf('<br') !== -1) {
    params.dangerouslyUseHTMLString = true
  }
  return ElNotification(params)
}

const GlobalNotification = {
  success: (title, message) => {
    ANotification({ title, message, type: 'success' })
  },
  info: (title, message) => {
    ANotification({ title, message, type: 'info' })
  },
  warning: (title, message) => {
    ANotification({ title, message, type: 'warning' })
  },
  error: (title, message) => {
    ANotification({ title, message, type: 'error' })
  }
}

export { GlobalNotification }
