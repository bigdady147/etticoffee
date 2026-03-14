<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isMobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();


const scrollTo = (id: string) => {
    isMobileMenuOpen.value = false;

    if (route.path !== '/') {
        router.push('/').then(() => {
            // Đợi 1 chút để homepage render xong rồi mới scroll
            setTimeout(() => {
                performScroll(id);
            }, 300);
        });
    } else {
        performScroll(id);
    }
};

const performScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        const headerOffset = 100;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};


</script>
<template>
    <section class="relative w-full min-h-[85vh] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <img class="w-full h-full object-cover" data-alt="Professional espresso machine brewing high quality coffee"
                src="/images/image_2.webp" />
        </div>
        <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div class="max-w-2xl">
                <span
                    class="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                    Professional Coffee Solutions
                </span>
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.2] md:leading-[1.1] mb-4 md:mb-6">
                    Cung cấp giải pháp <span class="text-primary">mô hình cà phê</span> pha máy
                </h1>
                <p class="text-base md:text-xl text-slate-200 mb-8 md:mb-10 leading-relaxed font-light">
                    Nâng tầm thương hiệu cà phê Việt với mô hình nhượng quyền chuyên nghiệp, hiện đại và tối ưu hóa lợi
                    nhuận cho nhà đầu tư.
                </p>
                <div class="flex flex-wrap gap-4">
                    <button @click.prevent="scrollTo('models')"
                        class="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2 group">
                        Khám phá mô hình
                        <span
                            class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>