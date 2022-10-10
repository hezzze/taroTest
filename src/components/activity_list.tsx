import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { IActivity } from 'src/interfaces/app'

import { Activity } from './activity'
import { Loading } from './loading'

import './activity_list.less'

interface IProps extends PropsWithChildren {
  activities: IActivity[],
  loading: boolean
}

class ActivityList extends Component<IProps> {
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
        <Activity key={index} activity={activity} />
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