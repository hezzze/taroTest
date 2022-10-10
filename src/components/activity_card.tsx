import { Image, View, Text, Button } from '@tarojs/components'
import { Component, PropsWithChildren } from 'react'
import { IActivity } from 'src/interfaces/app'
import { SFIcon } from './sf_icon'
import add_contact from '../resource/add_contact.png'
import location_mark from '../resource/location_mark.png'

import './activity_card.less'

interface IProps extends PropsWithChildren {
  type?: string
  activity: IActivity
  refundBtn?: boolean
}

class ActivityCard extends Component<IProps> {

  render() {

    // using object default for default prop value 
    // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/
    const { activity, type = 'default', refundBtn = false } = this.props

    return (
      <View className='activity-card'>
        <Image className='activity-pic' mode='aspectFill' src={activity.imgUrl} />
        <View className='card-info'>
          <View className='info-row'>
            <Text className='activity-title'>{activity.title}, {activity.dateStr}</Text>
          </View>
          <View className='info-row'>
            <SFIcon src={add_contact}></SFIcon>
            <Text className='row-text'>{activity.startTime} 至 {activity.endTime} </Text>
          </View>
          {
            type === 'default' && (<View className='info-row'>
              <SFIcon src={location_mark}></SFIcon>
              <Text className='row-text'>{activity.addressName}</Text>
            </View>)
          }
          {
            type === 'withBtns' && (<View className='btn-row'>
              {
                refundBtn && <Button className='btn-row-btn btn-default'>退款</Button>
              }
              <Button className='btn-row-btn btn-primary'>分享</Button>
            </View>)
          }
        </View>
      </View>
    )
  }
}

export { ActivityCard }