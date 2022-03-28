<template>
<div>
  <button @click="goToPrevious()" type="submit" class="btn btn-primary btn-block">Home</button>  
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="item in cart"
          :key="item.id"
          href="#"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <img :src="item.imageUrl" alt height="60" width="60" />
          <p class="h4">{{ item.name }}</p>
          <div class="row">
            <div class="mr-2">
              <p>Unique Price</p>
              <p>${{ item.price }}</p>
            </div>
            <div class="mr-2">
              <p>Total Price</p>
              <p>${{ item.price * item.quantity }}</p>
            </div>
            <div>
              <p>Quantity</p>
              <p>{{ item.quantity }}</p>
            </div>
          </div>
        </a>
        <div
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <p class="h4">Total</p>
          <div>
            <p>Total Price</p>
            <p>${{ totalPrice }}</p>
          </div>
        </div>
        <button
          @click="checkout()"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >Checkout</button>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Footer from "../../layouts/Footer.vue"
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  components: { Footer },
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
    ...mapGetters("account", ["user"]),
  },
  methods: {
    goToPrevious(){
      this.$router.push('/Products')
    },
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 400);
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>

<style scoped>
.container {
  margin-top: 25vh;
  height: 70vh;
}
</style>