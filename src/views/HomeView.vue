<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue'
import HeaderComponent from './_header/header.vue';
import FooterComponent from './_footer/footer.vue';
import HeroSection from './details/HeroSection.vue';
import KeyFiguresSection from './details/KeyFiguresSection.vue';
import AboutUsSection from './details/AboutUsSection.vue';
import FranchiseModelsSection from './details/FranchiseModelsSection.vue';
import EquipmentSection from './details/EquipmentSection.vue';
import OurJourneySection from './details/OurJourneySection.vue';
import MapNetworkSection from './details/MapNetworkSection.vue';
import ContactFormSection from './details/ContactFormSection.vue';

// SEO Optimization
useSeoMeta({
    title: 'Eti Coffee - Giải Pháp Nhượng Quyền Cà Phê Chuyên Nghiệp Hàng Đầu',
    description: 'Chuyên gia cung cấp giải pháp mô hình cà phê pha máy chuyên nghiệp tại Việt Nam. 10 năm kinh nghiệm, 100+ điểm bán, chất lượng từ nông trại Đắk Lắk.',
    ogTitle: 'Eti Coffee - Giải Pháp Nhượng Quyền Cà Phê Chuyên Nghiệp',
    ogDescription: 'Khám phá mô hình nhượng quyền cà phê tối ưu lợi nhuận cùng Eti Coffee. Hỗ trợ toàn diện từ A-Z.',
    ogImage: '/images/meta_image.jpg',
    ogType: 'website',
    ogUrl: () => window.location.origin,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Eti Coffee - Giải Pháp Nhượng Quyền Cà Phê',
    twitterDescription: 'Hệ thống 100+ điểm bán chuyên nghiệp trên toàn quốc.',
})

useHead({
    meta: [
        {
            name: 'keywords',
            content: 'nhượng quyền cà phê, eti coffee, cà phê pha máy, giải pháp kinh doanh cà phê, nhượng quyền coffee'
        }
    ],
    link: [
        { rel: 'icon', href: '/images/logo_main.png' },
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
            <OurJourneySection />
            <MapNetworkSection />
            <!-- <ContactFormSection /> -->
        </main>
        <FooterComponent />
    </div>
</template>
