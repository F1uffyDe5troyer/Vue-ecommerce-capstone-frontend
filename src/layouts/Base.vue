<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <router-link class="btn btn-primary my-2 my-sm-0" to="/Landing">Home</router-link>
        <router-link class="navbar-brand" to="/Landing"></router-link>
        <div class="ml-auto">
          <div v-if="user.photoURL">
            <img
              src="public/images/usericon.png"
              class="img-thumbnail profile-image"
              alt=""
            />
            <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
              <img
                src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                width="50"
                alt
              />
              <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
            </router-link>
          </div>
          <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login">Login</router-link>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/UserDetails">Profile</router-link>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/About">About</router-link>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/Contact">Contact</router-link>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Base",
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["cart"])
  }
};
</script>

<style>
nav {
  background-color: crimson;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  font-family: Comic;
  color: #ffffff !important;
}
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 0px;
}
.btn {
  margin-left: 2px;
  border-radius: 0%;
  font-weight: bold;
  background: crimson;
  border: rgb(214, 57, 89);
  border-radius: 30% !important;
}
.btn:hover {
  background: rgb(221, 94, 120);
}
input {
  border-radius: 5%;
}
.btn:focus {
  background: teal;
}
</style>