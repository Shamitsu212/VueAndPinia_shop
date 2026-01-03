<script setup>

  const props = defineProps({
    text: {
      type: String,
      default: "Кнопка",
    },
    color: {
      type: String,
      default: "blue",
    },
  })
</script>

<template>

  <button :class="['button', color]">
      {{ text }}
  </button>
  
</template>

<style scoped>
.button {
  border-radius: 9px;
  border: none;
  cursor: pointer;

  background-color: blue;
  color: white;
  transition: background-color 0.2s;
}

.blue {
  background-color: rgba(0, 91, 255, 1);
}

.blue:hover {
  background-color: rgba(0, 70, 200, 1);
}

.pink {
  background-color: rgba(241, 17, 126, 1);
}

.pink:hover {
  background-color: rgba(200, 10, 100, 1);
}
.red {
  background-color: rgba(255, 0, 0, 1);
}
.red:hover {
  background-color: rgba(200, 0, 0, 1); 
}
</style>
