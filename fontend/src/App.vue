<script setup> 
    import { RouterView } from 'vue-router';  
    import NavbarComponent from './components/NavbarComponent.vue';
    import StyleSwitcherComponent from './components/StyleSwitcherComponent.vue';
    import PreLoaderComponent from './components/PreloaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue'; 
</script>

<template>  
    <PreLoaderComponent />  
    <StyleSwitcherComponent /> 
    <NavbarComponent /> 
    <router-view></router-view> 
    <FooterComponent /> 
</template>
 
