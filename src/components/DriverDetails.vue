<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{{ driver.name }}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <img :src="driver.img" :alt="driver.name" />
        <IonCardHeader>
          <IonCardSubtitle>{{ team.team }}</IonCardSubtitle>
          <ion-card-title style="display: flex; justify-content: space-between;">
              {{ driver.name }}
              <ion-img :src="driver.countryFlagImg" style="width: 10%;"></ion-img>
            </ion-card-title>
        </IonCardHeader>
        <IonCardContent>
          <p><strong>Country:</strong> {{ driver.country }}</p>
          <p><strong>Race Number:</strong> {{ driver.driverNumber }}</p>
          <p><strong>Team:</strong> {{ team.team }}</p>
          <p><strong>Total Points:</strong> {{ driver.points }}</p>
          <p><strong>Poles</strong>{{ driver.poles }}</p>
          <p><strong>Wins:</strong> {{ driver.wins }}</p>
          <p><strong>Podiums:</strong> {{ driver.podiums }}</p>
          <p><strong>Championships:</strong> {{ driver.championships }}</p>
          <p><strong>Race Starts:</strong> {{ driver.raceStarts }}</p>
          <p><strong>Date of Birth:</strong> {{ driver.dateOfBirth }}</p>
          <p><strong>Age:</strong> {{ driver.age }}</p>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import teams from '@/data/teams.json';
import { close } from 'ionicons/icons';

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent
  },
  setup() {
    const route = useRoute();
    const driver = ref({});
    const team = ref({});
    onMounted(() => {
      const driverId = Number(route.params.id);
      for (let t of teams) {
        for (let d of t.drivers) {
          if (d.id === driverId) {
            driver.value = d;
            team.value = t;
            return;
          }
        }
      }
    });
    return { driver, team, close };
  }
};
</script>