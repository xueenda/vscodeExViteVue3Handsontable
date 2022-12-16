<script setup>
import { ref, onMounted, useAttrs, inject} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const baseUri = ref('')

// const attrs = useAttrs()
// console.log(attrs.$baseUri)

console.log(inject('$baseUri'))



onMounted(()=>{
  baseUri.value = inject('$baseUri')
  // console.log($baseUri)
  
  // baseUri.value = this.baseUri
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank" style="float:right">
      <img :src="`${baseUri}/vite.svg`" class="logo" alt="Vite logo" />
      <h4>Vite</h4>
    </a>
    <a href="https://vuejs.org/" target="_blank" >
      <img :src="`${baseUri}/vue.svg`" class="logo vue" alt="Vue logo" />
      <h4>Vue</h4>
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
