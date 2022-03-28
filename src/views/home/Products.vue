<template>
<div>
  <Base />
<div class="products">
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../../layouts/Footer.vue";
import ProductCard from "../../components/products/ProductCard";
import Base from "../../layouts/Base.vue";
export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { ProductCard, Base, Footer },
  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
.products {
  background-color: rgb(0, 0, 0);
}
.container {
  margin-top: 12vh;
  padding-top: 15px;
  background-color: white;
}
</style>