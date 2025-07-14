<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'JbImage',
})

const props = defineProps({
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  loading: {
    type: String,
    default: 'eager',
  },
  width: {
    type: [Number, String],
    default: null,
  },
  height: {
    type: [Number, String],
    default: null,
  },
})

const imageOptions = computed(() => {
  const { src, alt, loading, width, height } = props

  return {
    src,
    alt,
    loading,
    width,
    height,
  }
})
</script>

<template>
  <img v-bind="imageOptions" />
</template>
