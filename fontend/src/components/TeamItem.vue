<script setup> 
    const {teamData} = defineProps(['teamData'])
</script>

<template>
     <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
        <figure class="item-img-wrap">
            <img :src="teamData.image" class="img-fluid" alt="team">
            <div class="item-img-overlay">
                <div class="team-social">
                    <p>
                        <strong class="color4 text-uppercase">{{ teamData.designation }}</strong><br>
                       {{ teamData.description }}
                    </p>
                </div>
            </div>
        </figure>
        <div class="team-name">
            <h4 class="h-underline2">{{ teamData.name }}</h4>
            <h5>{{ teamData.designation }}</h5>
            <ul class="list-inline socialstaff w-100 text-center p-0">
                <li class="list-inline-item" v-for="social in teamData.social" :key="social.id">
                    <a :href="social.link" data-toggle="tooltip" data-placement="bottom" :data-original-title="social.titlen" class="corp-tooltip">
                        <i :class="`fa-2x ${social.icon}`" class=" "></i>
                    </a>
                </li> 
            </ul>
        </div>
        <div class="visible-xs-block visible-sm-block pt20"></div>
    </div>  
</template>