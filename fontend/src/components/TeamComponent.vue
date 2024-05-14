<script setup>  
import TeamItem from './TeamItem.vue';
import {ref} from 'vue';
import axios from 'axios';
const teams = ref([]);
axios.get('http://127.0.0.1:8000/api/team')
.then(response => {
    teams.value = response.data;
})
.catch(error=>{ 
})

</script>
<template>
    <section class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title-r">
                            <h2>Our Management Team</h2>
                        </div>
                    </div>   

                    <TeamItem v-for="team in teams" :key="team.id" :teamData="team"/>
 
                </div><!-- /row -->
            </div><!-- /container -->
        </section>
</template>