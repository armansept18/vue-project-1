<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <router-link to="/menu" class="btn btn-outline-danger float-right"
            ><i class="bi bi-search"></i> Lihat Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4 d-flex justify-content-center align-items-center"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/armansept18/mock-terserah/best-products"
      )
      .then((response) => {
        console.log("Fetch data :", response.data);
        this.setProduct(response.data);
      })
      .catch((err) => {
        console.error("Error fetch data :", err.message);
      });
  },
};
</script>
