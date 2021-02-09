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
import { arrowBack, ellipsisVertical, informationCircle } from "ionicons/icons";
import ExitGameAlert from "../components/ExitGameAlert";
import Popover from "../components/Popover";
import Simone from "../components/games/simone";
import GameRules from "../components/games/simone/GameRules";
import React, { useState } from "react";

type GameStatus = "playing" | "paused" | "stopped";

const Game: React.FC = () => {
  const [status, setStatus] = useState<GameStatus>("stopped");
  const [showAlert, setShowAlert] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [popoverStatus, setPopoverStatus] = useState({
    show: false,
    event: undefined,
  });

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
            <IonButtons slot="end">
              <IonButton shape="round" onClick={() => setShowRules(true)}>
                <IonIcon icon={informationCircle} />
              </IonButton>
              <IonButton
                shape="round"
                onClick={(evt: any) => {
                  evt.persist();
                  setPopoverStatus({ show: true, event: evt });
                }}
              >
                <IonIcon icon={ellipsisVertical} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <Simone
          onStart={() => setStatus("playing")}
          onStop={() => setStatus("stopped")}
        />
        <ExitGameAlert
          showAlert={showAlert}
          onDismiss={() => setShowAlert(false)}
          onConfirm={exit}
        />
      </IonContent>
      <Popover
        event={popoverStatus.event}
        isOpen={popoverStatus.show}
        onDismiss={() => setPopoverStatus({ show: false, event: undefined })}
      />
      <GameRules isOpen={showRules} onDismiss={() => setShowRules(false)} />
    </IonPage>
  );
};

export default Game;
