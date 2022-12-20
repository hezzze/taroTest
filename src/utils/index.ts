import { eventCenter } from '@tarojs/taro'
import { IActivity, IProfile } from '../interfaces/app'

interface ITag {
    id: number
    title: string
    category: number
}

// tslint:disable-next-line
export const ACTIVITY_DETAIL_NAVIGATE = 'activity_detail_navigate'
export const PROFILE_EDIT_NAVIGAGE = 'profile_edit_navigate'
export const AUTH_KEY = 'Authorization'
export const TAGS: ITag[] = [
    {
        title: '创业',
        id: 0,
        category: 0
    },
    {
        title: '户外',
        id: 1,
        category: 0
    },
    {
        title: '愤青',
        id: 2,
        category: 0
    },
    {
        title: '斜杠青年',
        id: 3,
        category: 0
    },
    {
        title: '音乐',
        id: 4,
        category: 0
    },
    {
        title: '公益',
        id: 5,
        category: 3
    },
    {
        title: '唱歌',
        id: 6,
        category: 1
    },
    {
        title: '打工狗',
        id: 7,
        category: 2
    }
]

export function getTag(id: string) {
    return TAGS.find(t => t.id === +id)
}

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

