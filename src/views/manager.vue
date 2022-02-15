<template>
<div class="grid_box">
  <web-header class="header"></web-header>
</div>
</template>

<script>

import WebHeader from "@/components/web_header";
export default {
  name: "manager",
  components: {WebHeader}
}
</script>

<style scoped>
.grid_box{
  height: 150vh;
  background-color: aquamarine;
}

</style>
