import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './activity_detail.less'

export default class ActivityDetail extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>活动详情</Text>
      </View>
    )
  }
}
