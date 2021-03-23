<template>
  <!-- Material form subscription -->

  <div class="mdb-login">
    <mdb-card class="form-login">
      <div class="text-center text-login">Sign up</div>
      <mdb-card-body>
        <form
          class="needs-validation"
          novalidate
          @submit.prevent="handleSubmit"
        >
          <div class="grey-text">
            <mdb-input
              label="username"
              icon="user"
              group
              type="text"
              required
              error="wrong"
              success="right"
              v-model="username"
            />
            <mdb-input
              label="password"
              icon="lock"
              group
              type="password"
              required
              v-model="password"
            />
          </div>
          <div class="text-center">
            <mdb-btn type="submit" outline="cyan">Login</mdb-btn>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
    <div class="light x1"></div>
    <div class="light x2"></div>
    <div class="light x3"></div>
    <div class="light x4"></div>
    <div class="light x5"></div>
    <div class="light x6"></div>
    <div class="light x7"></div>
    <div class="light x8"></div>
    <div class="light x9"></div>
    <notifications group="auth" />
  </div>
</template>

<script>
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from "mdbvue";
export default {
  name: "Login",
  components: {
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbInput,
  },
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      regex: /[a-zA-Z0-9]+\S+$/,
    };
  },
  methods: {
    validate: function () {
      const { username, password, regex } = this;
      if (
        username === "" ||
        password === "" ||
        regex.test(username) === false ||
        regex.test(password) === false
      ) {
        return false;
      } else {
        return true;
      }
    },
    showLogintrue() {
      this.$notify({
        group: "auth",
        type: "success",
        title: "<h4 style='font-family: Helvetica Neue'>Login</h4>",
        text:
          "<b style='color: white; font-size: 18px; font-weight: 600; font-family: Helvetica Neue'> Login successfully ✓</b>",
      });
    },
    showLoginfalse() {
      this.$notify({
        group: "auth",
        type: "error",
        title: "<h4 style='font-family: Helvetica Neue'>Login</h4>",
        text:
          "<b style='color: white; font-size: 18px; font-weight: 600; font-family: Helvetica Neue'> Login unsuccessful</b>",
      });
    },
    handleSubmit: function () {
      if (this.validate() === true) {
        this.submitted = true;
        const { username, password } = this;
        if (username && password) {
          console.log({ username, password });
          this.showLogintrue();
        }
      } else {
        this.submitted = false;
        this.showLoginfalse();
      }
    },
  },
};
</script>
<style lang="scss">
.text-login {
  background-color: #a9e9f1;
  line-height: 2;
  color: white;
  font-weight: 500;
  font-size: 1.6em;
}
.form-login {
  width: 35%;
}
.mdb-login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
  font-weight: 100;
  background: radial-gradient(#38cce08e, #38cce048);
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  -webkit-animation: fadeIn 1 1s ease-out;
  -moz-animation: fadeIn 1 1s ease-out;
  -o-animation: fadeIn 1 1s ease-out;
  animation: fadeIn 1 1s ease-out;
}
.light {
  position: absolute;
  width: 0px;
  opacity: 0.75;
  background-color: white;
  box-shadow: #ffffff 0px 0px 20px 2px;
  opacity: 0;
  top: 100vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
}

.x1 {
  -webkit-animation: floatUp 4s infinite linear;
  -moz-animation: floatUp 4s infinite linear;
  -o-animation: floatUp 4s infinite linear;
  animation: floatUp 4s infinite linear;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.x2 {
  -webkit-animation: floatUp 7s infinite linear;
  -moz-animation: floatUp 7s infinite linear;
  -o-animation: floatUp 7s infinite linear;
  animation: floatUp 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
  left: 15%;
}

.x3 {
  -webkit-animation: floatUp 2.5s infinite linear;
  -moz-animation: floatUp 2.5s infinite linear;
  -o-animation: floatUp 2.5s infinite linear;
  animation: floatUp 2.5s infinite linear;
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -o-transform: scale(0.5);
  transform: scale(0.5);
  left: -15%;
}

.x4 {
  -webkit-animation: floatUp 4.5s infinite linear;
  -moz-animation: floatUp 4.5s infinite linear;
  -o-animation: floatUp 4.5s infinite linear;
  animation: floatUp 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -34%;
}

.x5 {
  -webkit-animation: floatUp 8s infinite linear;
  -moz-animation: floatUp 8s infinite linear;
  -o-animation: floatUp 8s infinite linear;
  animation: floatUp 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -57%;
}

.x6 {
  -webkit-animation: floatUp 3s infinite linear;
  -moz-animation: floatUp 3s infinite linear;
  -o-animation: floatUp 3s infinite linear;
  animation: floatUp 3s infinite linear;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  left: -81%;
}

.x7 {
  -webkit-animation: floatUp 5.3s infinite linear;
  -moz-animation: floatUp 5.3s infinite linear;
  -o-animation: floatUp 5.3s infinite linear;
  animation: floatUp 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: 37%;
}

.x8 {
  -webkit-animation: floatUp 4.7s infinite linear;
  -moz-animation: floatUp 4.7s infinite linear;
  -o-animation: floatUp 4.7s infinite linear;
  animation: floatUp 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 62%;
}

.x9 {
  -webkit-animation: floatUp 4.1s infinite linear;
  -moz-animation: floatUp 4.1s infinite linear;
  -o-animation: floatUp 4.1s infinite linear;
  animation: floatUp 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 85%;
}

@-webkit-keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}
@-moz-keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}
@-o-keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}
@keyframes floatUp {
  0% {
    top: 100vh;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    top: 0vh;
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
  100% {
    top: -100vh;
    opacity: 0;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes fadeOut {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes fadeOut {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes finalFade {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes finalFade {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes finalFade {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}

@keyframes finalFade {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>