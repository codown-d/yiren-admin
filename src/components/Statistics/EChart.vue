<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

interface Props {
  options: echarts.EChartsOption
}

const props = defineProps<Props>()
const chartRef = ref<HTMLDivElement>()
let chart: echarts.ECharts | null = null

onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value)
    chart.setOption(props.options)
  }
})

watch(
  () => props.options,
  (newVal) => {
    if (chart) {
      chart.setOption(newVal, true)
    }
  },
  { deep: true }
)

onBeforeUnmount(() => {
  chart?.dispose()
})
</script>

<template>
  <div ref="chartRef" class="w-full h-full"></div>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
