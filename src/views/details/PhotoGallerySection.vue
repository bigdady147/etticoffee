<template>
    <!-- Photo Gallery Section -->
    <section class="py-24 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-4">Hoạt động sôi nổi</h2>
                <h3 class="text-4xl font-black text-slate-900 dark:text-white mb-4">Hình ảnh Khai trương & Hoạt động
                    Thực tế</h3>
                <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Chứng kiến sự thành công và sức sống mãnh liệt của các điểm bán Eti Coffee trên khắp mọi miền, từ mô
                    hình Kiosk hiện đại đến Express linh hoạt.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Image Card 1 -->
                <div class="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
                    <img alt="Eti Coffee Express in action"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="/images/real_1.jpg" />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <span class="text-primary font-bold text-sm mb-2 uppercase tracking-widest">Eti Coffee
                            Express</span>
                        <h4 class="text-white text-2xl font-bold">Mô hình xe đẩy lưu động linh hoạt</h4>
                        <p class="text-slate-300 text-sm mt-2">Tối ưu diện tích, tiếp cận khách hàng nhanh chóng và hiệu
                            quả.</p>
                    </div>
                </div>

                <!-- Image Card 2 -->
                <div class="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
                    <img alt="Eti Coffee Grand Opening"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="/images/real_2.jpg" />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <span class="text-[#F4B41A] font-bold text-sm mb-2 uppercase tracking-widest">Khai trương hồng
                            phát</span>
                        <h4 class="text-white text-2xl font-bold">Niềm vui trong ngày ra mắt điểm bán</h4>
                        <p class="text-slate-300 text-sm mt-2">Đồng hành cùng đối tác từ những bước chân đầu tiên trong
                            hành trình kinh doanh.</p>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-12 text-center">
                <button class="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                    Xem thêm hình ảnh hệ thống
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div> -->
        </div>
    </section>
</template>

<script setup lang="ts">
// Component for displaying the actual activity photo gallery from the new Stitch screen
</script>
