import { IonIcon, IonItem, IonList, IonPopover } from "@ionic/react";
import { addCircle, logIn, logOut } from "ionicons/icons";
import React from "react";

interface Props {
  event: any;
  isOpen: boolean;
  onDismiss: Function;
}

const Popover: React.FC<Props> = (props) => {
  return (
    <IonPopover
      event={props.event}
      isOpen={props.isOpen}
      onDidDismiss={() => {
        props.onDismiss();
      }}
    >
      <IonList>
        {true && (
          <IonItem button>
            Play online <IonIcon icon={addCircle} slot="end" />
          </IonItem>
        )}
        {true ? (
          <IonItem button>
            Sign out <IonIcon icon={logOut} slot="end" />
          </IonItem>
        ) : (
          <IonItem button>
            Sign in <IonIcon icon={logIn} slot="end" />
          </IonItem>
        )}
        <IonItem button onClick={() => props.onDismiss()}>
          Cancel
        </IonItem>
      </IonList>
    </IonPopover>
  );
};

export default Popover;
