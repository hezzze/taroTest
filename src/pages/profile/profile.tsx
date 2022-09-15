import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './profile.less'

export default class Profile extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world profile！</Text>
      </View>
    )
  }
}
