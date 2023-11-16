<template>
  <div class="store">
    <h1>Це наш чудовий магазин</h1>
    <h3>Каталог товарів</h3>
    <div v-for="category in getCategories" :key="category.id" class="category" @click="onCategoryClick(category.id)">
      <p> {{ category.name }} </p>

    </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default{
    name: 'Store',

    computed: {
        ...mapGetters(['getCategories'])
    },

    methods: { 
      onCategoryClick(id){
        this.$router.push({
          name: 'products',
          params: {
            categoryId: id,
          },
        })
      },
    }
}
</script>

<style scoped>
.category {
    cursor: pointer;
}
</style>