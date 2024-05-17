<template>
  <ion-page>
    <AppHeader />
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header> -->

      
    </ion-content>
  </ion-page>
</template>

<script>
import AppHeader from './AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
