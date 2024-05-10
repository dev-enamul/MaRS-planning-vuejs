<script setup>  
     import BreadCrumbComponent from '@/components/BreadCrumbComponent.vue'; 
     import PortfolioComponent from '@/components/PortfolioComponent.vue'; 
      import CallActionComponent from '@/components/CallActionComponent.vue';

     const PageData = {
           title: 'Home',
           PageName: 'PORTFOLIO'
      
     }
</script>

<template> 
      <BreadCrumbComponent :PageData="PageData"/>
      <PortfolioComponent /> 
      <CallActionComponent />
</template>