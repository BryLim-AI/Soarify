<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import WelcomePage from './views/page1.vue'
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand" href="#">Soarify</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item">
        <RouterLink to="/" class="nav-link" href="#">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/db" class="nav-link" href="#">Apps</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" href="#">Other Sites</RouterLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
  <RouterView />
</template>


