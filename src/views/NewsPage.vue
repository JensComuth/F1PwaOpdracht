<template>
  <ion-page>
    <AppHeader />
    <ion-content :fullscreen="true">
      <ion-card v-for="newsItem in news" :key="newsItem.title">
        <img class="driver-image" :alt="newsItem.title" :src="newsItem.img" />
        <ion-card-header>
          <ion-card-title>{{ newsItem.title }}</ion-card-title>
          <ion-card-subtitle>{{ newsItem.type }}</ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-card-subtitle {
  color: red;
}
ion-card-title {
  font-size: 20px;
}
</style>
  
  <script>
  import news from '@/data/news.json';
  import AppHeader from './AppHeader.vue'
  
  export default {
  components: {
    AppHeader // Importeer AppHeader om overal dezelfde header te krijgen
  },
  data() {
    return {
      news // Laad de teams.json data in de teams variabele
    };
  }
}
  </script>
  
  <script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  </script>
  