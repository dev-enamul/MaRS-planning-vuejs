<script setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';

  const clients = ref([]);

  onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/clients')
      .then(response => {
        clients.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });

  watch(clients, () => {
    
    import('../../public/assets/js/main');
  });
</script>




<template>
    <section class="bg-white">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                        <h2>Our Clients</h2>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="slick-carousel" id="clients">
                        <div v-for="client in clients" :key="client.id">
                            <a :href="client.link">
                                <img :src="client.image" :alt="client.name">
                            </a>
                        </div>
                    </div>
                </div>
            </div><!-- /row -->
        </div><!-- /container -->
    </section> 
</template>
