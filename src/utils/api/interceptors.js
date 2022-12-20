import Taro from "@tarojs/taro"
import { BASE_URL, post } from "."
import { AUTH_KEY } from ".."

const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages()
  let currentPage = pages[pages.length - 1]
  let url = currentPage.route
  return url
}

const pageToLogin = () => {
  let path = getCurrentPageUrl()
  if (!path.includes('landing')) {
    Taro.navigateTo({
      url: "/pages/landing/landing"
    });
  }
}

const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

const customInterceptor = (chain) => {

  const requestParams = chain.requestParams

  const { url, data } = requestParams;

  return chain.proceed(requestParams).then(async res => {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject("请求资源不存在")

    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject("服务端出现了问题")

    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      Taro.setStorageSync("Authorization", "")
      pageToLogin()
      // TODO 根据自身业务修改
      return Promise.reject("没有权限访问");

    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      Taro.setStorageSync("Authorization", "")
      pageToLogin()
      return Promise.reject("需要鉴权")

    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      if (res.data.code === 5) {

        Taro.setStorageSync(AUTH_KEY, "")

        // token 失效，重新登录
        return new Promise(resolve => {
          Taro.login({
            async success(resp) {
              console.log(resp);
              let code = resp.code

              try {
                const result = await post('/api/v1/user/wechat/mock', {
                  user_id: "1"
                })

                Taro.setStorageSync(AUTH_KEY, result.data.token)

                resolve(
                  await post(url.substring(BASE_URL.length), data)
                );

              } catch (err) {
                console.log(err)
              }

            }
          })
        })
      }

      return res.data
    }
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]

export default interceptors
