<script setup>
import { computed, getCurrentInstance } from 'vue'

defineOptions({
  name: 'JbButton',
})

const props = defineProps({
  bgColor: {
    type: String,
  },
  textColor: {
    type: String,
  },
  block: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  textAlign: {
    type: String,
    default: 'center',
  },
  textTransform: {
    type: String,
  },
  textNormal: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [Object, String, Array],
    default: null,
  },
})

const instance = getCurrentInstance()

const isRoute = computed(() => Boolean(props.to))

const componentName = computed(() => {
  const name = instance?.type?.name || ''

  return instance?.appContext.config.globalProperties.$helpers?.kebabCase(name) || ''
})

const buttonOptions = computed(() => {
  const {
    textNormal,
    disabled,
    bgColor,
    textColor,
    textAlign,
    textTransform,
    block,
    flat,
    outline,
  } = props

  return {
    class: {
      [componentName.value]: true,
      [`${componentName.value}--text-normal`]: textNormal,
      [`${componentName.value}--route`]: isRoute.value,
      [`${componentName.value}--disabled`]: disabled,
      [`bg-${bgColor}`]: true,
      [`text-${textColor}`]: true,
      [`text-${textAlign}`]: true,
      [`text-${textTransform}`]: true,
      [`border-${textColor}`]: outline,
      'btn-block': block,
      'rounded-0': flat,
    },
    disabled: disabled,
  }
})
</script>

<template>
  <router-link v-if="isRoute" :to="to" v-bind="buttonOptions">
    <slot></slot>
  </router-link>
  <button v-else v-bind="buttonOptions">
    <slot></slot>
  </button>
</template>

