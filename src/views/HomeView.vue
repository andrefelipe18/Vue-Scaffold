<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

const msg = ref<string>('Welcome to Your Vue.js + TypeScript App')

const computedMsg = computed(() => msg.value + '!!!')
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <p>{{ msg }}</p>
    {{ computedMsg }}
  </div>
</template>


