

import device from './device'   //设备管理
import organization from './organization'  //单位组织
import produce from './produce' //生产管理
import datainput from './datainput' //数据输入
import alternatrly from './alternately' //交互中心

const router = [
  {
  path: '/siborui',
  name :'siborui',
  meta: {
    title: '生产管理'
  },
  component: () => import('@/views/siborui'),
  children: [device, produce, organization, datainput, alternatrly]
}];
export default router