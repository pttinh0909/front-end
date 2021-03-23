<template>
  <div id="app">
    <!-- Header  -->
    <div class="top-container">
      <Navbar />
    </div>
    <!-- End Header  -->

    <div class="m-container" style="min-height: 91vh; overflow-x: hidden">
      <router-view />
    </div>

    <!-- bottom footer  -->
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
export default {
  name: "Layout",
  components: { Navbar, Footer },
};
</script>
