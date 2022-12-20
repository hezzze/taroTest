import Taro, { eventCenter } from '@tarojs/taro'
import { Component } from 'react'
import { AtAvatar, AtTabs, AtTabsPane } from 'taro-ui'
import { View, Text, Button, Image } from '@tarojs/components'
import { IActivity, IProfile } from 'src/interfaces/app'
import { ActivityCard } from '../../components/activity_card'
import { PROFILE_EDIT_NAVIGAGE } from '../../utils'
import { post } from '../../utils/api'
import './profile.less'

import type { MemberDetailResponse } from '../../utils/api/types/MemberDetailResponse'

import prof1 from '../../resource/prof1.png'
import { getTag } from '../../utils'
import type CustomTabBar from '../../custom-tab-bar'

interface IState {
  current: number
  profile: IProfile
}

const DUMMY_ACTIVITY1 = {
  title: "声所XAquaX桨板｜朝阳公园荷花池",
  aid: 1,
  dateStr: "周六6pm-9pm",
  imgUrl: 'https://meng2x.oss-cn-beijing.aliyuncs.com/m2_api/activity1_a8f0c47fd1.png?updated_at=2022-09-14T15:11:51.632Z',
  startTime: '2022-6-23 12:00',
  endTime: '2022-6-23 13:00',
  addressName: '北京国际旅游度假区水上乐园',
  location: '北京延庆圣地西路10000号，2单元，3楼4001',
  price: 98.00,
}

const DUMMY_ACTIVITY2 = {
  title: "声所X桨板XAqua｜荷花池朝阳公园",
  aid: 2,
  dateStr: "周六7pm-10pm",
  imgUrl: 'https://meng2x.oss-cn-beijing.aliyuncs.com/m2_api/activity1_a8f0c47fd1.png?updated_at=2022-09-14T15:11:51.632Z',
  startTime: '2022-6-23 12:00',
  endTime: '2022-6-23 13:00',
  addressName: '北京国际旅游度假区水上乐园',
  location: '北京延庆圣地西路10000号，2单元，3楼4001',
  price: 98.00,
  refundable: true
}

const DUMMY_ACTIVITIES: Array<IActivity> = [
  DUMMY_ACTIVITY1,
  DUMMY_ACTIVITY2
]

function getProfile(data: MemberDetailResponse): IProfile {
  return {
    name: data.name,
    gender: data.gender || '未知',
    phone: data.mobile,
    wechat: data.wechat_no,
    birthday: data.birthdate,
    age: data.age,
    zodiac: data.constellation,
    nickname: data.nickname,
    tags: data.tags,
    relationshipStatus: ['单身贵族', '名花有主', '开放关系'],
    region: data.location,
    hometown: data.hometown,
    degree: data.degree,
    school: data.school,
    selfIntro: data.introduction,
    wish: '加入声所，希望能结识更多真诚的好朋友。',
    imageUrl: prof1
  }
}


export default class Profile extends Component<{}, IState> {
  pageCtx = Taro.getCurrentInstance().page

  public constructor(props: any) {
    super(props)
    this.state = {
      current: 0,
      profile: null
    }
  }

  componentDidShow() {
    // 自定义 tabbar
    const tabbar = Taro.getTabBar<CustomTabBar>(this.pageCtx)
    tabbar?.setSelected(2)
  }

  async componentDidMount() {
    try {
      // const res = await Taro.request({
      //   url: api.getLatestActivities()
      // })

      const res = await post('/api/v1/user/member/detail', {
        search: {
          member_id: 1
        }
      })

      console.log(res.data)

      this.setState({
        profile: getProfile(res.data)
      })
    } catch (error) {
      console.log(error)
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }

  private handleClick(value: number): void {
    this.setState({
      current: value
    })
  }

  handleNavigate = () => {
    eventCenter.trigger(PROFILE_EDIT_NAVIGAGE, this.state.profile)
    // 跳转到帖子详情
    Taro.navigateTo({
      url: '/pages/profile_edit/profile_edit'
    })
  }

  render() {
    const { profile } = this.state
    if (!profile) return

    const tags = profile.tags.map((t, i) => (
      <View key={i} className='profile-tag'>{getTag(t)?.title}</View>
    ))

    const tabList = [
      { title: '已报名的活动' },
      { title: '已参加的活动' }
    ]

    const activitiesSignedUp = DUMMY_ACTIVITIES

    const { current } = this.state;
    return (
      <View className='profile-page'>
        <View className='profile-card'>
          <View className='card-bg'></View>
          <AtAvatar className='profile-pic' circle size='large' image={profile.imageUrl}></AtAvatar>
          <Button className='profile-edit-btn' onClick={this.handleNavigate}>编辑</Button>
          <View className='info-box'>
            <View className='profile-name info-row'>
              <Text>{profile.nickname}</Text>
            </View>
            <View className='profile-tags info-row'>
              {tags}
            </View>
            <View className='info-row'>
              <Text>现居：{profile.region}</Text>
            </View>
            <View className='info-row'>
              <Text>家乡：{profile.hometown}</Text>
            </View>
            <View className='info-row'>
              <Text>学历：{profile.degree} {profile.school}</Text>
            </View>
          </View>
        </View>
        <View className='activity-box'>
          <AtTabs
            swipeable={false}
            current={current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane current={current} index={0}>
              <View className='tab-content'>
                {activitiesSignedUp.map((a, i) => (
                  <ActivityCard key={i} activity={a} type='withBtns' refundBtn={a.refundable} />
                ))}
              </View>
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
              <View className='tab-content'>

              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}
