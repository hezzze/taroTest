import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './community.less'

export default class Community extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world Community</Text>
      </View>
    )
  }
}
