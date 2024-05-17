<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="custom-selected-tab custom-tab-bar">

        <ion-tab-button tab="newsTab" href="/tabs/news">
          <ion-icon class="custom-icon" aria-hidden="true" :icon="book"/>
          <ion-label>News</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="driversTab" href="/tabs/driver">
          <ion-icon class="custom-icon" aria-hidden="true" :icon="person" />
          <ion-label>Drivers</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="teamsTab" href="/tabs/teams">
          <ion-icon class="custom-icon" aria-hidden="true" :icon="construct"/>
          <ion-label>Teams</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<style scoped>

.custom-tab-bar {
  --background: #ff2800;
  --color: white;
  --color-selected: #b8b8b8;
}
</style>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { construct, person, book } from 'ionicons/icons';
</script>
