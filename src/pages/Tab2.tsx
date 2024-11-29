import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonRouterLink routerLink="/tab1">
        <img src="src/assets/ElectroScoot.png" alt=""  style={{ width: '350px', height: '100px', margin: '0 auto', display: 'block' }}/>
        </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
