<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const modules = [Navigation, Pagination, Autoplay, EffectFade];

const slides = [
    {
        image: '/images/rate1.jpg',
        alt: 'Map of Vietnam showing Eti Coffee locations',
        title: 'Mạng lưới 100+ điểm bán toàn quốc'
    },
    {
        image: '/images/cuahang_1.jpg',
        alt: 'Eti Coffee modern store interior',
        title: 'Không gian chuyên nghiệp, hiện đại'
    },
    {
        image: '/images/about_1.jpg',
        alt: 'Professional coffee brewing at Eti Coffee',
        title: 'Chất lượng chuẩn quốc tế'
    }
];
</script>

<template>
    <section id="network" class="py-16 md:py-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
                <div class="lg:w-2/3">
                    <h2 class="text-2xl md:text-3xl font-black mb-6 md:mb-8">Mạng lưới Eti Coffee toàn quốc</h2>
                    <div
                        class="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-200 aspect-video relative group">
                        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :loop="true" :effect="'fade'"
                            :autoplay="{
                                delay: 4000,
                                disableOnInteraction: false,
                            }" :pagination="{
                                clickable: true,
                                bulletActiveClass: 'swiper-pagination-bullet-active bg-primary',
                            }" :navigation="{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }" class="w-full h-full">
                            <swiper-slide v-for="(slide, index) in slides" :key="index">
                                <div class="relative w-full h-full">
                                    <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
                                    <!-- Overlay Text -->
                                    <div
                                        class="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black/80 to-transparent">
                                        <p class="text-white text-lg md:text-xl font-bold">{{ slide.title }}</p>
                                    </div>
                                </div>
                            </swiper-slide>

                            <!-- Custom Navigation -->
                            <button
                                class="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 bg-white/20 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md">
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button
                                class="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 size-10 md:size-12 bg-white/20 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </swiper>
                    </div>
                </div>
                <div class="lg:w-1/3">
                    <h3 class="text-2xl font-bold mb-6">Đánh giá từ đối tác</h3>
                    <div class="space-y-6">
                        <div
                            class="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800">
                            <div class="flex gap-1 text-coffee-yellow mb-3">
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                            </div>
                            <p class="text-slate-600 dark:text-slate-400 italic mb-4">"Mô hình Eti Express rất hiệu quả
                                cho người mới bắt đầu. Tôi đã thu hồi vốn chỉ sau 6 tháng kinh doanh."</p>
                            <div class="flex items-center gap-3">
                                <div class="size-10 bg-slate-200 rounded-full overflow-hidden">
                                    <img class="w-full h-full object-cover" data-alt="Portrait of Eti Coffee partner"
                                        src="/images/image_12.webp" />
                                </div>
                                <div>
                                    <p class="font-bold text-sm">Anh Minh Quân</p>
                                    <p class="text-xs text-slate-400">Chủ cửa hàng (Hồ Chí Minh)</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-800">
                            <div class="flex gap-1 text-coffee-yellow mb-3">
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                                <span class="material-symbols-outlined text-sm fill-current">star</span>
                            </div>
                            <p class="text-slate-600 dark:text-slate-400 italic mb-4">"Dịch vụ hỗ trợ kỹ thuật và đào
                                tạo của Eti Coffee rất chuyên nghiệp. Tôi hoàn toàn yên tâm khi đồng hành."</p>
                            <div class="flex items-center gap-3">
                                <div class="size-10 bg-slate-200 rounded-full overflow-hidden">
                                    <img class="w-full h-full object-cover" data-alt="Portrait of Eti Coffee partner"
                                        src="/images/image_13.webp" />
                                </div>
                                <div>
                                    <p class="font-bold text-sm">Chị Phương Thảo</p>
                                    <p class="text-xs text-slate-400">Đối tác nhượng quyền (Đà Nẵng)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.swiper-pagination-bullet {
    background: white !important;
    opacity: 0.5;
    width: 10px;
    height: 10px;
    transition: all 0.3s;

    &-active {
        opacity: 1;
        width: 30px;
        border-radius: 5px;
        background: var(--primary) !important;
    }
}
</style>