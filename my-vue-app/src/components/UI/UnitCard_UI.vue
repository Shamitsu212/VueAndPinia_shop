<script setup>

    const props = defineProps({
        unit:{
            type: Object,
            required: true,
        },
        showDelete:{
            type: Boolean,
            required: true,
        }
    })

    import Button_UI from './Button_UI.vue';

    import { useCartStore } from '../../store/cart';

    const cart = useCartStore()

    function addToCart(unit) {
      cart.addItem(unit)
    }

    function removeFromCart(id) {
        cart.removeItem(id)
    }

</script>

<template>

  <article class=".card">

    <div class="card__wrapper">

        <picture >
            <img class="wrapper__img" :src="unit.pic"/>
        </picture>

    </div>
      
    <div class="card__content">

        <div class="content__text">
            <p class="text__price">
                <strong class="price__strong">{{ unit.price }}</strong>
            </p>

            <h4 class="text__name">
                {{ unit.name }}
            </h4>
        </div>

        <div class="content__buttons">
            <Button_UI 
                v-if="showDelete ==  false" 
                text="В корзину" 
                color="pink" 
                style="width: 120px; height: 39px;  margin-top: 20px;"
                @click="addToCart(unit)"
            />
            <Button_UI 
                v-if="showDelete == true" 
                text="Убрать" 
                color="blue" 
                style="width: 120px; height: 39px; margin-top: 20px;" 
                @click="removeFromCart(unit.id)"
            />
        </div>

    </div>

  </article>
  
</template>

<style scoped>
    .card{
    width: 258px;
    height: 465px;

    background-color: white;

    padding-top: 10px;
    padding-left: 5px;
    padding-right: 5px;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;

}
.card__wrapper{
    width: 247px;
    height: 333px;
    flex-shrink: 0;

    overflow: hidden;
    position: relative;
}
.wrapper__img{
    width: 100%;
    height: 100%;

    object-fit: cover; 
    display: block; 
}
.card__content{
    width: 258px;
    height: 122px;

    display: flex;
    flex-direction: row;
}
.content__text{
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
}
.text__price{
    min-width: 100px;
    height: 24px;


    margin-top: 30px;
    padding-left: 10px;
}
.price__strong{
    color: rgba(16, 196, 76, 1);
    font-size: 24px;
    font-weight: 400;
    font-style: Regular;
}
.text__name{
    color: black;
    font-size: 22px;
    font-weight: 400;
    font-style: Regular;

    padding-left: 10px;

    margin-top: 6px;

     white-space: nowrap;   
    overflow: hidden;       
    text-overflow: ellipsis;
}
.content__buttons{
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
