import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtSearchBar, AtAvatar } from 'taro-ui'
import { DUMMY_PROFILE, DUMMY_PROFILE2, DUMMY_PROFILE3, DUMMY_PROFILE4 } from '../../utils/api'



// import AtSearchBar from '../../components/search-bar'
import './community.less'

const PROFILES = [DUMMY_PROFILE, DUMMY_PROFILE2, DUMMY_PROFILE3, DUMMY_PROFILE4]

export default class Community extends Component<PropsWithChildren> {

  state = {
    searchVal: ''
  }

  onChange = (val) => {
    this.setState({
      searchVal: val
    })
  }



  render() {

    const profileItems = PROFILES.map((p, pi) => (
      <View key={pi} className='profile-list-item-box'>
        <View className='box-row'>
          <AtAvatar className='profile-pic' circle size='large' image={p.imageUrl}></AtAvatar>
          <Text className='profile-name'>{p.nickname}</Text>
        </View>
        <View className='box-row'>
          {
            p.tags?.map((t, ti) => (
              <View key={ti} className='profile-tag'>{t}</View>
            ))
          }
        </View>
      </View>
    ))

    return (
      <View className='community-page'>
        <AtSearchBar
          value={this.state.searchVal}
          onChange={this.onChange}
          placeholder='请输入关键字'
        />
        <View className='profile-list'>
          {profileItems}
        </View>
      </View>
    )
  }
}
