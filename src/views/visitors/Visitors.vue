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
      <!-- <clients-table checkable/> -->
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Visit purpose</th>
            <th>Department</th>
            <th>Status</th>
            <th>Check-in Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="visitor in visitorList" :key="visitor.id">
            <td>{{ visitor.fname }}</td>
            <td>{{ visitor.lname }}</td>
            <td>{{ visitor.email }}</td>
            <td>{{ visitor.phone }}</td>
            <td>{{ visitor.visit_purpose }}</td>
            <td>{{ visitor.department }}</td>
            <td>{{ visitor.status }}</td>
            <td>{{ visitor.checkintime }}</td>
          </tr>
        </tbody>
      </table>
    </card-component>
  </main-section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff } from '@mdi/js'
import MainSection from '@/components/MainSection'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'
import VisitorService from '@/services/VisitorService'

export default {
  name: 'Tables',
  components: {
    MainSection,
    HeroBar,
    CardComponent
  },
  visitorList: [],
  setup () {
    const titleStack = ref(['Admin', 'Tables'])
    const visitorList = ref([])

    onMounted(async () => {
      try {
        visitorList.value = await VisitorService.getVisitors()
      } catch (error) {
        console.error(error)
      }
    })

    return {
      titleStack,
      mdiMonitorCellphone,
      mdiAccountMultiple,
      mdiTableBorder,
      mdiTableOff,
      visitorList
    }
  }
}

</script>
