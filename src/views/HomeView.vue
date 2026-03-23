<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'
import HeaderComponent from './_header/header.vue';
import FooterComponent from './_footer/footer.vue';
import HeroSection from './details/HeroSection.vue';
import KeyFiguresSection from './details/KeyFiguresSection.vue';
import AboutUsSection from './details/AboutUsSection.vue';
import FranchiseModelsSection from './details/FranchiseModelsSection.vue';
import EquipmentSection from './details/EquipmentSection.vue';
import PhotoGallerySection from './details/PhotoGallerySection.vue';
import OurJourneySection from './details/OurJourneySection.vue';
import MapNetworkSection from './details/MapNetworkSection.vue';
import ContactFormSection from './details/ContactFormSection.vue';

// SEO Optimization
useSeoMeta({
    title: 'Eti Coffee - Giải Pháp Nhượng Quyền Cà Phê Chuyên Nghiệp Hàng Đầu',
    description: 'Chuyên gia cung cấp giải pháp mô hình cà phê pha máy chuyên nghiệp tại Việt Nam. 10 năm kinh nghiệm, 100+ điểm bán, chất lượng từ nông trại Đắk Lắk.',
    ogTitle: 'Eti Coffee - Giải Pháp Nhượng Quyền Cà Phê Chuyên Nghiệp',
    ogDescription: 'Khám phá mô hình nhượng quyền cà phê tối ưu lợi nhuận cùng Eti Coffee. Hỗ trợ toàn diện từ A-Z.',
    ogImage: () => `${window.location.origin}/images/meta_image.png`,
    ogImageAlt: 'Eti Coffee Shop - Giải pháp nhượng quyền cà phê chuyên nghiệp',
    ogSiteName: 'Eti Coffee',
    ogLocale: 'vi_VN',
    ogType: 'website',
    ogUrl: () => window.location.origin,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Eti Coffee - Giải Pháp Nhượng Quyền Cà Phê',
    twitterDescription: 'Hệ thống 100+ điểm bán chuyên nghiệp trên toàn quốc.',
    robots: 'index, follow',
})

useHead({
    meta: [
        {
            name: 'keywords',
            content: 'nhượng quyền cà phê, eti coffee, cà phê pha máy, giải pháp kinh doanh cà phê, nhượng quyền coffee'
        },
        {
            name: 'theme-color',
            content: '#ffffff'
        }
    ],
    link: [
        { rel: 'icon', href: '/images/logo_main.png' },
        { rel: 'apple-touch-icon', href: '/images/logo_main.png' },
        { rel: 'canonical', href: () => window.location.origin }
    ]
})
</script>

<template>
    <div class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        <HeaderComponent />
        <main>
            <HeroSection />
            <KeyFiguresSection />
            <AboutUsSection />
            <FranchiseModelsSection />
            <EquipmentSection />
            <PhotoGallerySection />
            <OurJourneySection />
            <MapNetworkSection />
            <!-- <ContactFormSection /> -->
        </main>
        <FooterComponent />
    </div>
</template>
