<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Know your Anime</ion-title>
      </ion-toolbar>
    </ion-header>
    <br />
    <ion-content>
      <ion-img
        src="https://cdn.vox-cdn.com/thumbor/-d-0fvzzh3aeMuZcIvJ8JHHQMFU=/0x0:1600x900/920x613/filters:focal(672x322:928x578):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png"
      ></ion-img>
      <ion-item>
        <ion-label position="stacked">Type Anime Name:</ion-label><br />
        <ion-input
          v-model="input"
          placeholder="f.e. Naruto"
          clearInput="true"
          inputmode="numeric"
          maxlength="13"
          required="true"
        ></ion-input>
      </ion-item>
      <ion-button color="danger" expand="block" @click="findYourAnime">
        <ion-icon :icon="search"></ion-icon> Click here!!
      </ion-button>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle
            >Know your anime with your deep <ion-icon :icon="heart"></ion-icon
          ></ion-card-subtitle>
          <ion-card-title>Entered Anime : {{ input }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ output }}
        </ion-card-content>
      </ion-card>
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
  IonItem,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonImg,
  alertController,
} from "@ionic/vue";
import { heart, search } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    IonItem,
    IonButton,
    IonIcon,
    IonLabel,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonImg,
  },
  data() {
    return {
      input: "",
      output: "Result will be shown here",
    };
  },
  methods: {
    async presentAlert() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Alert",
        message: "Please provide a valid character name",
        buttons: ["OK"],
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
    findYourAnime: function (character) {
      character = this.input;
      const mapOfCharacters = new Map([
        ["Naruto", `Hokage`],
        ["Sasuke", `Konoha's Strongest Ninja`],
        ["Isshiki", `Otsutsuki being`],
        ["Boruto", `Naruto and Hinata's son`],
      ]);
      this.output = mapOfCharacters.get(character);
      if (this.output == undefined) {
        // this.presentAlert;
        alert(`Please provide a valid character name`);
      }
      // console.log(mapOfCharacters.get(character) ?? `Please provide a valid character name`);
      return this.output;
    },
  },
  setup() {
    return {
      heart,
      search,
    };
  },
};
</script>

<style scoped>
ion-title {
  display: flex;
  width: 100%;
  height: 15vh;
  border: 1px solid;
  text-align: center;
  background-color: purple;
  font-size: 35px;
  color: white;
  font-family: cursive;
  border-radius: 1rem;
}
ion-button {
  width: 70%;
  height: 8vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  text-align: center;
  margin-left: 15vw;
  font-size: 25px;
  text-transform: capitalize;
}
ion-item {
  display: flex;
  border-radius: 10px;
  border: 1px solid;
  background-color: blueviolet;
  color: blanchedalmond;
  font-size: 24px;
  align-items: center;
}
ion-img {
  object-fit: contain;
  margin: 5px;
}
</style>
