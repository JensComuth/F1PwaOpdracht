<template>
  <ion-page>
    <AppHeader />
    <ion-content :fullscreen="true">
      <!-- Loop door elk team -->
      <div v-for="team in teams" :key="team.team">
        <!-- Voor elk team, loop door de drivers en maak een card voor elke driver-->
        <div v-for="driver in team.drivers" :key="driver.name">
        <ion-card  @click="navigateToDriver(driver.id)">
          <!-- Afbeelding coureur en racenummer -->
          <img class="driver-image" :alt="driver.name" :src="driver.img" />
          <img class="number-image" :src="driver.driverNumberImg" />

          <!-- header met wat driver info  -->
          <ion-card-header>
            <ion-card-subtitle>{{ team.team }}</ion-card-subtitle>
            <ion-card-title style="display: flex; justify-content: space-between;">
              {{ driver.name }}
              <ion-img :src="driver.countryFlagImg" style="width: 10%;"></ion-img>
            </ion-card-title>
          </ion-card-header>

        </ion-card>
      </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import teams from '@/data/teams.json';
import AppHeader from './AppHeader.vue';
import { navigate } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default {
  components: {
    AppHeader // Importeer AppHeader om overal dezelfde header te krijgen
  },
  data() {
    return {
      teams // Laad de teams.json data in de teams variabele
    };
  },
  methods: {
    navigateToDriver(id) {
      // Navigeer naar de driver pagina
      this.$router.push(`/tabs/driverDetails/${id}`);
    }
  },
  setup() {
    const router = useRouter();
    return {router};
  }
}
</script>

<style scoped>
.driver-image {
  width: 100%;
  height: auto;
}

.number-image {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20%;
  height: auto;
}
</style>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>