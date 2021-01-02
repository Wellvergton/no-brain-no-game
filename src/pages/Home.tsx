import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import GameList from "../components/GameList"
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <GameList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
