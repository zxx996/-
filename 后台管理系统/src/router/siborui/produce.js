import Index from '@/views/siborui/produce/index';
import arrange from "@/views/siborui/produce/arrange";
import arrangeadd from "@/views/siborui/produce/arrange/arrangeadd";
import gateway from "@/views/siborui/produce/gateway";
import gatewayadd from "@/views/siborui/produce/gateway/gatewayadd";
export default {
  path: '/siborui/produce',
  name: 'produce',
  component: Index,
  children: [
    {
      path: 'arrange',
      name: 'siborui.produce.arrange',
      component: arrange,
      meta: {}
    },
    {
      path: 'arrange/add',
      name: 'siborui.produce.arrange.add',
      component: arrangeadd,
      meta: {}
    },
    
    {
      path: 'gateway',
      name: 'siborui.produce.gateway',
      component: gateway,
      meta: {}
    },
    {
      path: 'gateway/add',
      name: 'siborui.produce.gateway.add',
      component: gatewayadd,
      meta: {}
    },
  ]
}

