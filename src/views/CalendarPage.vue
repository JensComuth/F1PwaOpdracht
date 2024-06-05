<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Calendar</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card v-for="event in calendar.calendar" :key="event.id">
        <ion-card-header>
          <ion-card-subtitle>{{ event.track }}</ion-card-subtitle>
          <ion-card-title>
            <img :src="event.flag" alt="Country flag" class="flag" />
            {{ event.race }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>{{ event.date }} {{ event.time }}</p>
          
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.flag {
  width: 10%;
  height: 25px;
  object-fit: cover;
  margin-right: 10px;
}
</style>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import calendar from '@/data/calendar.json';
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  },
  data() {
    return {
      calendar
    };
  }
}
</script>