<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Terserah</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">Menu</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/carts"
              >Keranjang
              <i class="bi bi-cart3"></i>
              <span class="badge text-bg-success ms-2">{{
                updateCarts ? updateCarts.length : qty.length
              }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      qty: [],
    };
  },
  props: ["updateCarts"],
  methods: {
    setQty(data) {
      this.qty = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/armansept18/mock-terserah/carts"
      )
      .then((res) => {
        this.setQty(res.data);
      })
      .catch((err) => console.error("Error on carts :", err.message));
  },
};
</script>

<style></style>
