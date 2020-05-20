import Index from '@/views/siborui/device/index'
import realtime from '@/views/siborui/device/realtime'
import list from '@/views/siborui/device/list'
import history from '@/views/siborui/device/history'
import ljshow from '@/views/siborui/device/ljshow'


export default {
  path: '/siborui/device',
  name: 'device',
  component: Index,
  children: [
    {
      path: 'realtime',
      name: 'siborui.device.realtime',
      component: realtime,
      meta: {}
    },
    {
      path: 'list',
      name: 'siborui.device.list',
      component: list,
      meta: {}
    },
    {
      path: 'history',
      name: 'siborui.device.history',
      component: history,
      meta: {}
    },
    {
      path: "ljshow",
      name: 'siborui.device.ljshow',
      component: ljshow,
      meta: {}
    }
  ]
}

