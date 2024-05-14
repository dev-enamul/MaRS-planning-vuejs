<script setup>  
     import BreadCrumbComponent from '@/components/BreadCrumbComponent.vue';
     import IntroductionComponent from '@/components/IntroductionComponent.vue';
     import MissionComponent from '@/components/MissionComponent.vue'; 
     import TeamComponent from '@/components/TeamComponent.vue';
     import CounterComponent from '@/components/CounterComponent.vue';
     
      import axios from 'axios';
      import { ref } from 'vue';
import SkillComponent from '@/components/SkillComponent.vue';
     const PageData = {
           title: 'Home',
           PageName: 'About Us'
      
     }

    const AboutData = ref([]);
    axios.get('http://127.0.0.1:8000/api/about-us')
        .then(response =>{
            AboutData.value = response.data;  
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

</script>

<template>
      <BreadCrumbComponent :PageData="PageData"/>
      <IntroductionComponent :AboutData="AboutData"/>
      <MissionComponent :AboutData="AboutData"/>
      <!-- <SkillComponent /> -->
      <TeamComponent />
      <CounterComponent /> 
</template>