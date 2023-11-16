<template>
    <div class="product">
      <div>
        <h2>{{ currentCategory.name }}</h2>
      </div>
      <div v-for="product in currentCategory.products" :key="product.id" class="product">
        <div>
          <img :src="require('@/assets/' + product.image)" :alt="product.image"> 
        </div>
        <p>{{product.name}}</p>
        <p> &euro; {{ product.price }} </p>
        
      </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductsView',

  data() {
        return {
            currentCategory: {},
        }
    },

  computed: {

        ...mapGetters(['getCategoryById']),

        CategoryId() {
            return this.$route.params.categoryId
        },
    },
  created() {
      this.currentCategory = this.getCategoryById(this.CategoryId)
  },
  

}
</script>

<style scoped>
  img{
    width: 100px;
    height: auto;
  }
</style>