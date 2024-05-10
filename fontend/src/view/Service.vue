<script setup>  
      import {ref} from "vue";
    import axios from 'axios'; 
    const services =ref([]);
    axios.get('http://127.0.0.1:8000/api/service')
    .then(response => {
      services.value = response.data
    })

    import BreadCrumbComponent from '@/components/BreadCrumbComponent.vue'; 
    import ServiceComponent from '@/components/ServiceComponent.vue';
     const PageData = {
           title: 'Home',
           PageName: 'Service'
      
     }
</script>

<template> 
      <BreadCrumbComponent :PageData="PageData"/>
      <ServiceComponent v-for="(service, index) in services" :key="index" :index="index" :service="service"/> 
</template>