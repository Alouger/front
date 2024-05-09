<template>
  <mobileNavigationVue v-if="isMobileTerminal" :data="categoryData" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexable'
import mobileNavigationVue from './mobile/index.vue'
// import pcNavigationVue from './mobile/index.vue'
import { ref } from 'vue'
import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

const categoryData = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
  categoryData.value.unshift(ALL_CATEGORY_ITEM)
  console.log(categoryData.value)
}

getCategoryData()
</script>

<style lang="scss" scoped></style>
