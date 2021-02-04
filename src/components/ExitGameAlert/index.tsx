import { IonAlert } from "@ionic/react";
import React from "react";

interface Props {
  showAlert: boolean;
  onDismiss(): void;
  onConfirm(): void;
}

const ExitGameAlert: React.FC<Props> = (props) => {
  return (
    <IonAlert
      isOpen={props.showAlert}
      onDidDismiss={() => props.onDismiss()}
      header={"Alert"}
      message={"The progress will be lost"}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Proceed",
          handler: () => {
            props.onConfirm();
            window.location.href = "/home";
          },
        },
      ]}
    />
  );
};

export default ExitGameAlert;
