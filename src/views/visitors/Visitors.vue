<template>
  <hero-bar>
    Visitors
    <template #right>
      <router-link to="/" class="button light">
        Dashboard
      </router-link>
    </template>
  </hero-bar>
  <main-section>

    <card-component title="Checked-In" :icon="mdiAccountMultiple" has-table>
      <clients-table checkable/>
    </card-component>
  </main-section>
</template>

<script>
import { ref } from 'vue'
import { mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff } from '@mdi/js'
import MainSection from '@/components/MainSection'
import ClientsTable from '@/components/ClientsTable'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'

export default {
  name: 'Tables',
  components: {
    MainSection,
    HeroBar,
    CardComponent,
    ClientsTable
  },
  setup () {
    const titleStack = ref(['Admin', 'Tables'])

    return {
      titleStack,
      mdiMonitorCellphone,
      mdiAccountMultiple,
      mdiTableBorder,
      mdiTableOff
    }
  }
}
</script>
