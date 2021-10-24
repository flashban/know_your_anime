<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Know your Anime</ion-title>
      </ion-toolbar>
    </ion-header>

    <br/>
    <ion-content>
      <ion-toolbar>
        <h2>Here the pic of your searched anime comes</h2>
      </ion-toolbar>
      <br/>
      <ion-list>
        <ion-item>Naruto</ion-item>
        <ion-item>sasuke</ion-item>
        <ion-item>Tsunade</ion-item>
      </ion-list>
      <ion-button color="tertiary" expand="block">
        <ion-icon :icon="heart"></ion-icon>
        Show!!
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonList,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { heart } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonButton,
    IonIcon,
  },
  setup() {
    return {
      heart,
    };
  },
  method:{
      
  }
};
</script>

<style scoped>
ion-title {
  display: flex;
  width: 100%;
  height: 10vh;
  border: 1px solid;
  text-align: center;
  background-color: white;
  color: black;
}
ion-button {
  width: 70%;
  height: 8vh;
  margin-top: 10vh;
  text-align: center;
  margin-left: 15vw;
  font-size: 25px;
  text-transform: capitalize;
}
</style>
