<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
    <section id="models" class="py-16 md:py-24 bg-slate-50 dark:bg-background-dark/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Các mô hình nhượng quyền
                </h2>
                <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    Lựa chọn mô hình kinh doanh phù hợp với ngân sách và mặt bằng của bạn.
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Model 1 -->
                <div
                    class="bg-white dark:bg-background-dark rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg group hover:shadow-2xl transition-all">
                    <div class="h-64 overflow-hidden relative">
                        <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            data-alt="Small Eti Coffee Kiosk design" src="/images/image_4.webp" />
                        <div
                            class="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">
                            Phổ biến</div>
                    </div>
                    <div class="p-8">
                        <h4 class="text-2xl font-bold mb-2">Eti Coffee Express</h4>
                        <p class="text-slate-500 mb-6 text-sm">Mô hình xe đẩy linh hoạt, phù hợp vỉa hè, tòa nhà văn
                            phòng.</p>
                        <div class="flex items-baseline gap-2 mb-8">
                            <span class="text-sm text-slate-400">Đầu tư từ:</span>
                            <span class="text-2xl font-black text-primary">45 - 60 Triệu</span>
                        </div>
                        <button @click="router.push('/franchise-detail')"
                            class="w-full py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition-colors">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <!-- Model 2 -->
                <div
                    class="bg-white/70 dark:bg-background-dark/70 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg grayscale transition-all cursor-not-allowed relative">
                    <div class="h-64 overflow-hidden relative opacity-70">
                        <img class="w-full h-full object-cover" data-alt="Eti Coffee Kiosk indoor model"
                            src="/images/image_5.webp" />
                        <div
                            class="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 flex items-center justify-center">
                            <span
                                class="bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                                Sắp ra mắt
                            </span>
                        </div>
                    </div>
                    <div class="p-8 ">
                        <h4 class="text-2xl font-bold mb-2 text-slate-400 dark:text-slate-500">Eti Coffee Kiosk</h4>
                        <p class="text-slate-400 dark:text-slate-600 mb-6 text-sm">Mô hình gian hàng nhỏ trong TTTM hoặc
                            khu dân cư sầm uất.
                        </p>
                        <div class="flex items-baseline gap-2 mb-8">
                            <span class="text-sm text-slate-300 dark:text-slate-600">Đầu tư từ:</span>
                            <span class="text-2xl font-black text-slate-300 dark:text-slate-700">120 - 180 Triệu</span>
                        </div>
                        <button disabled
                            class="w-full py-4 border-2 border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600 font-bold rounded-xl">
                            Chưa ra mắt
                        </button>
                    </div>
                </div>
                <!-- Model 3 -->
                <div
                    class="bg-white/70 dark:bg-background-dark/70 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg grayscale transition-all cursor-not-allowed relative">
                    <div class="h-64 overflow-hidden relative opacity-75">
                        <img class="w-full h-full object-cover" data-alt="Large Eti Coffee Store interior design"
                            src="/images/image_6.webp" />
                        <div
                            class="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 flex items-center justify-center">
                            <span
                                class="bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                                Sắp ra mắt
                            </span>
                        </div>
                    </div>
                    <div class="p-8">
                        <h4 class="text-2xl font-bold mb-2 text-slate-400 dark:text-slate-500">Eti Coffee Store</h4>
                        <p class="text-slate-400 dark:text-slate-600 mb-6 text-sm">Cửa hàng diện tích lớn với không gian
                            trải nghiệm cao
                            cấp.</p>
                        <div class="flex items-baseline gap-2 mb-8">
                            <span class="text-sm text-slate-300 dark:text-slate-600">Đầu tư từ:</span>
                            <span class="text-2xl font-black text-slate-300 dark:text-slate-700">350+ Triệu</span>
                        </div>
                        <button disabled
                            class="w-full py-4 border-2 border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600 font-bold rounded-xl">
                            Chưa ra mắt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>