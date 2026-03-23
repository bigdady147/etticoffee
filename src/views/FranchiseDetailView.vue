<script setup lang="ts">
import { onMounted } from 'vue';
import { useHead, useSeoMeta } from '@unhead/vue'
import HeaderComponent from './_header/header.vue';
import FooterComponent from './_footer/footer.vue';
import HeroDetailSection from './details_page/HeroDetailSection.vue';
import PackageBreakdownSection from './details_page/PackageBreakdownSection.vue';
import ComboChecklistSection from './details_page/ComboChecklistSection.vue';
import TechnicalSpecsSection from './details_page/TechnicalSpecsSection.vue';
import SpecializedEquipmentSection from './details_page/SpecializedEquipmentSection.vue';
import SupportPoliciesSection from './details_page/SupportPoliciesSection.vue';

// SEO Optimization
useSeoMeta({
    title: 'Gói Nhượng Quyền Toàn Diện Eti Coffee - Chuyên Nghiệp & Hiệu Quả',
    description: 'Chi tiết gói đầu tư nhượng quyền Eti Coffee. Hỗ trợ toàn diện từ thiết kế mặt bằng, trang thiết bị máy móc đến quy trình vận hành chuỗi cà phê chuyên nghiệp.',
    ogTitle: 'Gói Nhượng Quyền Eti Coffee - Đầu Tư Thông Minh',
    ogDescription: 'Giải pháp kinh doanh cà phê pha máy toàn diện. Hỗ trợ đối tác 24/7 và đào tạo chuyên sâu.',
    ogImage: () => `${window.location.origin}/images/meta_image.png`,
    ogImageAlt: 'Gói nhượng quyền Eti Coffee chuyên nghiệp',
    ogSiteName: 'Eti Coffee',
    ogLocale: 'vi_VN',
    ogType: 'website',
    ogUrl: () => `${window.location.origin}/franchise-detail`,
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
})

useHead({
    meta: [
        {
            name: 'keywords',
            content: 'gói nhượng quyền eti coffee, đầu tư quán cà phê, thiết bị quán cafe, chính sách nhượng quyền'
        },
        {
            name: 'theme-color',
            content: '#ffffff'
        }
    ],
    link: [
        { rel: 'icon', href: '/images/logo_main.png' },
        { rel: 'apple-touch-icon', href: '/images/logo_main.png' },
        { rel: 'canonical', href: () => `${window.location.origin}/franchise-detail` }
    ]
})

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <div class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        <HeaderComponent />
        <main>
            <HeroDetailSection />
            <PackageBreakdownSection />
            <ComboChecklistSection />
            <TechnicalSpecsSection />
            <!-- <SpecializedEquipmentSection /> -->
            <SupportPoliciesSection />
        </main>
        <FooterComponent />
    </div>
</template>
