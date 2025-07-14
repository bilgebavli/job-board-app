<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useJobDetailStore } from '@/stores/job-detail'

defineOptions({
  name: 'JobDetail',
})

const route = useRoute()
const { t } = useI18n()

const store = useJobDetailStore()

const jobItem = computed(() => {
  return store.getJobItem || {}
})

async function init() {
  await store.fetchJob(route.params.id)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-md-12">
        <jb-card class="mb-3 p-sm-4 border-gray-100">
          <jb-image
            :src="$mediaManager.getThumb({ media: jobItem.photo })"
            :alt="jobItem.title"
            class="mb-4 border"
            height="100"
            width="100"
          ></jb-image>
          <h3 class="text-green font-weight-bolder">BK Software Company Inc.</h3>
          <div class="d-flex align-items-center mt-2 text-gray-800 justify-content-center">
            <i class="bi bi-geo-alt-fill me-2"></i>
            <p class="mb-0">{{ jobItem.location }}</p>
          </div>
          <div class="mt-4 mb-2">
            <jb-button bg-color="white" text-color="primary" class="py-1" outline>{{
              jobItem.workType
            }}</jb-button>
          </div>
          <jb-card class="border-gray-100 my-3 p-sm-4 text-start">
            <template #header>
              <h3 class="font-weight-bolder">
                {{ jobItem.title }}
                <jb-divider color="gray-800"></jb-divider>
              </h3>
            </template>
            <div v-html="jobItem.description"></div>
            <div>
              <jb-button
                v-for="(item, index) in jobItem.category"
                :key="`category-${item}-index`"
                class="py-1 me-2 mt-3"
                bg-color="white"
                text-color="green"
                outline
                >{{ $t(`jobs.categories.${item}`) }}</jb-button
              >
            </div></jb-card
          >
        </jb-card>
      </div>
    </div>
  </div>
</template>
