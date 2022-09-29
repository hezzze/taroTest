interface User {
  profileUrl: string
  uid: string
}

export interface IActivity {
  title: string
  aid: string
  dateStr: string
  imgUrl: string
  startTime: string
  endTime: string
  addressName: string
  location: string
  price: number
  rsvps: [User]
}

