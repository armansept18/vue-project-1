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
            <strong
              >Rp {{ Number(product.harga).toLocaleString("id-ID") }}</strong
            >
          </h4>
          <form class="mt-4" @submit.prevent>
            <div class="form-group">
              <label for="qty">Jumlah Pesanan</label>
              <input type="number" class="form-control" v-model="carts.qty" />
            </div>
            <div class="form-group">
              <label for="notes">Keterangan</label>
              <textarea
                class="form-control"
                placeholder="Keterangan"
                v-model="carts.notes"
              />
            </div>
            <button type="submit" class="btn btn-danger mt-4" @click="cart">
              <i class="bi bi-cart3"></i> Add to cart
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
      carts: {
        qty: 1,
        notes: "",
      },
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    cart() {
      if (this.carts.qty < 1) {
        this.$toast.error("Please set correct quantity", {
          type: "error",
          timeout: 3000,
          position: "top",
          dismissible: true,
        });
        return;
      } else {
        this.carts.products = this.product;
        axios
          .post(
            "https://my-json-server.typicode.com/armansept18/mock-terserah/carts",
            this.carts
          )
          .then(() => {
            console.log(
              "Order Successful!",
              `Your order for ${this.product.name} has been placed.
            Your cart :`,
              this.carts.products
            );
            this.$router.push({ path: "/carts" });
            this.$toast.success("Success add to cart", {
              type: "success",
              position: "top",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => {
            console.error(`Error Order Products! ${err}`);
          });
      }
    },
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/armansept18/mock-terserah/products/" +
          this.$route.params.id
      )
      .then((res) => {
        console.log("Response Route Params :", res.data);
        this.setProduct(res.data);
      })
      .catch((err) => {
        console.error("Request Params :", err.message);
      });
  },
};
</script>

<style></style>
