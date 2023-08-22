<template>
  <router-view />
</template>
<script>
import sal from 'sal.js';
import 'sal.js/dist/sal.css';

export default {
  mounted() {
    sal();
  }
};
</script>