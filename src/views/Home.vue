<template>
  <!-- <title-bar :title-stack="titleStack" /> -->
  <hero-bar>
    Dashboard
  </hero-bar>
  <main-section>
    <tiles>
      <card-widget class="tile" color="text-green-500" :icon="mdiAccountMultiple" :number="512" label="Visitors" />
      <card-widget class="tile" color="text-blue-500" :icon="mdiCartOutline" :number="7770" prefix="$" label="Sales" />
      <card-widget class="tile" color="text-red-500" :icon="mdiChartTimelineVariant" :number="256" suffix="%"
        label="Performance" />
    </tiles>

  </main-section>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from 'vue'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config'
import MainSection from '@/components/MainSection'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardWidget from '@/components/CardWidget'

export default {
  name: 'Home',
  components: {
    MainSection,
    CardWidget,
    Tiles,
    HeroBar
    // TitleBar
  },
  setup () {
    const titleStack = ref(['Admin', 'Dashboard'])

    const chartOptions = chartConfig.chartOptions

    const chartData = ref(null)

    const fillChartData = () => {
      chartData.value = chartConfig.sampleChartData()
    }

    onMounted(() => {
      fillChartData()
    })

    return {
      titleStack,
      chartOptions,
      chartData,
      fillChartData,
      mdiAccountMultiple,
      mdiCartOutline,
      mdiChartTimelineVariant,
      mdiFinance,
      mdiMonitorCellphone,
      mdiReload
    }
  }
}
</script>
