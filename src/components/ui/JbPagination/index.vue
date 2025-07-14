<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { defineEmits } from 'vue'

defineOptions({
  name: 'JbPagination',
})

const props = defineProps({
  perPage: {
    type: [String, Number],
    default: 10,
  },
})

const emit = defineEmits(['change-pagination'])
const route = useRoute()

const pageNumbers = ref([20, 50])
const pageNumber = ref(20)
const pageCount = ref(1)

const buttonOptions = computed(() => ({
  'bg-color': 'green rounded',
  'text-color': 'white',
  class: 'p-2',
}))

function changePagination() {
  emit('change-pagination', {
    pageCount: pageCount.value,
    pageNumber: pageNumber.value,
  })
}

function changePageCount(item) {
  pageNumber.value = item
  changePagination()
}

function prevPage() {
  pageCount.value--
  changePagination()
}

function nextPage() {
  pageCount.value++
  changePagination()
}

onMounted(() => {
  if (route.query.page) pageCount.value = route.query.page
  if (route.query.limit) pageNumber.value = route.query.limit
})
</script>

<template>
  <div>
    <div class="text-center">
      <jb-button v-bind="buttonOptions" @click="prevPage" :disabled="pageCount <= 1">{{
        $t('general.prev')
      }}</jb-button>
      <div class="font-weight-bolder rounded d-inline-block mx-2 bg-grey py-2 px-3">
        {{ pageCount }}
      </div>
      <jb-button v-bind="buttonOptions" @click="nextPage">{{ $t('general.next') }}</jb-button>
    </div>
    <div class="text-center mt-4">
      {{ $t('general.onEveryPage') }}
      <jb-button
        v-for="item of pageNumbers"
        :key="item"
        :bg-color="pageNumber == item ? 'green' : 'grey'"
        :text-color="pageNumber == item ? 'white' : 'black'"
        :class="[pageNumber == item ? 'p-2' : 'p-1', 'mr-2 rounded']"
        @click="changePageCount(item)"
        >{{ item }}</jb-button
      >
      {{ $t('general.showResults') }}
    </div>
  </div>
</template>
