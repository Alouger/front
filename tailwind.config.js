/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // 表示tailwindcss的作用范围 [src下所有目录下的所有vue/js文件， 当前index.html文件]
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', { lineHeight: '0.35rem' }],
        sm: ['0.35rem', { lineHeight: '0.45rem' }],
        base: ['0.45rem', { lineHeight: '0.55rem' }],
        lg: ['0.55rem', { lineHeight: '0.65rem' }],
        xl: ['0.65rem', { lineHeight: '0.75rem' }]
      },
      boxShadow: {
        'l-white': '-10px 0 10px white' // 自定义类名样式 使用时 shadow-l-white
      }
    }
  },
  plugins: []
}
