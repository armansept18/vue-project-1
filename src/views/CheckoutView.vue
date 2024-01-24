<template>
  <div class="checkout-page">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img
            src="../assets/images/undraw_breakfast_psiw.png"
            alt="success-image"
            width="200"
          />
          <h2>
            <strong>Checkout! <i class="bi bi-check-circle-fill"></i> </strong>
          </h2>
          <h4>Your order has been processed</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "CheckoutPage",
  components: {
    Navbar,
  },
};
</script>

<style></style>
