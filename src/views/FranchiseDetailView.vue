<script setup lang="ts">
import { onMounted } from 'vue';
import HeaderComponent from './_header/header.vue';
import FooterComponent from './_footer/footer.vue';
import HeroDetailSection from './details_page/HeroDetailSection.vue';
import PackageBreakdownSection from './details_page/PackageBreakdownSection.vue';
import TechnicalSpecsSection from './details_page/TechnicalSpecsSection.vue';
import SpecializedEquipmentSection from './details_page/SpecializedEquipmentSection.vue';
import SupportPoliciesSection from './details_page/SupportPoliciesSection.vue';

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
            <TechnicalSpecsSection />
            <SpecializedEquipmentSection />
            <SupportPoliciesSection />
        </main>
        <FooterComponent />
    </div>
</template>
