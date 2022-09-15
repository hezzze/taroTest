const HOST_URI = 'https://www.v2ex.com/api/'

const ACTIVITIES = 'nodes/all.json'

function getLatestActivities() {
  return HOST_URI + ACTIVITIES
}

export default {
  getLatestActivities
}