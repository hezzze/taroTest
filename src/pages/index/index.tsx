import { Component, PropsWithChildren } from 'react'

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ActivityList } from '../../components/activity_list'
import api from '../../utils/api'

import './index.less'

import prof1 from '../../resource/prof1.png'
import prof2 from '../../resource/prof2.png'

const DUMMY_USER1 = {
  uid: 100,
  profileUrl: prof1
}

const DUMMY_USER2 = {
  uid: 102,
  profileUrl: prof2
}

const DUMMY_ACTIVITY = {
  title: "声所XAquaX桨板｜朝阳公园荷花池",
  aid: 1,
  dateStr: "周六6pm-9pm",
  imgUrl: 'https://meng2x.oss-cn-beijing.aliyuncs.com/m2_api/activity1_a8f0c47fd1.png?updated_at=2022-09-14T15:11:51.632Z',
  startTime: '2022-6-23 12:00',
  endTime: '2022-6-23 13:00',
  addressName: '北京国际旅游度假区水上乐园',
  location: '北京延庆圣地西路10000号，2单元，3楼4001',
  price: 98.00,
  rsvps: [
    DUMMY_USER1,
    DUMMY_USER2,
    ...[DUMMY_USER1, DUMMY_USER1, DUMMY_USER1]
  ]
}

class Index extends Component<PropsWithChildren> {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    loading: true,
    activities: []
  }

  async componentDidMount() {
    try {
      // const res = await Taro.request({
      //   url: api.getLatestActivities()
      // })

      const dummy = [DUMMY_ACTIVITY, DUMMY_ACTIVITY, DUMMY_ACTIVITY]

      this.setState({
        activities: dummy,
        loading: false
      })
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }

  render() {
    const { loading, activities } = this.state
    return (
      <View className='index'>
        <ActivityList
          activities={activities}
          loading={loading}
        />
      </View>
    )
  }
}

export default Index


// import { Component, PropsWithChildren } from 'react'
// import { View, Text } from '@tarojs/components'
// import './index.less'

// export default class Index extends Component<PropsWithChildren> {

//   componentWillMount() { }

//   componentDidMount() { }

//   componentWillUnmount() { }

//   componentDidShow() { }

//   componentDidHide() { }

//   render() {
//     return (
//       <View className='index'>
//         <Text>Hello world 活动</Text>
//       </View>
//     )
//   }
// }
