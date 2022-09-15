import { Component, PropsWithChildren } from 'react'

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ActivityList } from '../../components/activity_list'
import api from '../../utils/api'

import './index.less'

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

      const dummy = [{
        title: "声所XAquaX桨板｜朝阳公园荷花池",
        aid: 1,
        dateStr: "周六6pm-9pm"
      }, {
        title: "声所XAquaX桨板｜朝阳公园荷花池",
        aid: 2,
        dateStr: "周六6pm-9pm"
      }, {
        title: "声所XAquaX桨板｜朝阳公园荷花池",
        aid: 2,
        dateStr: "周六6pm-9pm"
      }]

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
