<template>
  <div>
      <Base />
      <Landing />
      <Footer />
  </div>
</template>

<script>
import Landing from "../../layouts/Landing.vue";
import Footer from "../../layouts/Footer.vue";
import Base from "../../layouts/Base.vue";
export default {
    name: "Landing",
    components: { Landing, Base, Footer}
}
</script>

<style>

</style>