import Taro, { eventCenter } from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Navigator, Image } from '@tarojs/components'
import { IActivity } from 'src/interfaces/activity'
import api from '../utils/api'
import { ACTIVITY_DETAIL_NAVIGATE } from '../utils'

import './activity.less'


interface IProps {
  activity: IActivity
}

class Activity extends Component<IProps, PropsWithChildren> {

  handleNavigate = () => {
    const { aid, not_navi } = this.props.activity
    if (not_navi) {
      return
    }
    eventCenter.trigger(ACTIVITY_DETAIL_NAVIGATE, this.props.activity)
    // 跳转到帖子详情
    Taro.navigateTo({
      url: '/pages/activity_detail/activity_detail'
    })
  }

  render() {
    const { activity = {} as IActivity } = this.props

    return (
      <View className='activity-box' onClick={this.handleNavigate}>
        <Image
          className='activity-pic'
          mode='aspectFill'
          src={activity.imgUrl}
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
            {activity.title}
          </Text>
          <Text className='activity-date'>
            {activity.dateStr}
          </Text>
        </View>
      </View>
    )
  }
}

export { Activity }