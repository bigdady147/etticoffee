<script setup lang="ts">
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
