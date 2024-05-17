<template>
    <ion-header>
      <ion-toolbar style="--background: #ff2800;">
        <ion-buttons slot="start">
          <ion-button @click="openMenu">
            <ion-icon class="hamburger-icon" :icon="reorderThreeOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title><img src="/Images/Logo/f1_logo.png" width="35%"></ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-menu side="start" menuId="first" contentId="main-content">
      <ion-header>
        <ion-toolbar style="--background: #ff2800;">
          <ion-title><img src="/Images/Logo/f1_logo.png" width="75%"></ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeMenu">
              <ion-icon class="close-icon" :icon="closeOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item @click="navigateTo('driver')">
            <ion-icon slot="start" :icon="personOutline"></ion-icon>
            Drivers
          </ion-item>
          <ion-item @click="navigateTo('calendar')">
            <ion-icon slot="start" :icon="calendarNumberOutline"></ion-icon>
            Calendar
          </ion-item>
          <ion-item @click="navigateTo('standings')">
            <ion-icon slot="start" :icon="barChartOutline"></ion-icon>
            Standings
          </ion-item>
          <ion-item @click="navigateTo('news')">
            <ion-icon slot="start" :icon="bookOutline"></ion-icon>
            News
          </ion-item>
          <ion-item @click="navigateTo('teams')">
            <ion-icon slot="start" :icon="constructOutline"></ion-icon>
            Teams
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
  </template>
  
  <script>
  import { IonButton, IonIcon, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';
  import { reorderThreeOutline, closeOutline, personOutline, calendarNumberOutline, barChartOutline, bookOutline, constructOutline } from 'ionicons/icons';
  import { menuController } from '@ionic/vue';
  
  export default {
    name: 'AppHeader',
    components: {
      IonButton,
      IonIcon,
      IonMenu,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem
    },
    setup() {
      return {
        reorderThreeOutline,
        closeOutline,
        personOutline,
        calendarNumberOutline,
        barChartOutline,
        bookOutline,
        constructOutline
      };
    },
    methods: {
      openMenu() {
        menuController.open('first');
      },
      closeMenu() {
        menuController.close('first');
      },
      navigateTo(page) {
        this.$router.push({ path: `/tabs/${page}` });
        menuController.close('first');
      }
    }
  }
  </script>
  
  <style scoped>
    .hamburger-icon {
        font-size: 32px;
        color: white;
    }

    .close-icon {
    font-size: 36px;
    color: white;
    }
  </style>