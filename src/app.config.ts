export default defineAppConfig({
  pages: [
    // 'pages/landing/landing',
    'pages/index/index',
    'pages/profile/profile',
    'pages/profile_edit/profile_edit',
    'pages/community/community',
    'pages/activity_detail/activity_detail',
    'pages/confirm_signup/confirm_signup',
    'pages/tags_edit/tags_edit',
    'pages/member_join/member_join'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      'iconPath': 'resource/comm_form_icon_gouxuan.png',
      'selectedIconPath': 'resource/comm_form_icon_gouxuan.png',
      pagePath: 'pages/index/index',
      text: '活动'
    }, {
      'iconPath': 'resource/comm_form_icon_gouxuan.png',
      'selectedIconPath': 'resource/comm_form_icon_gouxuan.png',
      pagePath: 'pages/community/community',
      text: '社群'
    }, {
      'iconPath': 'resource/comm_form_icon_gouxuan.png',
      'selectedIconPath': 'resource/comm_form_icon_gouxuan.png',
      pagePath: 'pages/profile/profile',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white',
    'custom': true
  },
})
