import { Component, PropsWithChildren } from 'react'
import { View, Button, Input, Text } from '@tarojs/components'
import { AtIcon, AtTabs, AtTabsPane } from 'taro-ui'
import { TAGS } from '../../utils'

import './tags_edit.less'


export default class ProfileEdit extends Component<PropsWithChildren> {
  state = {
    // loading: true,
    tags: TAGS,
    current: 0
  }

  removeTag = (tid) => {
    this.setState({
      tags: this.state.tags.filter(t => t.id !== tid)
    })
  }

  addTag = (t) => {
    this.setState({
      tags: [...this.state.tags, t]
    })
  }

  handleClick = (value: number): void => {
    this.setState({
      current: value
    })
  }

  filteredTagList = (category) => {
    return TAGS.filter(t => t.category === category).filter(t => {
      for (const tag of this.state.tags) {
        if (tag.id === t.id) return false
      }
      return true
    }).map((t, ti) => (
      <View key={ti} className='profile-tag' onClick={this.addTag.bind(this, t)}>
        {t.title}
      </View>
    ))
  }


  render() {

    const { tags, current } = this.state

    const tabList = [
      { title: '性格' },
      { title: '爱好' },
      { title: '足迹' },
      { title: '运动' }
    ]

    return (
      <View className='tags-edit-page'>
        <View className='tags-box'>
          <View className='tags-row'>
            {
              tags.map((t, i) => (
                <View key={i} className='edit-tag'>
                  <Text className='tag-text'>{t.title}</Text>
                  <AtIcon
                    value='close-circle'
                    color='#B7B6B9'
                    className='edit-tag-close-icon'
                    onClick={this.removeTag.bind(this, t.id)}
                  ></AtIcon>
                </View>
              ))
            }
          </View>
          <Text className='tags-count'>{tags.length}/8</Text>
        </View>
        <View className='tags-selector-box'>
          <AtTabs
            swipeable={false}
            current={current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane current={current} index={0}>
              <View className='tab-content'>
                {this.filteredTagList(0)}
              </View>
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
              <View className='tab-content'>
                {this.filteredTagList(1)}
              </View>
            </AtTabsPane>
            <AtTabsPane current={current} index={2}>
              <View className='tab-content'>
                {this.filteredTagList(2)}
              </View>
            </AtTabsPane>
            <AtTabsPane current={current} index={3}>
              <View className='tab-content'>
                {this.filteredTagList(3)}
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
        <View className='action-panel'>
          <Button className='button-primary-wide'>保存</Button>
        </View>
      </View>
    )
  }
}
