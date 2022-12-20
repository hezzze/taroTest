import Taro from "@tarojs/taro";
import { AUTH_KEY } from '..'
import interceptors from './interceptors'


interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://47.108.160.173:9061' : 'https://example.com'

function request(path, data, method): Promise<any> {
    return Taro.request({
        url: `${BASE_URL}${path}`,
        data,
        header: {
            "content-type": "application/json",
            'Authorization': `Bearer ${Taro.getStorageSync(AUTH_KEY)}`
        },
        timeout: 10000,
        method: method,
        dataType: "json",
        success: function (res) {
            //todo codec处理
            return Promise.resolve(res.data);
        },
        fail: function (err) {
            //todo 异常处理
            console.log(err);
        },
    });
}
function get(path) {
    return request(path, null, "GET");
}

function post(path, data) {
    return request(path, data, "POST");
}
function del(path) {
    return request(path, null, "DELETE");
}
function put(path, data) {
    return request(path, data, "POST");
}
export { get, post, del, put };