<template>
  <div>
      <Base />
      <section class="about-section">
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
<Footer />
</section>
  </div>
</template>

<script>
import Footer from "../../layouts/Footer.vue"
export default {
    name: "About",
    components: { Footer }
}
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.6.1/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Cairo:300,600,700,900');

body {
  font-family: 'Cairo', sans-serif;
  font-weight: 300;
  letter-spacing: .025rem;
  color: #494949;
}

h1 {
  font-weight: 900;
  margin-left: 22rem;
}

h2, h3 {
  font-weight: 700;
  margin-left: 10px;
}

h4, h5, h6 {
  font-weight: 600;
}

p {
  color: #6c757d;
}

img {
  max-width: 100%;
}

.about-section {
  width: 100%;
  height: 100vh;
}

.left-header {
  position: sticky;
  top: 0;
  left: 0;
  color: #fff;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://i.postimg.cc/Dy1QGkX6/winning.webp');
  background-size: cover;
  padding: 4rem;
}

.left-header::before {
  background-color: #fff;
  position: absolute;
  content: '';
  bottom: 50px;
  left: 30px;
  margin: 0 1rem;
  width: 80%;
  height: 2px;
}

.left-header::after {
  background-color: #fff;
  position: absolute;
  content: '';
  bottom: 50px;
  left: 30px;
  margin: 0 1rem;
  height: 80%;
  width: 2px;
}

.left-header h2 {
  margin-left: 4rem;
}

.v-center-box {
  min-height: 100%;
}

.sub-heading {
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .15rem;
  word-spacing: .05rem;
}

.about-data {
  position: relative;
}

.about-data::before {
  position: absolute;
  content: '\003c/ ABOUT \003e';
  top: 0;
  left: 50%;
  transform: translate(-50%, -60%);
  text-align: center;
  font-size: .8rem;
  font-weight: 900;
  color: #dee2e6; 
  background-color: #fff;
  width: 8rem;
}

.about-data i {
  color: #f12d2d;
}

.about-data p {
  font-size: .7rem;
  letter-spacing: .05rem;
  word-spacing: .2rem;
}
.about-data .data-number {
  color: #494949;
  font-size: 1.2rem;
}

.icon-18 {
  font-size: 1.8rem;
}

@media (min-width: 992px) and (max-width: 1199px) {
  .left-header::before {
    width: 70%;
  }
}

@media (min-height: 590px) {
  .left-header::after {
    height: 85%;
  }
}
</style>