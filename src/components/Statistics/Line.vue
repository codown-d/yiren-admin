<script setup lang="ts">
import { merge } from 'lodash-es'
import EChart from './EChart.vue'

const lineOptions = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true
    }
  ]
}
let props = defineProps({
  options: Object
})

let options: any = computed(() => merge({}, lineOptions, props.options))
</script>

<template>
  <EChart :options="options" style="height: 400px;" />
</template>
