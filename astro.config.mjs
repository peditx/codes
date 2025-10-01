import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // حتماً آدرس دامین خودت رو اینجا وارد کن
  site: 'https://peditx.ir', 
  // Base path برای GitHub Pages
  base: '/',
  // تنظیمات برای Content Collections
  markdown: {
    shikiConfig: {
      theme: 'dracula' // تم کد بلاک‌ها
    }
  }
});
