import { Component, PropsWithChildren } from 'react'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import { IActivity } from 'src/interfaces/app'
import './confirm_signup.less'

import { GlobalState } from '../../utils'

import { ActivityCard } from '../../components/activity_card'

interface IState {
  loading: boolean
  activity: IActivity
}

export default class ConfirmSignup extends Component<PropsWithChildren> {
  state = {
    // loading: true,
    activity: {} as IActivity
  } as IState

  config = {
    navigationBarTitleText: '确认活动'
  }

  componentWillMount() {
    this.setState({
      activity: GlobalState.activity
    })
  }

  render() {
    const { activity } = this.state;

    return (
      <View className='confirm-signup-page'>
        <ActivityCard activity={activity} />
        <View className='signup-form'>
          <View>
            <Text className='form-title'>确认信息</Text>
          </View>
          <View className='form-input-row'>
            <Text className='input-title'>姓名</Text>
            <Input type='text' placeholder='输入姓名' focus />
          </View>
          <View className='form-input-row'>
            <Text className='input-title'>手机号</Text>
            <Input type='number' placeholder='输入手机号' focus />
          </View>
          <View className='form-input-row'>
            <Text className='input-title'>报名理由</Text>
            <Input type='text' placeholder='输入报名理由' focus />
          </View>
        </View>
        <View className='action-panel'>
          <Button className='button-primary-wide'>提交</Button>
        </View>
      </View>
    )
  }
}
