import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api'


export const useJobsStore = defineStore('jobs', () => {
  const jobs = ref([])
  const isAppLoading = ref(false)

  const getJobs = computed(() => jobs.value)
  const getIsAppLoading = computed(() => isAppLoading.value)

  const setIsAppLoading = (isAppLoadingValue = false) => {
    isAppLoading.value = isAppLoadingValue

    if (isAppLoading.value)
    document.getElementsByTagName('body')[0].classList.add('is-loading');
    else
    document.getElementsByTagName('body')[0].classList.remove('is-loading');
  }

  const fetchJobs = async ({ query }) => {
    await api.get(`jobs${query}`)
    .then((res) => jobs.value = res.data)
    .catch(error => {
      jobs.value = []
    })
  }

  return { getJobs, getIsAppLoading, setIsAppLoading, fetchJobs }
})
