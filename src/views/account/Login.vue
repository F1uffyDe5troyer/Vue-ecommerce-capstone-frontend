<template>
<div>
  <div>
    <router-link type="submit" class="btn btn-primary btn-block" to="Products">Products</router-link>
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
          </div>
        <form @submit.prevent="login">
          <div>
           <div class="form-group form-validation">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input 
              type="password" 
              class="form-control" 
              id="exampleInputPassword1"
              v-model="password"
              />
            </div>
            <button @click="login()" type="submit" class="btn btn-primary btn-block">Login</button>
            <small
                id="emailHelp"
                class="form-text text-muted"
              >Don't have an account?</small>
            <router-link type="submit" class="btn btn-primary btn-block" to="/Signup">Signup?</router-link>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
<Footer />
</div>
</template>

<script>
import { mapActions } from "vuex";
import Footer from "../../layouts/Footer.vue"
export default {
  name: "Login",
  components: { Footer },
    data() {
    return {
      email: "",
      password: "",
      isAdmin: false,
    };
  },
  methods: {
login() {
      fetch("https://dalarno-capstone-final-project.herokuapp.com/users/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if(json.jwt){
            localStorage.setItem("jwt", json.jwt);
          }
          else{
            alert("Incorrect Credentials");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
    ...mapActions("account", ["login"]),
  },
};
</script>


<style>
.form-control {
  border-radius: 0%;
  height: 50px;
}
.login-form-container {
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0px 2px 5px 2px #888888;
}
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
