<script setup lang="ts">
import { reactive, computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'JobFilters',
})

const route = useRoute()
const { t } = useI18n()

const emit = defineEmits(['change-query'])

const filters = reactive({
  title: null,
  location: null,
  category: null,
})

const filterItems = computed(() => [
  {
    name: t('jobs.categories.design'),
    value: 'design',
  },
  {
    name: t('jobs.categories.development'),
    value: 'development',
  },
  {
    name: t('jobs.categories.marketing'),
    value: 'marketing',
  },
])

function change(value: string, key: 'title' | 'location' | 'category'): void {
  emit('change-query', { [key]: value })
}

onBeforeMount(() => {
  const { title, location, category } = route.query

  if (title) filters.title = title
  if (location) filters.location = location
  if (category) filters.category = category
})
</script>

<template>
  <jb-card class="p-4 border-0 shadow-sm mb-3 text-right">
    <div class="row">
      <div class="col-12 col-sm-4 mb-3 mb-sm-0">
        <jb-input
          v-model="filters.title"
          :placeholder="$t('jobs.filters.title')"
          @input="change($event, 'title')"
        ></jb-input>
      </div>
      <div class="col-12 col-sm-4 mb-3 mb-sm-0">
        <jb-input
          v-model="filters.location"
          :placeholder="$t('jobs.filters.location')"
          @input="change($event, 'location')"
        ></jb-input>
      </div>
      <div class="col-12 col-sm-4">
        <jb-select
          v-model="filters.category"
          :items="filterItems"
          class="p-1"
          @on-change="change($event, 'category')"
        ></jb-select>
      </div>
    </div>
  </jb-card>
</template>

