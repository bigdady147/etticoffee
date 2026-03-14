<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import LoadingScreen from './components/LoadingScreen.vue';

const router = useRouter();
const loaderRef = ref<InstanceType<typeof LoadingScreen> | null>(null);

onMounted(async () => {
  // Đảm bảo router đã sẵn sàng
  await router.isReady();

  // Giữ loading ít nhất 1.2s để trải nghiệm mượt và thấy được branding
  setTimeout(() => {
    if (loaderRef.value) {
      loaderRef.value.hide();
    }
  }, 1200);
});
</script>

<template>
  <LoadingScreen ref="loaderRef" />
  <RouterView />
</template>

<style scoped></style>
