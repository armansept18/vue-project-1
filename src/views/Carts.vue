<template>
  <div class="carts">
    <Navbar :updateCarts="carts" />
    <div class="container">
      <div class="row mt-4">
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
                Carts
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Your <strong>Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Food</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(carts, index) in carts" :key="carts.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'/assets/images/' + carts.products.gambar"
                      alt="menu-image"
                      class="img-fluid shadow"
                      width="75px"
                    />
                  </td>
                  <td>
                    <strong>{{ carts.products.name }}</strong>
                  </td>
                  <td>{{ carts.notes ? carts.notes : " - " }}</td>
                  <td>{{ carts.qty }}</td>
                  <td align="right">
                    Rp {{ carts.products.harga.toLocaleString("id-ID") }}
                  </td>
                  <td align="right">
                    <strong>
                      Rp
                      {{
                        (carts.products.harga * carts.qty).toLocaleString(
                          "id-ID"
                        )
                      }}
                    </strong>
                  </td>
                  <td align="center" class="text-danger">
                    <i
                      class="bi bi-trash"
                      style="cursor: pointer"
                      @click="deleteItem(carts.id)"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong> Total Harga: {{}}</strong>
                  </td>
                  <td align="right">
                    <strong
                      >Rp {{ totalAmount.toLocaleString("id-ID") }}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carts",
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    deleteItem(id) {
      axios
        .delete("http://localhost:2000/carts/" + id)
        .then(() => {
          this.$toast.success("Berhasil hapus item", {
            position: "top",
            type: "success",
            duration: 2000,
            dismissible: true,
          });
          axios
            .get("http://localhost:2000/carts")
            .then((res) => {
              console.log("Response Carts :", res.data);
              this.setCarts(res.data);
            })
            .catch((err) => {
              console.error("Request Carts:", err.message);
            });
        })
        .catch((err) => {
          console.error("Delete cart error :", err.message);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:2000/carts")
      .then((res) => {
        console.log("Response Carts :", res.data);
        this.setCarts(res.data);
      })
      .catch((err) => {
        console.error("Request Carts:", err.message);
      });
  },
  computed: {
    totalAmount() {
      //   let sum = 0;
      //   for (let i = 0; i < this.carts.length; i++)
      //     sum += parseInt(this.carts[i].qty) * this.carts[i]["products"]["harga"];
      //   return sum;
      return this.carts.reduce(function (items, data) {
        return items + data.qty * data.products.harga;
      }, 0);
    },
  },
};
</script>

<style></style>
