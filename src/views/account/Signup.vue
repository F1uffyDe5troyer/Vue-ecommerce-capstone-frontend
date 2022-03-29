<template>
  <div>
  <button @click="goToPrevious()" type="submit" class="btn btn-primary btn-block">Home</button>
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
          </div>
        <form @submit.prevent="register">
          <div>
            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input
                type="name"
                class="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                v-model="name"
              />
              <small
                id="nameHelp"
                class="form-text text-muted"
              >Who's you?</small>
            </div>
            <div class="form-group">
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
            <button @click="login()" type="submit" class="btn btn-primary btn-block">signup</button>
            <small
                id="emailHelp"
                class="form-text text-muted"
              >Already have an account?</small>
            <router-link type="submit" class="btn btn-primary btn-block" to="Ly7ogin">Login?</router-link>
          </div>
        </form>
        </div>
      </div>
    </div>
<Footer />
  </div>
</template>

<script>
import Footer from '../../layouts/Footer.vue'
export default {
  name: "Signup",
  components: { Footer },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      // isAdmin: false,
    };
  },
  methods: {
      register() {
      console.log("Registered Successfully");
      const person = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      console.log(person);
      fetch("https://dalarno-capstone-final-project.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(person),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // mode: "no-cors"
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          // this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};

</script>

<style>
.form-control {
  border-radius: 0%;
  height: 50px;
}
.login-form-container {
  padding: 20px;
  box-shadow: 0px 2px 5px 2px #888888;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: teal;
  border: teal;
}
.btn:hover {
  background: #00b4b4;
}
.btn:focus {
  background: teal;
}
</style>