import { IProfile } from 'src/interfaces/app'
import prof1 from '../resource/prof1.png'
import prof2 from '../resource/prof2.png'
import prof3 from '../resource/prof3.png'
import prof4 from '../resource/prof4.png'

const HOST_URI = 'https://www.v2ex.com/api/'

const ACTIVITIES = 'nodes/all.json'

function getLatestActivities() {
  return HOST_URI + ACTIVITIES
}

export const DUMMY_PROFILE: IProfile = {
  name: '王丽',
  nickname: '十月Angel',
  gender: '男',
  phone: '13912340900',
  wechat: 'angel089',
  birthday: '2003-09-12',
  age: 19,
  zodiac: '巨蟹座',
  tags: ['斜杠青年', '摇滚老炮儿'],
  relationshipStatus: ['单身贵族', '名花有主', '开放关系'],
  region: '北京',
  homeProvince: '内蒙古',
  homeCity: '乌鲁木齐',
  degree: '硕士',
  school: '北京大学',
  selfIntro: '我叫王丽，出身在闻名于是的煤醋之乡一山西。性格比较温和、谦虚、认真细致、踏实、吃苦耐劳、有较强的责任心和社会适应能力。即将于 2021 年 6 月毕业于河南工业职业技术学院。',
  wish: '加入声所，希望能结识更多真诚的好朋友。',
  imageUrl: prof1
}

export const DUMMY_PROFILE2: IProfile = {
  name: '王丽',
  nickname: '耿鸿',
  gender: '男',
  phone: '13912340900',
  wechat: 'angel089',
  birthday: '2003-09-12',
  age: 19,
  zodiac: '巨蟹座',
  tags: ['斜杠青年', '摇滚老炮儿', '设计师', '连续创业者', '乐队主唱'],
  relationshipStatus: ['单身贵族', '名花有主', '开放关系'],
  region: '北京',
  homeProvince: '内蒙古',
  homeCity: '乌鲁木齐',
  degree: '硕士',
  school: '北京大学',
  selfIntro: '我叫王丽，出身在闻名于是的煤醋之乡一山西。性格比较温和、谦虚、认真细致、踏实、吃苦耐劳、有较强的责任心和社会适应能力。即将于 2021 年 6 月毕业于河南工业职业技术学院。',
  wish: '加入声所，希望能结识更多真诚的好朋友。',
  imageUrl: prof2
}

export const DUMMY_PROFILE3: IProfile = {
  name: '王丽',
  nickname: 'Jack',
  gender: '男',
  phone: '13912340900',
  wechat: 'angel089',
  birthday: '2003-09-12',
  age: 19,
  zodiac: '巨蟹座',
  tags: ['斜杠青年', '摇滚老炮儿', '设计师', '连续创业者', '乐队主唱'],
  relationshipStatus: ['单身贵族', '名花有主', '开放关系'],
  region: '北京',
  homeProvince: '内蒙古',
  homeCity: '乌鲁木齐',
  degree: '硕士',
  school: '北京大学',
  selfIntro: '我叫王丽，出身在闻名于是的煤醋之乡一山西。性格比较温和、谦虚、认真细致、踏实、吃苦耐劳、有较强的责任心和社会适应能力。即将于 2021 年 6 月毕业于河南工业职业技术学院。',
  wish: '加入声所，希望能结识更多真诚的好朋友。',
  imageUrl: prof3
}

export const DUMMY_PROFILE4: IProfile = {
  name: '王丽',
  nickname: '十月Angel',
  gender: '男',
  phone: '13912340900',
  wechat: 'angel089',
  birthday: '2003-09-12',
  age: 19,
  zodiac: '巨蟹座',
  tags: ['斜杠青年', '摇滚老炮儿'],
  relationshipStatus: ['单身贵族', '名花有主', '开放关系'],
  region: '北京',
  homeProvince: '内蒙古',
  homeCity: '乌鲁木齐',
  degree: '硕士',
  school: '北京大学',
  selfIntro: '我叫王丽，出身在闻名于是的煤醋之乡一山西。性格比较温和、谦虚、认真细致、踏实、吃苦耐劳、有较强的责任心和社会适应能力。即将于 2021 年 6 月毕业于河南工业职业技术学院。',
  wish: '加入声所，希望能结识更多真诚的好朋友。',
  imageUrl: prof4
}

export default {
  getLatestActivities
}