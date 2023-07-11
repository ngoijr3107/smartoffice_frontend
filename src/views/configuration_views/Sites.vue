<template>
  <hero-bar>
    Sites
    <template #right>
      <router-link to="/" class="button light">
        Dashboard
      </router-link>
    </template>
  </hero-bar>
  <main-section>

    <card-component title="All Sites" :icon="mdiTable" has-table>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="site in siteList" :key="site.id">
            <td>{{ site.name }}</td>
            <td>{{ site.description }}</td>
            <td>{{ site.address }}</td>
          </tr>
        </tbody>
      </table>
    </card-component>
  </main-section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTable } from '@mdi/js'
import MainSection from '@/components/MainSection'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'
import SiteService from '../../services/SiteService'

export default {
  name: 'Tables',
  components: {
    MainSection,
    HeroBar,
    CardComponent
  },
  setup () {
    const titleStack = ref(['Admin', 'Tables'])
    const siteList = []

    onMounted(async () => {
      try {
        SiteService.getSite(this)
      } catch (error) {
        console.log(error)
      }
    })

    return {
      titleStack,
      mdiMonitorCellphone,
      mdiAccountMultiple,
      mdiTableBorder,
      mdiTable,
      siteList
    }
  }
}

</script>
