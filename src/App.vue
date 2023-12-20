<script setup>
import {usePageStackStore} from "./plugin/index.js";
import {computed} from "vue";

const {pageStack} = usePageStackStore();
const include = computed(() => {
  return Array.from(new Set(pageStack.value.map(it => it.name)))
})
</script>

<template>
  <a v-if="pageStack.length > 1" @click="$router.back()">back</a>
  <br>
  <div>
    page-stack:
    <span class="page-stack" v-for="(item, index) in pageStack" :key="index">
    {{ item.name }}
  </span>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive :include="include">
      <component :is="Component" :key="$route.fullPath"/>
    </keep-alive>
  </router-view>
</template>

<style scoped>
.page-stack + .page-stack:before {
  content: "->";
}
</style>
