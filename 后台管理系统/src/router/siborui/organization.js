import Index from '@/views/siborui/organization/index'
import user from '@/views/siborui/organization/user'
import role from '@/views/siborui/organization/role'
import useradd from "@/views/siborui/organization/user/useradd"

export default {
  path: '/siborui/organization',
  name: 'organization',
  component: Index,
  children: [
    {
      path: 'user',
      name: 'siborui.organization.user',
      component: user,
      meta: {}
    },
    {
      path: 'role',
      name: 'siborui.organization.role',
      component: role,
      meta: {}
    },
    {
      path: 'user/useradd',
      name: 'siborui.organzation.user.add',
      component: useradd,
      meta:{}
    }
  ]
}

