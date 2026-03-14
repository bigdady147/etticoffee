<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isMobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

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

const navigateHome = () => {
    if (route.path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        router.push('/');
    }
};
</script>

<template>
    <header
        class="sticky top-0 z-50 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center gap-8">
                    <div class="flex items-center gap-3 cursor-pointer" @click="navigateHome">
                        <img alt="Eti Coffee Logo" class="w-auto h-10" data-alt="Eti Coffee professional logo symbol"
                            src="/images/logo_main.png" />
                        <span class="font-black tracking-tight text-primary text-xl">ETI COFFEE</span>
                    </div>
                    <nav class="hidden md:flex items-center gap-6">
                        <a class="text-sm font-semibold hover:text-primary transition-colors cursor-pointer"
                            @click.prevent="scrollTo('models')">Mô hình</a>
                        <a class="text-sm font-semibold hover:text-primary transition-colors cursor-pointer"
                            @click.prevent="scrollTo('products')">Sản phẩm</a>
                        <a class="text-sm font-semibold hover:text-primary transition-colors cursor-pointer"
                            @click.prevent="scrollTo('journey')">Hành trình</a>
                        <a class="text-sm font-semibold hover:text-primary transition-colors cursor-pointer"
                            @click.prevent="scrollTo('network')">Hệ thống</a>
                    </nav>
                </div>
                <div class="flex items-center gap-4">
                    <!-- <button
                        class="hidden md:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20">
                        Hợp tác ngay
                    </button> -->
                    <!-- Mobile Menu Button -->
                    <button @click="toggleMenu"
                        class="md:hidden text-slate-800 dark:text-white hover:text-primary focus:outline-none">
                        <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu'
                        }}</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <div v-show="isMobileMenuOpen"
            class="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 shadow-xl transition-all">
            <div class="flex flex-col px-4 py-6 space-y-4">
                <a class="text-base font-semibold hover:text-primary transition-colors cursor-pointer border-b border-slate-100 pb-2"
                    @click.prevent="scrollTo('models')">Mô hình</a>
                <a class="text-base font-semibold hover:text-primary transition-colors cursor-pointer border-b border-slate-100 pb-2"
                    @click.prevent="scrollTo('products')">Sản phẩm</a>
                <a class="text-base font-semibold hover:text-primary transition-colors cursor-pointer border-b border-slate-100 pb-2"
                    @click.prevent="scrollTo('journey')">Hành trình</a>
                <a class="text-base font-semibold hover:text-primary transition-colors cursor-pointer border-b border-slate-100 pb-2"
                    @click.prevent="scrollTo('network')">Hệ thống</a>
                <!-- <button
                    class="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 mt-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/20">
                    Hợp tác ngay
                </button> -->
            </div>
        </div>
    </header>
</template>