import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { Activity } from './activity'
import { Loading } from './loading'
import { IMember } from '../interfaces/member'
import { INode } from '../interfaces/node'

import './activity_list.less'

interface IProps {
  activities: IActivity[],
  loading: boolean
}

interface IActivity {
  title: string,
  id: number,
  key?: number
  dateStr: string
}

class ActivityList extends Component<IProps, PropsWithChildren> {
  static defaultProps = {
    activities: [],
    loading: true
  }

  render() {
    const { loading, activities } = this.props

    if (loading) {
      return <Loading />
    }

    const element = activities.map((activity, index) => {
      return (
        <Activity
          key={activity.id}
          dateStr={activity.dateStr}
          title={activity.title}
          aid={activity.id}
        />
      )
    })

    return (
      <View className='activity-list'>
        {element}
      </View>
    )
  }
}

export { ActivityList }