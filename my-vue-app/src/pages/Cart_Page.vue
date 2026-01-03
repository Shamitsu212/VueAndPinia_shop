<script setup>
  import Footer from '../components/layout/Footer.vue';
  import Header from '../components/layout/Header.vue';
  import UnitCard_UI from '../components/UI/UnitCard_UI.vue';

  import { useCartStore } from '../store/cart';
  const cart= useCartStore()

</script>

<template>

  <div class="Page">
    
    <Header text="Корзина"/>

    <section class="Page__mappedList">

      <UnitCard_UI v-for="unit in cart.items" :key="unit.id" :unit="unit" :showDelete="true" />

    </section>

    <Footer />
  </div>
  
</template>

<style scoped>
.Page{
  width: 1416px;

  display: flex;
  flex-direction: column;
  gap: 20px;
}
.Page__mappedList{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  background-color: white;
  border-radius: 24px;

  width: 1416px;
  min-height: 960px;

  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
