<template>
    <div class="container">
      <div class="banner">Banner</div>
      <div class="content">
        <div class="menu">
          <template v-for="page in pages">
            <button :class="{ active: activePage === page }" @click="navigateTo(page)">
              {{ page }}
            </button>
          </template>
        </div>
        <div class="pages">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { useRoute } from 'vue-router';
  const pages = ref(['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10']);
  const activePage = ref('');
  const router = useRouter();
const route = useRoute();
  const navigateTo = (page: string) => {
    activePage.value = page;
    if (page === 'page3') {
      const randomNum = Math.floor(Math.random() * 100) + 1;
        router.push(`/${page}/${randomNum}?from=click`);
    }
    else if (page === 'page5') {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        const t = randomNum < 50 ? `/page5/${randomNum}/subpage1` : `/page5/${randomNum}/subpage2`
        router.push(t);
    }
    else {
      router.push(`/${page}`);
    }
  };
  
  const highlightPage = computed(() => {
    const route = router.currentRoute.value;
    return route.path.split('/')[1];
  });
  
  watch(highlightPage, (newPage) => {
    activePage.value = newPage;
  });
  </script>
  
  <style scoped lang="scss">
  .container {
    width: 100vw;

    height: 100vh;
    .banner{
        background-color: yellow;
        height: 60px;
    }
    .content{
        width: 300px;
        height:calc(100% - 60px);
        display: flex;
        .menu{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            /** space-between;*/
            button{
                height: 10%;
            }

        }
    }
  }
  </style>
  