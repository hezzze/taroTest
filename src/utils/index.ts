import { eventCenter } from '@tarojs/taro'
import { IActivity } from '../interfaces/activity'


// tslint:disable-next-line
export const ACTIVITY_DETAIL_NAVIGATE = 'activity_detail_navigate'

export const GlobalState = {
    activity: {} as IActivity
}

eventCenter.on(ACTIVITY_DETAIL_NAVIGATE, (activity: IActivity) => {
    GlobalState.activity = activity
})