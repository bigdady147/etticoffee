<script setup lang="ts">
const equipments = [
    {
        name: 'Máy Pha Espresso 2 Group',
        desc: 'Công suất lớn, nhiệt độ ổn định.',
        image: '/images/image_17.webp'
    },
    {
        name: 'Máy Xay Cà Phê Chuyên Nghiệp',
        desc: 'Độ mịn chuẩn xác từng milimet.',
        image: '/images/image_18.webp'
    },
    {
        name: 'Máy Làm Đá Viên Tự Động',
        desc: 'Đảm bảo an toàn vệ sinh thực phẩm.',
        image: '/images/image_19.webp'
    },
    {
        name: 'Quầy Mát Inox & Tủ Trưng Bày',
        desc: 'Bảo quản nguyên liệu tươi ngon.',
        image: '/images/image_20.webp'
    }
];
</script>

<template>
    <section class="py-16 md:py-20 bg-background-light dark:bg-background-dark">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12 md:mb-16">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">Danh Mục Thiết Bị Chuyên Dụng</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base">Trang bị máy móc hiện đại nhất từ các
                    thương hiệu hàng đầu
                    thế giới.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div v-for="(item, index) in equipments" :key="index"
                    class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:shadow-xl transition-all group">
                    <div class="overflow-hidden rounded-xl mb-5">
                        <img :alt="item.name"
                            class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                            :src="item.image" />
                    </div>
                    <h4 class="font-bold text-primary group-hover:text-primary transition-colors">{{ item.name }}</h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
