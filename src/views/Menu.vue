<template>
  <div class="menu">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Daftar <strong>Menu</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Menu Anda"
              aria-label="Cari Menu Anda"
              aria-describedby="basic-addon1"
              @keyup="debouncedSearchMenu"
            />
            <span class="input-group-text" id="basic-addon1"
              ><i class="bi bi-search"></i
            ></span>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-3 mt-4 d-flex justify-content-center align-items-center"
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
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
const debounce = require("lodash.debounce");

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menu",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:2000/products");
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return [];
      }
    },
    async searchMenu() {
      if (!this.search) {
        this.setProduct(await this.fetchData());
        return;
      }
      const data = await this.fetchData();
      const filteredData = this.filterData(data);
      console.log("Filtered data:", filteredData);
      this.setProduct(filteredData);
    },
    filterData(data) {
      return data.filter((item) => {
        if (this.search) {
          return item.name.toLowerCase().includes(this.search.toLowerCase());
        } else {
          return true;
        }
      });
    },
    updateDebouncedSearchMenu: debounce(function () {
      console.log("Debounce Called");
      this.searchMenu();
    }, 300),
    debouncedSearchMenu() {
      this.updateDebouncedSearchMenu();
    },
  },
  mounted() {
    this.searchMenu();
  },
};
</script>

<style></style>
