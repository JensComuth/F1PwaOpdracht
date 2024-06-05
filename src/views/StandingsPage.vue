<template>
  <ion-page>
    <AppHeader />
    <ion-content :fullscreen="true">
      <!-- Tab-like interface -->
      <div class="tabs">
        <div class="tab" :class="{ active: showDrivers }" @click="showDrivers = true">Drivers Standings</div>
        <div class="tab" :class="{ active: !showDrivers }" @click="showDrivers = false">Constructors Standings</div>
      </div>

      <!-- Drivers Standings -->
        <div v-if="showDrivers" key="drivers">
          <div v-for="(driver, index) in sortedDrivers" :key="driver.name">
            <ion-item>
              <div class="driver-info">
                <ion-label class="position">{{ index + 1 }}</ion-label>
                <img :src="driver.img" :alt="driver.name" />
                <ion-label>{{ driver.name }}</ion-label>
              </div>
              <ion-label slot="end">{{ driver.currentPoints }}</ion-label>
            </ion-item>
          </div>
        </div>

      <!-- Constructors Standings -->
        <div v-if="!showDrivers" key="constructors">
          <div v-for="(team, index) in sortedTeams" :key="team.name">
            <ion-item>
              <div class="driver-info">
                <ion-label class="position">{{ index + 1 }}</ion-label>
                <img :src="team.teamLogo" :alt="team.team" />
                <ion-label>{{ team.team }}</ion-label>
              </div>
              <ion-label slot="end">{{ team.totalPoints }}</ion-label>
            </ion-item>
          </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import teamsData from '@/data/teams.json'; // Import teams.json
import AppHeader from './AppHeader.vue'

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      teams: [], // Initialize teams
      showDrivers: true // Show drivers standings by default
    };
  },
  created() {
    this.teams = teamsData; // Assign teamsData to teams
  },
  computed: {
    sortedDrivers() {
      // Flatten the array of teams into an array of drivers
      const drivers = this.teams.flatMap(team => team.drivers);

      // Sort drivers by current points in descending order
      return drivers.sort((a, b) => b.currentPoints - a.currentPoints);
    },
    sortedTeams() {
      // Calculate total points for each team
      const teamsWithTotalPoints = this.teams.map(team => ({
        ...team,
        totalPoints: team.drivers.reduce((total, driver) => total + driver.currentPoints, 0)
      }));

      // Sort teams by total points in descending order
      return teamsWithTotalPoints.sort((a, b) => b.totalPoints - a.totalPoints);
    }
  }
}
</script>

<style scoped>
ion-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.driver-info {
  display: flex;
  align-items: center;
}

.driver-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.position {
  width: 30px; /* Adjust this value as needed */
  text-align: right;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tab {
  cursor: pointer;
  padding: 10px;
  color: grey;
}

.tab.active {
  color: black;
}
</style>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>