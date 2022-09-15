import Taro, { eventCenter } from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Navigator, Image } from '@tarojs/components'

import api from '../utils/api'
// import { timeagoInst, Thread_DETAIL_NAVIGATE } from '../utils'
import { IMember } from '../interfaces/member'
import { INode } from '../interfaces/node'

import './activity.less'


interface IProps {
  title: string,
  member: IMember,
  node: INode,
  last_modified: number,
  aid: number,
  dateStr: string,
  not_navi?: boolean // 不导航到 detail
}

class Activity extends Component<IProps, PropsWithChildren> {

  handleNavigate = () => {
    const { aid, not_navi } = this.props
    if (not_navi) {
      return
    }
    // eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props)
    // 跳转到帖子详情
    Taro.navigateTo({
      url: '/pages/activity_detail/activity_detail'
    })
  }

  render() {
    const { title, dateStr } = this.props

    return (
      <View className='activity-box' onClick={this.handleNavigate}>
        <Image
          className='activity-pic'
          mode='aspectFill'
          src='https://meng2x.oss-cn-beijing.aliyuncs.com/m2_api/activity1_a8f0c47fd1.png?updated_at=2022-09-14T15:11:51.632Z'
        />
        <View className='bookings-box'>
          <Text className='bookings'>15/20</Text>
        </View>
        <View className='date-box'>
          <Text className='month'>Jun</Text>
          <Text className='day'>28</Text>
        </View>
        <View className='tag-box'>
          <Text>户外活动</Text>
        </View>
        <View className='activity-title-box'>
          <Text className='activity-title'>
            {title}
          </Text>
          <Text className='activity-date'>
            {dateStr}
          </Text>
        </View>
      </View>
    )
  }
}

export { Activity }