<script setup>
defineOptions({
  name: 'JobItemCard',
})

const props = defineProps({
  jobItem: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="d-sm-flex justify-content-between">
      <div class="d-sm-flex">
        <jb-image
          :src="$mediaManager.getThumb({ media: jobItem.photo })"
          :alt="jobItem.company"
          class="mb-4 me-4"
          height="100"
        ></jb-image>
        <div>
          <div class="d-flex align-items-center">
            <i class="bi bi-suitcase-lg me-2"></i>
            <h5 class="card-title text-clipping mb-0 text-green">{{ jobItem.company }}</h5>
          </div>
          <div class="d-flex align-items-center mt-2">
            <i class="bi bi-geo-alt-fill me-2"></i>
            <p v-text="jobItem.location" class="text-green mb-0"></p>
          </div>
        </div>
      </div>
      <div class="my-sm-0 my-3">
        <jb-button bg-color="white" text-color="primary" class="py-1" outline>{{
          jobItem.workType
        }}</jb-button>
      </div>
    </div>
    <p v-text="jobItem.title"></p>
    <div>
      <jb-button
        v-for="(item, index) in jobItem.category"
        :key="`category-${item}-index`"
        class="py-1 me-2"
        bg-color="white"
        text-color="green"
        outline
        >{{ item }}</jb-button
      >
    </div>
  </div>
</template>

