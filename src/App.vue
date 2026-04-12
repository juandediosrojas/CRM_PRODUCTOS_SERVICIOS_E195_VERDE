<script>
import 'bulma/css/bulma.min.css';	// Import Bulma CSS
import './assets/custom-style.css';	// Import custom CSS
export default {
  name: 'App',
};
</script>

<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style scoped></style>
