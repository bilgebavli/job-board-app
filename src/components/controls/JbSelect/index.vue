<template>
  <select class="form-select" v-model="selectValue" @change="change">
    <option :value="null" disabled>Select Category</option>
    <option v-for="(item, index) of items" :key="index" :value="item.value">
      {{ item.value }}
    </option>
  </select>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

defineOptions({
  name: 'JbSelect',
})

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue', 'on-change'])

const selectValue = ref(null)

function change() {
  emit('on-change', selectValue.value)
}

onBeforeMount(() => {
  selectValue.value = props.modelValue
})
</script>
