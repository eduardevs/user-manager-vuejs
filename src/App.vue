<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  props: {
  },
  name: 'App',
  components: { NavBar }
}
</script>

<style>

</style>
