import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // حتماً آدرس دامین خودت رو اینجا وارد کن
  site: 'https://peditxos.ir', 
  // Base path برای GitHub Pages.
  // اگر دامین کاستوم شما (مثل codes.peditxos.ir) مستقیماً به روت مخزن اشاره دارد، "/" صحیح است.
  // اگر آدرس شما به صورت peditx.github.io/releases/ است، باید base: '/releases/' باشد.
  base: '/', 
  // تنظیمات برای Content Collections
  markdown: {
    shikiConfig: {
      theme: 'dracula' // تم کد بلاک‌ها
    }
  }
});
