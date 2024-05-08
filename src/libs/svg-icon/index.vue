<template>
  <!-- 通过设置属性aria-hidden="true"，指示辅助技术（如屏幕阅读器）忽略此SVG元素，可能是因为它用于装饰或已有替代内容 -->
  <svg aria-hidden="true">
    <!-- <use>元素在SVG中用于实例化定义在文档其他地方的图形内容，如<symbol>、<g>等。这使得你能够复用图形定义，提高代码效率和维护性 -->
    <!-- 将symbolId数据属性绑定到xlink:href，允许动态引用不同的SVG符号（这些符号通常定义在文档的<defs>部分）。这意味着你可以根据组件的属性或状态来切换显示不同的图标 -->
    <!-- 将color数据属性值设置为图形的填充颜色 -->
    <use :xlink:href="symbolId" :fill="color" :class="fillClass" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 显示的svg
  name: {
    type: String,
    required: true
  },
  // svg 图标的颜色
  color: {
    type: String
  },
  // tailwind 指定 svg 颜色的类名
  fillClass: {
    type: String
  }
})

// 生成图标唯一id #icon-xxx
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped></style>
