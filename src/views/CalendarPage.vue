<template>
  <ion-page>
    <AppHeader />
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Calendar</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <ion-card color="medium">
        <ion-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/1200px-Flag_of_Bahrain.svg.png" style="height: 100px; width:200px; padding-top: 5px;"></ion-img>
        <ion-card-header>
          <ion-card-title>Bahrain</ion-card-title>
          <ion-card-subtitle>Bahrain International Circuit</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          26-28 March
        </ion-card-content>
      </ion-card>
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
