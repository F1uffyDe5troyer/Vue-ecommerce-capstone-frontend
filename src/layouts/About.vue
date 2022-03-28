<template>
  <div>
    <section class="about-section">
    <button @click="goToPrevious()" type="submit" class="btn btn-primary btn-block">Home</button>
  <div class="container-fluid p-0">
    <div class="row no-gutters position-relative">
      <div class="left-header d-none d-lg-block col-lg-3 col-xl-4">
        <div class="v-center-box d-flex align-items-end text-uppercase">
          <h2 class="mb-0">About</h2>
        </div>
      </div>
      <div class="col-lg-9 col-xl-8">
        <div class="main-content p-5">
          <div class="main-header mb-4">
            <h6 class="sub-heading text-uppercase d-block mb-2"></h6>
            <h1 class="main-heading d-inline-block text-uppercase pb-3 border-bottom">&lt; About &gt;</h1>
          </div>

          <div class="row mb-5">
            <div class="mb-5 mb-sm-4 col-md-4">
            </div>
            <div class="col-md-8">
              <div class="about__text mb-5 mb-sm-4 mb-md-4">
                <h3></h3>
                <p class="m-0">Our passion for all things Gaming and need to offer gamers a specialist store has always been our focus. We love gaming and are gamers, and we insist on being knowledgeable and excited about the products we sell. Today we offer a wide range of games, consoles, hardware, accessories and related merchandise, at competitive pricing.
                </p>
                <h3>Who are we?</h3>
                <p>BT Games has been around for many years now and is SA's largest Gaming specialist store.
                  We have many stores in South Africa, in all the major malls, and this site where you can order your gaming gear. Orders over R2000 to major centres get FREE DELIVERY to your door, or opt to collect from your nearest post office. You can also collect in-store. Payments are made safely online.
                </p>
              </div>
              <div class="about__skills">
                <div class="row no-gutters mb-0 mb-sm-4">
                  <div class="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="about-data">
            <div class="row no-gutters pt-5 border-top">
              <div class="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="fas fa-mug-hot icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">10,950</p>
                    <p class="m-0 text-uppercase">Cups of coffee</p>
                  </div>
                </div>
              </div>

              <div class="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="fas fa-code icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">8,475,000</p>
                    <p class="m-0 text-uppercase">Lines of code</p>
                  </div>
                </div>
              </div>

              <div class="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="fas fa-bus icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">8,214</p>
                    <p class="m-0 text-uppercase">Buses taken</p>
                  </div>
                </div>
              </div>

              <div class="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                <div class="media">
                  <i class="far fa-smile-wink icon-18 mr-2"></i>
                  <div class="media-body">
                    <p class="data-number m-0 font-weight-bold">3,165</p>
                    <p class="m-0 text-uppercase">Awkward winks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  </div>
</template>

<script>
export default {
    name: 'About',
    methods: {
    goToPrevious(){
      this.$router.push('/Products')
    }
    }
}
</script>

<style scoped>
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: crimson;
  border: crimson;
}
.btn:hover {
  background: #00b4b4;
}
.btn:focus {
  background: rgb(228, 79, 109);
}

</style>