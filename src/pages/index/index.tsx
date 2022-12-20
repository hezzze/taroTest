import { Component, PropsWithChildren } from 'react'

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { IActivity } from 'src/interfaces/app'
import { ActivityList } from '../../components/activity_list'
import { post } from '../../utils/api'

import './index.less'

import prof1 from '../../resource/prof1.png'
import prof2 from '../../resource/prof2.png'

import type { ActivityItem } from '../../utils/api/types/ActivityItem'
import type CustomTabBar from '../../custom-tab-bar'


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

const getActivities = (activityDataList: ActivityItem[]) => {
  const activities: IActivity[] = activityDataList.map<IActivity>(a => ({
    title: a.activity_name!,
    aid: a.activity_id!,
    dateStr: a.start_at,
    imgUrl: DUMMY_ACTIVITY.imgUrl,
    startTime: a.start_at,
    endTime: a.end_at,
    addressName: a.location,
    location: a.location_geo,
    price: 10,
    rsvps: [
      DUMMY_USER1,
      DUMMY_USER2,
      ...[DUMMY_USER1, DUMMY_USER1, DUMMY_USER1]
    ]
  }))
  return activities
}

interface IndexState {
  loading: boolean
  activities: IActivity[]
  page: number
}

class Index extends Component<PropsWithChildren, IndexState> {
  pageCtx = Taro.getCurrentInstance().page

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    loading: true,
    activities: [],
    page: 1
  }

  componentDidShow() {
    // 自定义 tabbar
    const tabbar = Taro.getTabBar<CustomTabBar>(this.pageCtx)
    tabbar?.setSelected(0)
  }

  async componentDidMount() {
    try {
      // const res = await Taro.request({
      //   url: api.getLatestActivities()
      // })

      const res = await post('/api/v1/user/activity/list', {
        page: {
          page: this.state.page,
          page_size: 3
        }
      })

      const activities = getActivities(res.data.list)

      console.log(activities)
      this.setState({
        activities,
        loading: false,
        page: this.state.page + 1
      })
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }

  onReachBottom = async () => {
    if (this.state.activities.length > 3) {
      try {
        const res = await post('/api/v1/user/activity/list', {
          page: {
            page: this.state.page,
            page_size: 3
          }
        })

        this.setState({
          activities: [this.state.activities, ...getActivities(res.data.list)],
          loading: false,
          page: this.state.page + 1
        })
      }
      catch (e) {

      }
    }
  }

  render() {
    const { loading, activities } = this.state
    return (
      <View className='index'>
        <ActivityList
          activities={activities}
          loading={loading}
          onReachBottom={this.onReachBottom}
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
