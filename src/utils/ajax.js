/*
 * @Author: KUAI(https://github.com/kuainx)
 * @Date: 2022-04-27 17:31:58
 * @LastEditTime: 2022-05-02 22:32:17
 * @LastEditors: KUAI
 * @Description:
 * @FilePath: \zhs-web-vite\src\utils\ajax.js
 */
import { get, post } from 'axios'
import { GlobalNotification } from './global-notification'

const resolveRequest = async req => {
  const method = req.config.method.toUpperCase()
  if (req.status !== 200) {
    GlobalNotification.warning('服务端错误', 'code: ' + req.data.code + '<br/>' + method + ': ' + req.data.error + '<br/>错误：' + req.data.data)
  } else if (req.data.code !== 200) {
    GlobalNotification.warning('请求错误', 'code: ' + req.data.code + '<br/>' + method + ': ' + req.data.error + '<br/>错误：' + req.data.data)
  } else {
    return req.data.data
  }
  console.error(req.data.data)
  throw new Error(null)
}

const getRequest = async url => {
  try {
    const req = await get(url)
    return await resolveRequest(req)
  } catch (error) {
    if (error.message !== 'null') {
      GlobalNotification.error('网络请求错误', 'GET: ' + url + '<br/>' + error + '<br/>请检查网络连接')
    }
    throw new Error(null)
  }
}

const postRequest = async (url, data) => {
  try {
    const req = await post(url, data)
    return await resolveRequest(req)
  } catch (error) {
    if (error.message !== 'null') {
      GlobalNotification.error('网络请求错误', 'POST: ' + url + '<br/>' + error + '<br/>请检查网络连接')
    }
    throw new Error(null)
  }
}

export { getRequest, postRequest }
