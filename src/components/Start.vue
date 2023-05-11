<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
const onClick = () => store.count++;
</script>

<template>
    <div class="home">
        <h1>Hello World</h1>
        <button @click="onClick">Add count</button>
        <div>Count: {{ store.count }}</div>
    </div>
</template>

<style>
.home {
    text-align: center;
}
</style>
