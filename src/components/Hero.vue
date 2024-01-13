<template>
  <div class="row mt-4">
    <div class="col">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h2>
            <strong>Delicious Food Menu, </strong><br />
            in Your Gadget
          </h2>
          <p>Pilih dan pesan menu favorit anda!</p>
          <router-link class="btn btn-lg btn-success" to="/menu"
            >Pesan
            <i class="bi bi-arrow-right-circle"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <img src="../assets/images/hero.png" alt="Hero" width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
};
</script>

<style></style>
