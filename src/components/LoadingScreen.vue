<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(true);
const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});

defineExpose({
    hide: () => {
        isVisible.value = false;
    }
});
</script>

<template>
    <Transition name="fade">
        <div v-if="isVisible"
            class="fixed inset-0 z-[9999] bg-background-dark flex flex-col items-center justify-center">
            <div class="relative flex flex-col items-center">
                <!-- Outer Pulse Rings -->
                <div class="absolute inset-0 size-32 bg-primary/20 rounded-full animate-ping"></div>

                <!-- Logo Container -->
                <div
                    class="relative size-32 bg-white rounded-full flex items-center justify-center p-6 shadow-2xl shadow-primary/40 animate-pulse-gentle">
                    <img src="/images/logo_main.png" alt="Eti Coffee Logo" class="w-full h-auto" />
                </div>

                <!-- Text Branding -->
                <div class="mt-8 text-center space-y-2 translate-y-4 opacity-0 animate-fade-in-up">
                    <h2 class="text-2xl font-black text-white tracking-widest uppercase">ETI COFFEE</h2>
                    <p class="text-primary text-xs font-bold tracking-widest uppercase opacity-80">Cung cấp giải pháp -
                        Mô hình Coffee pha máy</p>
                </div>

                <!-- Progress Line -->
                <div class="mt-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div class="h-full bg-primary animate-loading-bar"></div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.animate-pulse-gentle {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.9;
        transform: scale(1.05);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.3s;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-loading-bar {
    width: 0%;
    animation: loading 2s ease-in-out infinite;
}

@keyframes loading {
    0% {
        width: 0%;
        transform: translateX(-100%);
    }

    50% {
        width: 70%;
        transform: translateX(0);
    }

    100% {
        width: 100%;
        transform: translateX(100%);
    }
}

.fade-leave-active {
    transition: opacity 0.8s ease-in-out;
}

.fade-leave-to {
    opacity: 0;
}
</style>
