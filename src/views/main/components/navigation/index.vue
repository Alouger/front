<template>
  <mobileNavigationVue v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexable'
import mobileNavigationVue from './mobile/index.vue'
// import pcNavigationVue from './mobile/index.vue'
import { ref } from 'vue'
import { getCategory } from '@/api/category'

const categoryData = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
  console.log(categoryData.value)
}

getCategoryData()
</script>

<style lang="scss" scoped></style>
