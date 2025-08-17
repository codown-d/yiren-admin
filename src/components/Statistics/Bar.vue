<script setup lang="ts">
import { merge } from 'lodash-es'
import EChart from './EChart.vue'
let props = defineProps({
  options: Object
})
const barOptions = {
  title: {
    text: ''
  },
  tooltip: {},
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
      type: 'bar'
    }
  ]
}
let options: any = computed(() => merge({}, barOptions, props.options))
</script>
<template>
  <EChart :options="options" style="height: 400px;" />
</template>
