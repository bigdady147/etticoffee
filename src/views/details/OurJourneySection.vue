<script setup lang="ts">
import { ref } from 'vue';

const journeySteps = ref([
    {
        id: '01',
        title: 'Nông trại',
        description: 'Vùng nguyên liệu sạch tại Đắk Nông được chăm sóc hữu cơ.'
    },
    {
        id: '02',
        title: 'Thu hoạch',
        description: 'Tuyển chọn những trái chín mọng nhất hoàn toàn bằng tay.'
    },
    {
        id: '03',
        title: 'Sơ chế',
        description: 'Sơ chế khép kín - phơi giàn'
    },
    {
        id: '04',
        title: 'Rang xay',
        description: 'Công nghệ rang Hot-air hiện đại giữ trọn vẹn hương vị.'
    },
    {
        id: '05',
        title: 'Thưởng thức',
        description: 'Phục vụ những ly cà phê chuẩn vị máy đến khách hàng.'
    }
]);
</script>
<template>
    <section id="journey" class="py-16 md:py-24 bg-coffee-green text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-5xl font-black mb-4 leading-tight">Hành trình từ nông trại <br
                        class="md:hidden" /> tới ly cà phê</h2>
                <p class="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">Kiểm soát quy trình khép kín đảm bảo
                    hương vị nguyên bản và
                    an toàn cho sức khỏe.</p>
            </div>
            <div class="relative">
                <div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 z-0">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-8 relative z-10">
                    <div v-for="step in journeySteps" :key="step.id" class="text-center space-y-4">
                        <div
                            class="size-20 mx-auto bg-white text-coffee-green rounded-full flex items-center justify-center text-3xl font-black shadow-xl ring-8 ring-white/10">
                            {{ step.id }}</div>
                        <h5 class="text-xl font-bold">{{ step.title }}</h5>
                        <p class="text-sm text-slate-300">{{ step.description }}</p>
                    </div>
                </div>
            </div>

            <!-- Added Showcase Image (Desktop Only) - Blended into background -->
            <div class="hidden md:block mt-16 lg:mt-24 relative">
                <div class="relative overflow-hidden rounded-[3rem]">
                    <img class="w-full h-auto journey-image-blend" src="/images/mat_truoc_123.png"
                        alt="Eti Coffee Franchise Front View" />
                </div>
                <!-- Decorative Glow -->
                <div
                    class="absolute inset-0 bg-gradient-to-t from-coffee-green via-transparent to-coffee-green opacity-40 pointer-events-none">
                </div>
                <div
                    class="absolute inset-0 bg-gradient-to-r from-coffee-green via-transparent to-coffee-green opacity-40 pointer-events-none">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.journey-image-blend {
    /* Feathered edges using mask-image */
    mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent),
        linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    mask-composite: intersect;
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 100%, transparent),
        linear-gradient(to right, transparent, black 0%, black 100%, transparent);
    -webkit-mask-composite: source-in;
    /* Use source-in for WebKit/Chrome */
    filter: saturate(1.1) contrast(1.05);
    /* Enhance image slightly to pop on green */
}
</style>