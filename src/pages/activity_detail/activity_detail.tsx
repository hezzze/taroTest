import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Text, Icon, Button, Image } from '@tarojs/components'
import { IActivity } from 'src/interfaces/app'
import './activity_detail.less'

import { Activity } from '../../components/activity'

import { GlobalState } from '../../utils'

import activity1 from '../../resource/activity1.png'
import activity2 from '../../resource/activity2.png'
import addIcon from '../../resource/add_contact.png'

interface IState {
  loading: boolean
  activity: IActivity
}

export default class ActivityDetail extends Component<PropsWithChildren> {
  state = {
    // loading: true,
    activity: {} as IActivity
  } as IState

  config = {
    navigationBarTitleText: '活动详情'
  }

  componentWillMount() {
    this.setState({
      activity: GlobalState.activity
    })
  }

  handleNavigate = () => {
    // 跳转到帖子详情
    Taro.navigateTo({
      url: '/pages/confirm_signup/confirm_signup'
    })
  }

  render() {
    const { activity } = this.state;

    const rsvps = activity.rsvps.map((rsvp) => {
      return (
        <Image className='profile-pic' key={rsvp.uid} src={rsvp.profileUrl} />
      )
    })

    return (
      <View className='activity-detail-page'>
        <Activity activity={activity} />
        <View className='event-info-box'>
          <View className='box-row'>
            <Icon size='20' type='success' color='#6955EF' />
            <Text>{activity.startTime} 至 {activity.endTime} </Text>
          </View>
          <View className='box-row'>
            <Icon size='20' type='success' color='#6955EF' />
            <Text>{activity.addressName}</Text>
          </View>
          <View className='box-row truncate'>
            <Icon size='20' type='success' color='#6955EF' />
            <Text>{activity.location}</Text>
            <Button className='button-map'>查看地图</Button>
          </View>
          <View className='box-row'>
            <Icon size='20' type='success' color='#6955EF' />
            <Text>{activity.price.toFixed(2)}</Text>
          </View>
        </View>
        <View className='event-description-box'>
          <View className='box-row'>
            <Text >这种起源于夏威夷的水上运动，即使是小白也能在短时间内上手。在平静的水面上，你可以选择用任何姿势摆桨划水，站姿、坐姿、跪姿甚至是趴着都行。这比冲浪、皮划艇容易很多，却和冲浪一样非常“出片”，容易引起围观，于是，社交平台上迅速刮起一阵“桨板热”。 在桨板上远观湖光山色，近拥城市景观，疫情之后“憋坏”的人们不愿再去陆地上“人挤人”，而是开始在水面上解锁“新姿势”。</Text>
          </View>
          <View className='box-row'>
            <Image
              className='activity-pic'
              mode='aspectFill'
              src={activity1}
            />
          </View>
          <View className='box-row'>
            <Image
              className='activity-pic'
              mode='aspectFill'
              src={activity2}
            />
          </View>
        </View>
        <View className='event-rsvp-box'>
          <View className='box-row'>
            <Text>报名人数 （5/20）</Text>
          </View>
          <View className='box-row rsvp-row'>
            {rsvps}
            <Image className='add-icon' src={addIcon} />
          </View>
        </View>
        <View className='action-panel-bottom'>
          <Button className='button-default'>分享</Button>
          <Button className='button-primary' onClick={this.handleNavigate} >报名</Button>
        </View>
      </View>
    )
  }
}
