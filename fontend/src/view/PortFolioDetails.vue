<script setup>  
     import BreadCrumbComponent from '@/components/BreadCrumbComponent.vue';  
      import PortfolioItemComponent from '@/components/PortfolioItemComponent.vue';

     const PageData = {
           title: 'Home',
           PageName: 'PORTFOLIO'
      
     }
</script>

<template> 
      <BreadCrumbComponent :PageData="PageData"/>
      <PortfolioItemComponent />
      <!-- <PortfolioComponent /> 
      <CallActionComponent /> -->
</template>