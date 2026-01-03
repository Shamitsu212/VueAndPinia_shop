import { defineStore } from "pinia";
import { ref } from 'vue'

export const  useCartStore = defineStore('store', ()=> {
    const items  = ref([])

    function addItem(item){
        items.value.push(item)
    }

    function removeItem(id){
        const index = items.value.findIndex(item => item.id === id)
        if (index !== -1) items.value.splice(index, 1)
    }

    return {items, addItem,  removeItem}
})