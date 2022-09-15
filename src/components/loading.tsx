import { View, Image } from '@tarojs/components'
import { Component, PropsWithChildren } from 'react'
import './loading.css'

const url = require('../resource/spiner.gif')

class Loading extends Component<PropsWithChildren> {
  render() {
    return (
      <View className='loading'>
        <Image src={url} className='img' />
      </View>
    )
  }
}

export { Loading }
