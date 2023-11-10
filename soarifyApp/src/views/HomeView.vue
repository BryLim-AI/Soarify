<script setup lang="ts">

</script>

<template>
  <main class="splashPage">
    <h1>Soarify Developer Zone</h1>
    <RouterLink to="/db" class="btn btn-lg btn-dark">
      View Developer Console
    </RouterLink>
  </main>
</template>


<style scoped>
h1{
  text-align: center;
  font-size: 80px;
  color:white;
}
.splashPage{
  display: flex;
  justify-content: center;
  align-items:center;
  height: 600px;
  flex-direction: column;
}
</style>