<script setup lang="ts">
import { ref } from 'vue';

const equipmentLeftColumn = ref([
    {
        title: 'Casadio Nettuno',
        subtitle: 'Dòng máy cao cấp',
        src: '/images/may_pha.png',
        alt: 'Coffee machine',
        padding: 'p-4 md:p-6'
    },
    {
        title: 'Eti Specialty',
        subtitle: '100% Arabica/Robusta',
        src: '/images/cafe1.png',
        alt: 'Premium Roasted Coffee Beans Eti',
        padding: 'p-6'
    }
]);

const equipmentRightColumn = ref([
    {
        title: 'Máy xay chuyên nghiệp',
        subtitle: 'Độ mịn chuẩn xác',
        src: '/images/may_xay3.png',
        alt: 'Commercial Coffee Grinder',
    },
    {
        title: 'Dụng cụ Barista',
        subtitle: 'Phụ kiện đầy đủ',
        src: '/images/image_10.webp',
        alt: 'Coffee Barista Tools kit',
    }
]);

const featuresList = ref([
    { icon: 'bolt', text: 'Công suất ổn định' },
    { icon: 'thermostat', text: 'Nhiệt độ chính xác' },
    { icon: 'settings_backup_restore', text: 'Bảo hành 24 tháng' },
    { icon: 'handyman', text: 'Bảo trì tận nơi' }
]);
</script>
<template>
    <section id="products" class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div class="lg:w-1/2 order-2 lg:order-1 w-full">
                    <div class="grid grid-cols-2 gap-3 md:gap-4">
                        <div class="space-y-3 md:space-y-4">
                            <div v-for="item in equipmentLeftColumn" :key="item.title"
                                :class="['bg-white dark:bg-background-dark rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800', item.padding]">
                                <img class="w-full rounded-lg mb-4" :data-alt="item.alt" :src="item.src" />
                                <h5 class="font-bold">{{ item.title }}</h5>
                                <p class="text-xs text-slate-400 uppercase font-bold">{{ item.subtitle }}</p>
                            </div>
                        </div>
                        <div class="pt-12 space-y-4">
                            <div v-for="item in equipmentRightColumn" :key="item.title"
                                class="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                                <img class="w-full rounded-lg mb-4" :data-alt="item.alt" :src="item.src" />
                                <h5 class="font-bold">{{ item.title }}</h5>
                                <p class="text-xs text-slate-400 uppercase font-bold">{{ item.subtitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 order-1 lg:order-2 space-y-8">
                    <h2 class="text-primary font-bold tracking-widest uppercase text-sm">Công nghệ &amp; Chất lượng</h2>
                    <h3 class="text-4xl font-black text-slate-900 dark:text-white">Trang thiết bị hàng đầu cho ly cà phê
                        hoàn hảo</h3>
                    <p class="text-slate-600 dark:text-slate-400 text-lg">
                        Chúng tôi độc quyền phân phối và cung cấp các dòng máy pha cà phê Lacilio Hunter cùng hệ thống
                        máy móc nhập khẩu, đảm bảo hiệu suất vận hành cao nhất cho cửa hàng.
                    </p>
                    <div class="grid grid-cols-2 gap-6">
                        <div v-for="feature in featuresList" :key="feature.text" class="flex items-center gap-3">
                            <div
                                class="size-10 bg-coffee-yellow/20 text-coffee-yellow rounded-lg flex items-center justify-center">
                                <span class="material-symbols-outlined">{{ feature.icon }}</span>
                            </div>
                            <span class="font-bold text-sm">{{ feature.text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>