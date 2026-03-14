<script setup lang="ts">
</script>
<template>
    <section class="py-16 md:py-24 bg-primary px-4 md:px-0">
        <div class="max-w-7xl mx-auto">
            <div
                class="bg-white dark:bg-background-dark rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                <div class="lg:w-1/2 p-8 md:p-16 space-y-6 md:space-y-8">
                    <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">Bắt đầu
                        kinh doanh cùng Eti Coffee
                        ngay hôm nay</h2>
                    <p class="text-slate-600 dark:text-slate-400 text-lg">Để lại thông tin, đội ngũ chuyên gia của chúng
                        tôi sẽ tư vấn giải pháp phù hợp nhất với nguồn vốn và mong muốn của bạn.</p>
                    <div class="space-y-4 pt-4">
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-primary">call</span>
                            <span class="font-bold">Hotline: 1900 XXX XXX</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-primary">mail</span>
                            <span class="font-bold">franchise@eticoffee.com</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined text-primary">location_on</span>
                            <span class="font-bold">Hồ Chí Minh, Việt Nam</span>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 bg-slate-50 dark:bg-slate-800/50 p-8 md:p-16">
                    <form class="grid grid-cols-1 gap-6">
                        <div>
                            <label class="block text-sm font-bold mb-2">Họ và tên</label>
                            <input
                                class="w-full px-4 py-3 rounded-xl border-slate-200 bg-white dark:bg-background-dark focus:ring-primary focus:border-primary"
                                placeholder="Nguyễn Văn A" type="text" />
                        </div>
                        <div>
                            <label class="block text-sm font-bold mb-2">Số điện thoại</label>
                            <input
                                class="w-full px-4 py-3 rounded-xl border-slate-200 bg-white dark:bg-background-dark focus:ring-primary focus:border-primary"
                                placeholder="090 XXX XXXX" type="tel" />
                        </div>
                        <div>
                            <label class="block text-sm font-bold mb-2">Mô hình quan tâm</label>
                            <select
                                class="w-full px-4 py-3 rounded-xl border-slate-200 bg-white dark:bg-background-dark focus:ring-primary focus:border-primary">
                                <option>Eti Coffee Express</option>
                                <option>Eti Coffee Kiosk</option>
                                <option>Eti Coffee Store</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-bold mb-2">Lời nhắn</label>
                            <textarea
                                class="w-full px-4 py-3 rounded-xl border-slate-200 bg-white dark:bg-background-dark focus:ring-primary focus:border-primary"
                                placeholder="Ghi chú thêm cho chúng tôi..." rows="3"></textarea>
                        </div>
                        <button
                            class="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-primary/30 transition-all"
                            type="submit">
                            Gửi yêu cầu tư vấn
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>