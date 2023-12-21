<script setup lang="ts">
import { computed } from 'vue';

const isDev = computed(() => import.meta.env.MODE === 'development');
</script>

<template>
    <!-- is removed in build-mode -->
    <div v-if="isDev" class="navbar"></div>
    <RouterView />
</template>
<style scoped>
.navbar {
    height: 56px;
    background: #0e204b;
}
</style>
