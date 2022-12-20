import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { IActivity } from 'src/interfaces/app'
import React from 'react'

import VirtualList from '@tarojs/components/virtual-list'

import { Activity } from './activity'
import { Loading } from './loading'

import './activity_list.less'


interface IProps extends PropsWithChildren {
  activities: IActivity[],
  loading: boolean,
  onReachBottom: Function
}

class ActivityList extends Component<IProps> {
  static defaultProps = {
    activities: [],
    loading: true
  }

  render() {
    const { loading, activities } = this.props

    if (loading || activities.length === 0) {
      return <Loading />
    }

    const Row = React.memo(({ id, index, style, data }) => {
      return (
        <Activity key={id} activity={data[index]} />
      )
    })

    const dataLen = activities.length
    const itemSize = 300

    return (
      <VirtualList
        height={1200} /* 列表的高度 */
        width='100%' /* 列表的宽度 */
        itemData={activities} /* 渲染列表的数据 */
        itemCount={dataLen} /*  渲染列表的长度 */
        itemSize={itemSize} /* 列表单项的高度  */
        className='activity-list'
        onScroll={({ scrollDirection, scrollOffset }) => {
          if (
            // 避免重复加载数据
            !this.props.loading &&
            // 只有往前滚动我们才触发
            scrollDirection === 'forward' &&
            // 5 = (列表高度 / 单项列表高度)
            // 100 = 滚动提前加载量，可根据样式情况调整
            scrollOffset > ((dataLen - 5) * itemSize + 100)
          ) {
            this.props.onReachBottom()
          }
        }}
      >
        {Row}
      </VirtualList>
    )
  }
}

export { ActivityList }