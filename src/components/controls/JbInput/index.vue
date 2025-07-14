<template>
  <!-- <button v-bind="buttonOptions" @click="emits('click')">
    {{ title }}
  </button> -->
  <input v-model="initValue" v-bind="inputOptions" @input="input" />
</template>

<script setup>
import { onBeforeMount, ref, computed } from 'vue'

defineOptions({
  name: 'JbInput',
})

const emits = defineEmits(['input'])

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
  },
  classes: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const initValue = ref(null)

const inputOptions = computed(() => {
  const { type, placeholder, classes, disabled } = props
  return {
    type,
    placeholder,
    class: `form-control ${classes}`,
    disabled,
  }
})

const input = () => {
  emits('input', initValue.value)
}

onBeforeMount(() => {
  initValue.value = props.modelValue
})
</script>