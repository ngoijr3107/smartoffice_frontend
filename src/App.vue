<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <router-view />
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import { useStore } from 'vuex'
import { mdiDesktopMac, mdiTable, mdiViewList } from '@mdi/js'
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'

export default {
  name: 'Home',
  components: {
    AsideMenu,
    NavBar
  },
  setup () {
    const store = useStore()

    store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })

    const menu = ref(
      [
        'General',
        [
          {
            to: '/',
            icon: mdiDesktopMac,
            label: 'Dashboard'
          },
          {
            to: '/visitors',
            label: 'Visitors',
            icon: mdiTable,
            updateMark: true
          }
        ],
        'Settings',
        [
          {
            label: 'Configuration',
            subLabel: 'Submenus Example',
            icon: mdiViewList,
            menu: [
              {
                to: '/purposes',
                label: 'Visit purpose',
                icon: mdiViewList
              },
              {
                to: '/departments',
                label: 'Departments',
                icon: mdiViewList
              },
              {
                to: '/sites',
                label: 'Sites',
                icon: mdiViewList
              }
            ]
          }
        ]
      ]
    )

    return {
      menu
    }
  }
}
</script>
