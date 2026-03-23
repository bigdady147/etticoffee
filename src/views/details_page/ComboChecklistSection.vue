<template>
    <!-- New Section: Checklist of items -->
    <section class="py-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold mb-4">Danh mục Vật tư & Thiết bị Bàn giao (Combo 1)</h2>
                <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Danh sách chi tiết các thiết bị và vật dụng bàn giao thuộc gói Combo 1.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Máy móc chính -->
                <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="material-symbols-outlined text-primary">coffee_maker</span>
                        <h4 class="font-bold text-lg">Máy móc chuyên dụng</h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>Máy pha cà phê Gaggia Classic (1 cái)</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>Máy xay Carimali X010 (1 cái)</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>Xe đẩy Inox chuyên dụng</span>
                        </li>
                    </ul>
                </div>

                <!-- Nhận diện & Marketing -->
                <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="material-symbols-outlined text-primary">branding_watermark</span>
                        <h4 class="font-bold text-lg">Nhận diện thương hiệu</h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>Cây dù 3m, Bảng hiệu đứng</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>Menu để bàn chuyên nghiệp</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>2 bộ đồng phục nhân viên</span>
                        </li>
                    </ul>
                </div>

                <!-- Nguyên liệu & Đồ dùng -->
                <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="material-symbols-outlined text-primary">inventory</span>
                        <h4 class="font-bold text-lg">Nguyên liệu & Đóng gói</h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>8kg Cà phê nguyên chất Eti</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>500 Ly PET 360ml + nắp cầu</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>1kg túi chữ T + 5 bịch ống hút</span>
                        </li>
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>1 hộp Cacao (Nguyên liệu phụ trợ)</span>
                        </li>
                    </ul>
                </div>

                <!-- Dụng cụ Barista -->
                <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800 lg:col-span-2">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="material-symbols-outlined text-primary">skillet</span>
                        <h4 class="font-bold text-lg">Bộ dụng cụ Barista chuyên nghiệp</h4>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        <ul class="space-y-3">
                            <li class="flex items-start gap-2 text-sm">
                                <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                                <span>Cân điện tử chính xác</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                                <span>Hộp đựng bã & 2 ly định lượng</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                                <span>2 hộp đựng & 1 hộp ly Union</span>
                            </li>
                        </ul>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-2 text-sm">
                                <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                                <span>1 tấm thảm bar cao su</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                                <span>3 cái muỗng khuấy chuyên dụng</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm">
                                <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                                <span>3 cái shaker pha chế</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Bảo quản -->
                <div class="bg-background-light dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="material-symbols-outlined text-primary">kitchen</span>
                        <h4 class="font-bold text-lg">Thiết bị bảo quản</h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-2 text-sm">
                            <span class="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span>Thùng đá Hiệp Thành 48L</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Component for displaying the Combo 1 checklist from the Franchise Detail page
</script>
