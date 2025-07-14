<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import JobItemCard from './JobItemCard'

defineOptions({
  name: 'JobList',
})

const props = defineProps({
  jobItem: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

function goToDetail() {
  router.push({
    name: 'job-detail',
    params: {
      id: props.jobItem.id,
    },
  })
}
</script>

<template>
  <div class="col-12" @click="goToDetail">
    <jb-card class="mb-3 p-4 border-gray-100 cursor-pointer">
      <job-item-card :job-item="jobItem"></job-item-card>
    </jb-card>
  </div>
</template>

