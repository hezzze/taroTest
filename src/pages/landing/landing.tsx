import Taro, { eventCenter } from '@tarojs/taro'
import { Component } from 'react'
import { AtAvatar, AtTabs, AtTabsPane } from 'taro-ui'
import { View, Text, Button, Image, CommonEventFunction, ButtonProps, BaseEventOrig } from '@tarojs/components'
import './landing.less'

import logo from '../../resource/logo.png'


export default class Profile extends Component<{}> {


  handleLogin: CommonEventFunction<ButtonProps.onGetPhoneNumberEventDetail> = (e: BaseEventOrig<ButtonProps.onGetPhoneNumberEventDetail>) => {
    console.log(e.detail);
    let { encryptedData, iv } = e.detail
    Taro.checkSession({
      success: function () {
        console.log('有session，已登陆');
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        // session_key 已经失效，需要重新执行登录流程
        console.log('未登陆');
        //重新登录
        Taro.login({
          success(res) {
            console.log(res);
            let code = res.code
            Taro.request({
              url: 'url',//后端url
              method: 'GET',
              data: {
                // appi,//账号
                // secret,//账号
                code,//login获取到的code
                encryptedData,
                iv
              },
              success(phoneNumber) {
                console.log(phoneNumber)

              }
            })
          }
        })
      }
    })

  }

  render() {

    return (
      <View className='landing-page'>
        <Image src={logo} className='logo' mode='widthFix'></Image>
        <Text className='slogan'>声音所在・意义所在</Text>
        <View className='action-panel'>
          <Button className='button-default-wide'>游客登录</Button>
          <Button openType='getPhoneNumber' onGetPhoneNumber={this.handleLogin} className='button-primary-wide'>声所会员登录</Button>
        </View>
      </View>
    )
  }
}
