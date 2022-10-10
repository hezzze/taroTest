import { eventCenter } from '@tarojs/taro'
import { IActivity, IProfile } from '../interfaces/app'


// tslint:disable-next-line
export const ACTIVITY_DETAIL_NAVIGATE = 'activity_detail_navigate'
export const PROFILE_EDIT_NAVIGAGE = 'profile_edit_navigate'

export const GlobalState = {
    activity: {} as IActivity,
    profile: {} as IProfile
}

eventCenter.on(ACTIVITY_DETAIL_NAVIGATE, (activity: IActivity) => {
    GlobalState.activity = activity
})

eventCenter.on(PROFILE_EDIT_NAVIGAGE, (profile: IProfile) => {
    GlobalState.profile = profile
})

