<script setup>
defineOptions({
  name: 'JobNoList',
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <div class="text-center px-4 my-5">
      <img
        src="@/assets/images/views/jobs/no-job.webp"
        alt="no-basket-items-yet-icon"
        height="150"
      />
      <h3 class="text-uppercase">
        {{ $t('jobs.description.noJobItem') }}
      </h3>
    </div>
  </div>
</template>