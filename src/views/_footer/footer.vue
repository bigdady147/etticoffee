<template>
    <footer class="bg-background-dark text-white pt-20 pb-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <img alt="Eti Coffee Logo" class="h-10 w-auto" data-alt="Eti Coffee white logo symbol"
                            src="/images/logo_main.png" />
                        <span class="text-xl font-black tracking-tight text-white">ETI COFFEE</span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Chuyên gia cung cấp giải pháp mô hình cà phê pha máy chuyên nghiệp hàng đầu tại Việt Nam.
                    </p>
                    <div class="flex gap-4">
                        <a class="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-default"
                            href="javascript:void(0)" @click.prevent>
                            <span class="material-symbols-outlined text-xl">social_leaderboard</span>
                        </a>
                        <a class="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-default"
                            href="javascript:void(0)" @click.prevent>
                            <span class="material-symbols-outlined text-xl">language</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h5 class="text-lg font-bold mb-6">Liên kết nhanh</h5>
                    <ul class="space-y-4 text-slate-400 text-sm">
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Về chúng tôi</a></li>
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Mô hình nhượng quyền</a></li>
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Máy pha cà phê</a></li>
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Tin tức &amp; Sự kiện</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-lg font-bold mb-6">Chính sách</h5>
                    <ul class="space-y-4 text-slate-400 text-sm">
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Chính sách bảo mật</a></li>
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Điều khoản dịch vụ</a></li>
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Chính sách bảo trì</a></li>
                        <li><a class="hover:text-primary transition-colors cursor-default" href="javascript:void(0)"
                                @click.prevent>Hợp tác đại lý</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-lg font-bold mb-6">Đăng ký nhận tin</h5>
                    <p class="text-slate-400 text-sm mb-4">Cập nhật những ưu đãi nhượng quyền mới nhất.</p>
                    <div class="flex">
                        <input
                            class="bg-white/5 border-white/10 rounded-l-xl px-4 py-2 w-full focus:ring-primary focus:border-primary text-white"
                            placeholder="Email của bạn" type="email" />
                        <button class="bg-primary px-4 rounded-r-xl hover:bg-primary/90 transition-colors">
                            <span class="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
                <p>© 2026 Eti Coffee. All Rights Reserved. Designed for Professional Coffee Franchises.</p>
            </div>
        </div>
    </footer>
</template>