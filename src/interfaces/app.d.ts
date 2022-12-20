interface User {
  profileUrl: string
  uid: string
}

export interface IActivity {
  title: string
  aid: number
  dateStr: string
  imgUrl: string
  startTime: string
  endTime: string
  addressName: string
  location: string
  price: number
  rsvps?: Array<User>
  refundable?: boolean
}

export type IProfile = {
  name: string
  gender: string
  phone: string
  wechat: string
  birthday: string
  age: number
  zodiac: string
  nickname: string
  tags: Array<string>
  relationshipStatus: string[]
  region: string
  hometown: string
  degree: string
  school: string
  selfIntro: string
  wish: string
  imageUrl: string
}

