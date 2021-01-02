import { IonCard, IonCardHeader, IonCardTitle, IonImg } from "@ionic/react";
import React from "react";

const GameCard: React.FC<{ name: string; imgSrc: string }> = (props) => {
  return (
    <IonCard href="#">
      <IonImg src={props.imgSrc} />
      <IonCardHeader>
        <IonCardTitle class="ion-text-center">{props.name}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default GameCard;
