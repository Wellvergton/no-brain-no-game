import { IonCard, IonCardHeader, IonCardTitle, IonImg } from "@ionic/react";
import React from "react";

interface Props {
  name: string;
  imgSrc: string;
  href: string;
}

const GameCard: React.FC<Props> = (props) => {
  return (
    <IonCard href={props.href}>
      <IonImg src={props.imgSrc} />
      <IonCardHeader>
        <IonCardTitle class="ion-text-center ion-text-capitalize">
          {props.name}
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default GameCard;
