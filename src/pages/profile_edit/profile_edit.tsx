import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import { View, Button, Input, Text } from '@tarojs/components'
import { IProfile } from 'src/interfaces/app'
import { AtAvatar, AtIcon } from 'taro-ui'

// having issues with taro-ui AtInput label not showing up correctly
// copied the code from repo directly
import AtInput from '../../components/input'
import AtTextarea from '../../components/textarea'

import './profile_edit.less'

import { GlobalState } from '../../utils'

import prof1 from '../../resource/prof1.png'

interface IState {
  loading: boolean
  profile: IProfile
}

const PROFILE_FIELDS = [
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '性别',
    key: 'gender'
  },
  {
    title: '电话',
    key: 'phone',
    type: 'phone'
  },
  {
    title: '微信号',
    key: 'wechat'
  },
  {
    title: '出生年月',
    key: 'birthday'
  },
  {
    title: '年龄',
    key: 'age',
    type: 'number'
  },
  {
    title: '星座',
    key: 'zodiac'
  },
  {
    title: '昵称',
    key: 'nickname'
  },
  {
    title: '家乡省份',
    key: 'homeProvince'
  },
  {
    title: '家乡城市',
    key: 'homeCity'
  },
  {
    title: '学校',
    key: 'school'
  }
]

export default class ProfileEdit extends Component<PropsWithChildren> {
  state = {
    // loading: true,
    profile: {} as IProfile
  } as IState

  componentDidMount() {
    this.setState({
      profile: Object.assign({}, GlobalState.profile)
    })
  }

  handleInput = (key, value) => {
    this.setState({
      profile: Object.assign(this.state.profile, {
        [key]: value
      })
    })
  }

  handleNavigate = () => {
    // 跳转到帖子详情
    Taro.navigateTo({
      url: '/pages/tags_edit/tags_edit'
    })
  }

  render() {
    const { profile } = this.state;

    const tags = profile.tags?.map((t, i) => (
      <View key={i} className='profile-tag'>{t}</View>
    ))

    const statuses = profile.relationshipStatus?.map((s, i) => (
      <View key={i} className='profile-tag'>{s}</View>
    ))

    return (
      <View className='profile-edit-page'>
        <View className='avatar-view'>
          <View className='avatar-box'>
            <AtAvatar className='profile-pic' circle size='large' image={profile.imageUrl}></AtAvatar>
            <AtIcon className='profile-pic-edit-icon' value='camera' color='#7355EF'></AtIcon>
          </View>
        </View>
        <View className='edit-form-box'>
          {
            PROFILE_FIELDS.map((f, i) => (
              <AtInput
                key={i}
                name={f.key}
                title={f.title}
                type={f.type || 'text'}
                placeholder=''
                value={profile[f.key]}
                onChange={this.handleInput.bind(this, f.key)}
              />))
          }
        </View>
        <View className='my-tags-box'>
          <View className='box-row'>
            <Text className='box-title'>我的标签</Text>
            <Button className='tags-edit-btn' onClick={this.handleNavigate}>编辑</Button>
          </View>
          <View className='box-row'>{tags}</View>
        </View>
        <View className='my-relationship-box'>
          <View className='box-row'>
            <Text className='box-title'>我的情感状况</Text>
          </View>
          <View className='box-row'>{statuses}</View>
        </View>
        <View className='self-intro-box'>
          <View className='box-row'>
            <Text className='box-title'>自我介绍</Text>
          </View>
          <View className='box-row'>
            <AtTextarea
              height='300'
              value={profile.selfIntro}
              onChange={this.handleInput.bind(this, 'selfIntro')}
              maxLength={200}
              placeholder='介绍一下自己吧...'
            />
          </View>
        </View>
        <View className='wish-box'>
          <View className='box-row'>
            <Text className='box-title'>加入声所，我希望获得？</Text>
          </View>
          <View className='box-row'>
            <AtTextarea
              value={profile.wish}
              onChange={this.handleInput.bind(this, 'wish')}
              maxLength={100}
              placeholder='写下自己的想法...'
            />
          </View>
        </View>
        <View className='action-panel'>
          <Button className='button-primary-wide'>保存</Button>
        </View>
      </View>
    )
  }
}
