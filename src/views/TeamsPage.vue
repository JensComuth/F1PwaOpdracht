
<!-- PROBLEEM ALS JE VIA MENU NAAR TEAMS GAAT OF VAN TEAMS NAAR ERGENS ANDERS EN DAN WEER NAAR TEAMS IS ER EEN ERROR
     WAARDOOR NIKS LAADT -->
<template>
    <ion-page>
      <AppHeader />
      <ion-content :fullscreen="true">
        <div v-for="team in teams" :key="team.team" class="team">
          <ion-card>
            <ion-card-header>
              <ion-card-title class="team-title">
                {{ team.team }}
                <img :src="team.teamLogo" class="teamLogoImage">
              </ion-card-title>
            </ion-card-header>
            <ion-card-content class="team-content">
              <div v-for="driver in team.drivers" :key="driver.name" class="driver">
                <p>{{ driver.name }}</p>
                <img :src="driver.img" class="driverImage">
              </div>
              <img :src="team.teamCar" class="teamCarImage">
            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import teams from '@/data/teams.json';
  import AppHeader from './AppHeader.vue'
  
  export default {
    components: {
      AppHeader
    },
    data() {
      return {
        teams
      };
    }
  }
  </script>
  
  <style scoped>

    .team-title {
      display: flex;
      justify-content: space-between;
    }
  
    .teamLogoImage {
      width: 10%;
      height: auto;
    }
  
    .team-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  
    .driver {
      flex: 1 0;
      height: 50px;
      border-right: 1px solid #ababab;
      border-bottom: 1px solid #ababab;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      align-items: center;
      margin: 5px;
    }
  
    .driverImage {
      width: 30%;
      height: auto;
    }
  
    .teamCarImage {
      width: 100%;
      height: auto;
    }
  </style>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>