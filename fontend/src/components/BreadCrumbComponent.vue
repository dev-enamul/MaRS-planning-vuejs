<script setup> 
  const {PageData} = defineProps(["PageData"]) 
</script>   
<template>
    <div class="breadcrumb-container">
            <div class="container">
                <ol class="breadcrumb justify-content-end">
                    <li class="breadcrumb-item"><a href="index.html">{{ PageData.title }}</a></li>
                    <li class="active breadcrumb-item">{{ PageData.PageName }} <i class="fa fa-arrow-down ml5"></i></li>
                </ol>
            </div>
        </div>
</template>