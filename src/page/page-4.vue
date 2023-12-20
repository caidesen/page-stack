<script setup >

import FakerDataLoader from "../components/faker-data-loader.vue";
import {useRouter} from "../plugin/index.js";

const router = useRouter()
const nav = (index) => {
  router.push(`/${index}`)
}
</script>
<script>
export default {
  name: '4',
}
</script>
<template>
  <br>
  <a @click="nav('1?t='+new Date().getTime())">to page-1</a>
  <br>
  <a @click="nav('2?t='+new Date().getTime())">to page-2</a>
  <br>
  <a @click="nav('3?t='+new Date().getTime())">to page-3</a>
  <br>
  <a @click="nav('4?t='+new Date().getTime())">to page-4</a>
  <br>
  <FakerDataLoader/>
</template>

<style scoped>

</style>
