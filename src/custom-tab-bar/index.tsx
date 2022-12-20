import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage, Button } from '@tarojs/components'

import './index.less'

export default class CustomTabBar extends Component {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#56abe4',
    list: [{
      'iconPath': '../resource/comm_form_icon_gouxuan.png',
      'selectedIconPath': '../resource/comm_form_icon_gouxuan.png',
      pagePath: '/pages/index/index',
      text: '活动'
    }, {
      'iconPath': '../resource/comm_form_icon_gouxuan.png',
      'selectedIconPath': '../resource/comm_form_icon_gouxuan.png',
      pagePath: '/pages/community/community',
      text: '社群'
    }, {
      'iconPath': '../resource/comm_form_icon_gouxuan.png',
      'selectedIconPath': '../resource/comm_form_icon_gouxuan.png',
      pagePath: '/pages/profile/profile',
      text: '我的'
    }],
    isGuest: true
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx
    })
  }

  memberJoinRedirect = () => {
    Taro.navigateTo({
      url: '/pages/member_join/member_join'
    })
  }

  render() {
    const { list, selected, color, selectedColor, isGuest } = this.state

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          if (isGuest && index === 1) {
            return (
              <CoverView key={index} className='tab-bar-item' onClick={this.memberJoinRedirect}>
                <Button className='join-button'>加入声所</Button>
              </CoverView>
            )
          } else if (isGuest && index === 2) {
            return (
              <CoverView key={index} className='tab-bar-item'>
                <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
                <CoverView style={{ color: '#ccc' }}>{item.text}</CoverView>
              </CoverView>
            )
          }

          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}