import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api'

export const useJobDetailStore = defineStore('job-detail', () => {
  const job = ref(null)

  const getJobItem = computed(() => job.value)

  async function fetchJob(id) {
      const item = await api
      .get(`/jobs/${id}`)
      .then((res) => res.data);

      job.value = item
  }

  return { getJobItem, fetchJob }
})