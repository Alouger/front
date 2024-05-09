<template>
  <div>
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <!-- 点击蒙版区域时 隐藏弹窗 -->
        <div
          v-if="modelValue"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="emits('update:modelValue', false)"
        ></div>
      </transition>

      <!-- 内容 -->
      <transition name="popup-down-up">
        <!-- 使用了v-bind指令将父组件传递给当前组件的所有属性绑定到一个<div>元素上。$attrs是Vue中一个特殊的对象，它包含了父组件传递给当前组件的所有属性（不包括class和style） -->
        <div
          v-if="modelValue"
          v-bind="$attrs"
          class="w-screen bg-white z-50 fixed bottom-0"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { Teleport, watch } from 'vue'
import { useScrollLock } from '@vueuse/core'

const props = defineProps({
  // 控制显示与隐藏
  modelValue: {
    type: Boolean,
    required: true
  }
})

// 获取事件对象
const emits = defineEmits(['update:modelValue'])

// 锁定滚动，返回的是一个响应式数据
const isLocked = useScrollLock(document.body)

watch(
  () => props.modelValue,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
// fade 动画
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
// 准备进入，离开完成
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
