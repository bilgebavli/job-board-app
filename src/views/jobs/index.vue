<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useJobsStore } from '@/stores/jobs'
import JobList from './JobList'
import JobFilters from './JobFilters'
import JobNoList from './JobNoList'

defineOptions({
  name: 'Jobs',
})

const limit = ref(20)
const page = ref(1)

const route = useRoute()
const router = useRouter()
const store = useJobsStore()

const hasRouteQuery = computed(() => Object.keys(route.query).length > 0)
const jobs = computed(() => store.getJobs)

function getParams(obj) {
  const queryList = []

  for (const key in obj) {
    queryList.push(`${key}=${obj[key]}`)
  }

  return `?${queryList.join('&')}`
}

async function fetchJobs() {
  await store.fetchJobs({
    query: hasRouteQuery.value
      ? getParams(route.query)
      : getParams({ limit: limit.value, page: page.value }),
  })
}

async function init() {
  await fetchJobs()
}

function changeSorting({ sortValue }) {
  changeQuery({
    sort: sortValue,
    sortDirection: 0,
    limit: limit.value,
    page: page.value,
  })
}

function changePagination({ pageCount, pageNumber }) {
  limit.value = pageNumber
  page.value = pageCount

  changeQuery({ page: page.value, limit: limit.value })
}

async function setRouteQuery(value) {
  const filteredQueryParams = { ...route.query, ...value }

  Object.keys(filteredQueryParams).forEach((key) => {
    if (filteredQueryParams[key] === '') {
      delete filteredQueryParams[key]
    }
  })

  await router.push({
    path: route.path,
    query: filteredQueryParams,
  })
}

async function changeQuery(value) {
  try {
    showAppLoading()
    await setRouteQuery(value)
    await fetchJobs()
  } finally {
    hideAppLoading()
  }
}

async function showAppLoading() {
  store.setIsAppLoading(true)
}

async function hideAppLoading() {
  store.setIsAppLoading(false)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="container">
    <job-filters @change-query="changeQuery"></job-filters>
    <div v-if="jobs.length" class="row">
      <job-list v-for="(jobItem, index) in jobs" :key="index" :job-item="jobItem"></job-list>
    </div>
    <job-no-list v-else></job-no-list>
    <jb-card class="p-4">
      <jb-pagination @change-pagination="changePagination"></jb-pagination>
    </jb-card>
  </div>
</template>
