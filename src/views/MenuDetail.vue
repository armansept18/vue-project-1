<template>
  <div class="menu-detail">
    <Navbar />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark text-decoration-none"
                  >Home</router-link
                >
              </li>
              <li class="breadcrumb-item">
                <router-link to="/menu" class="text-dark text-decoration-none"
                  >Menu</router-link
                >
              </li>
              <li
                class="breadcrumb-item active"
                style="font-weight: bold"
                aria-current="page"
              >
                Menu Details
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <img
            :src="'/assets/images/' + product.gambar"
            alt="menu-image"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>
              {{ product.name }}
            </strong>
          </h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp {{ product.harga }}</strong>
          </h4>
          <form action="" class="mt-4">
            <div class="form-group">
              <label for="qty">Jumlah Pesanan</label>
              <input type="number" class="form-control" />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea class="form-control" placeholder="Keterangan" />
            </div>
            <button type="submit" class="btn btn-danger mt-4">
              <i class="bi bi-cart3"></i> Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "MenuDetails",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:2000/products/" + this.$route.params.id)
      .then((res) => {
        console.log("Response Route Params :", res.data);
        this.setProduct(res.data);
      })
      .catch((err) => console.error("Request Params :", err.message));
  },
};
</script>

<style></style>
