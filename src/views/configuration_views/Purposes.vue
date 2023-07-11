<template>
  <hero-bar>
    Visit Purposes
    <template #right>
      <router-link to="/" class="button light">
        Dashboard
      </router-link>
    </template>
  </hero-bar>
  <main-section>

    <card-component title="All purposes" :icon="mdiTable" has-table>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="purpose in purposeList" :key="purpose.id">
            <td>{{ purpose.code }}</td>
            <td>{{ purpose.description }}</td>
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
import PurposeService from '@/services/PurposeService'

export default {
  name: 'Tables',
  components: {
    MainSection,
    HeroBar,
    CardComponent
  },
  setup () {
    const titleStack = ref(['Admin', 'Tables'])
    const purposeList = []

    onMounted(async () => {
      try {
        PurposeService.getPurpose(this)
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
      purposeList
    }
  }
}

</script>
