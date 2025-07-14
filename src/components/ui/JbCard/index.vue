<script setup>
import { computed, getCurrentInstance } from 'vue'

defineOptions({
  name: 'JbCard',
})

const instance = getCurrentInstance()
const slots = defineSlots()

const componentName = computed(() => {
  const name = instance?.type?.name || ''

  return instance?.appContext.config.globalProperties.$helpers?.kebabCase(name) || ''
})

const isHeader = computed(() => Boolean(slots.header))
const isFooter = computed(() => Boolean(slots.footer))

const cardOptions = computed(() => ({
  class: {
    card: true,
    [componentName.value]: true,
  },
}))
</script>

<template>
  <div v-bind="cardOptions">
    <div v-if="isHeader" class="card-header bg-white pt-4 border-0">
      <slot name="header"></slot>
    </div>
    <div class="card-body py-0"><slot></slot></div>
    <div v-if="isFooter" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
