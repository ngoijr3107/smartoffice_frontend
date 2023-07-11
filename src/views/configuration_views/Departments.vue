<template>
  <hero-bar>
    Departments
    <template #right>
      <router-link to="/" class="button light">
        Dashboard
      </router-link>
    </template>
  </hero-bar>
  <main-section>

    <card-component title="All Departments" :icon="mdiTable" has-table>
      <!-- <clients-table checkable/> -->
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="department in departmentList" :key="department.id">
            <td>{{ department.code }}</td>
            <td>{{ department.department }}</td>
            <!-- <td>{{ visitor.lname }}</td> -->
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
import DepartmentService from '@/services/DepartmentService'

export default {
  name: 'Tables',
  components: {
    MainSection,
    HeroBar,
    CardComponent
  },
  departmentList: [],
  setup () {
    const titleStack = ref(['Admin', 'Tables'])
    const departmentList = ref([])

    onMounted(async () => {
      try {
        departmentList.value = await DepartmentService.getDepartment()
      } catch (error) {
        console.error(error)
      }
    })

    return {
      titleStack,
      mdiMonitorCellphone,
      mdiAccountMultiple,
      mdiTableBorder,
      mdiTable,
      departmentList
    }
  }
}

</script>
