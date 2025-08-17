<script setup lang="ts">
import { merge } from 'lodash-es'
import EChart from './EChart.vue'

const pieOptions = {
  title: {
    text: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: 'pie',
      radius: '60%',
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

let props = defineProps({
  options: Object
})

let options: any = computed(() => merge({}, pieOptions, props.options))
</script>

<template>
  <EChart :options="options" style="height: 400px;" />
</template>
