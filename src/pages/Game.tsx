import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import ExitGameAlert from "../components/ExitGameAlert";
import Simone from "../components/games/simone";
import React, { useState } from "react";

type GameStatus = "playing" | "paused" | "stopped";

const Game: React.FC = () => {
  const [status, setStatus] = useState<GameStatus>("stopped");
  const [showAlert, setShowAlert] = useState(false);

  function exit(): void {
    if (status === "playing") setStatus("stopped");
    setShowAlert(false);
  }

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton
                href={status === "playing" ? undefined : "/home"}
                shape="round"
                onClick={() => setShowAlert(status === "playing")}
              >
                <IonIcon icon={arrowBack} />
              </IonButton>
            </IonButtons>
            <IonTitle>Game</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Simone />
        <ExitGameAlert
          showAlert={showAlert}
          onDismiss={() => setShowAlert(false)}
          onConfirm={exit}
        />
      </IonContent>
    </IonPage>
  );
};

export default Game;
