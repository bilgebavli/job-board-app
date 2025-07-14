

<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useJobsStore } from '@/stores/jobs'
import JbPreloader from '@/components/ui/JbPreloader'

const store = useJobsStore()

const isAppLoading = computed(() => store.getIsAppLoading)
</script>

<template>
  <jb-preloader v-if="isAppLoading"></jb-preloader>
  <RouterView />
</template>
