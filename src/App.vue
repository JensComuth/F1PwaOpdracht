<template>
  <ion-app>
    <AppHeader />
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import AppHeader from './views/AppHeader.vue';
</script>