<template>
  <div class="card shadow card-product">
    <img
      :src="`/assets/images/` + product.gambar"
      class="card-img-top product-image"
      alt="Product Image"
    />
    <div class="card-body d-flex flex-column">
      <h6 class="card-title" style="text-align: right">{{ product.name }}</h6>
      <h6 style="text-align: right">
        Rp {{ product.harga.toLocaleString("id-ID") }}
      </h6>
      <router-link
        :to="'/menu-details/' + product.id"
        class="btn btn-danger mt-4"
        ><i class="bi bi-cart3"></i> Order</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
