/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // 表示tailwindcss的作用范围 [src下所有目录下的所有vue/js文件， 当前index.html文件]
  theme: {
    extend: {},
  },
  plugins: [],
};
