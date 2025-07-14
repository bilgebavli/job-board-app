<script setup>
import { computed, getCurrentInstance } from 'vue'

defineOptions({
  name: 'JbDivider',
})

const props = defineProps({
  color: {
    type: String,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
})

const instance = getCurrentInstance()

const componentName = computed(() => {
  const name = instance?.type?.name || ''

  return instance?.appContext.config.globalProperties.$helpers?.kebabCase(name) || ''
})

const dividerOptions = computed(() => ({
  class: {
    [componentName.value]: true,
    [`${componentName.value}--${props.color}`]: !!props.color,
    [`${componentName.value}--vertical`]: props.vertical,
  },
}))
</script>

<template>
  <hr v-bind="dividerOptions" />
</template>