<script setup>
import Product from "./components/Product.vue";
</script>

<template>
  <div class="main-container">
    <!--Main Title-->
    <h1>Desserts</h1>
    <!--Waffle with Berries-->
    <Product
      image="image-waffle-mobile.jpg"
      description="Waffle"
      title="Waffle with Berries"
      :price="6.5"
    />
    <!--Vanilla Bean Creme Brulee-->
    <Product
      image="image-creme-brulee-mobile.jpg"
      description="Creme Brulee"
      title="Vanilla Bean Creme Brulee"
      :price="7.0"
    />
    <!--Macaron Mix of Five-->
    <Product
      image="image-macaron-mobile.jpg"
      description="Macaron"
      title="Macaron Mix of Five"
      :price="8.0"
    />
    <!--Classic Tiramisu-->
    <Product
      image="image-tiramisu-mobile.jpg"
      description="Tiramisu"
      title="Classic Tiramisu"
      :price="5.5"
    />
    <!--Pistachio Baklava-->
    <Product
      image="image-baklava-mobile.jpg"
      description="Baklava"
      title="Pistachio Baklava"
      :price="4.0"
    />
    <!--Lemon Meringue Pie-->
    <Product
      image="image-meringue-mobile.jpg"
      description="Pie"
      title="Lemon Meringue Pie"
      :price="5.0"
    />
    <!--Red Velvet Cake-->
    <Product
      image="image-cake-mobile.jpg"
      description="Cake"
      title="Red Velvet Cake"
      :price="4.5"
    />
    <!--Salted Caramel Brownie-->
    <Product
      image="image-brownie-mobile.jpg"
      description="Brownie"
      title="Salted Caramel Brownie"
      :price="5.5"
    />
    <!--Vanilla Panna Cotta-->
    <Product
      image="image-panna-cotta-mobile.jpg"
      description="Panna Cotta"
      title="Vanilla Panna Cotta"
      :price="6.5"
    />
  </div>
</template>

<style>
.main-container {
  padding: 0 25px;
  max-width: 700px;
  margin: 0 auto;
}

h1 {
  margin-top: 34px;
  margin-bottom: 41px;
}
</style>
