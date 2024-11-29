import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonRouterLink, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
        <IonRouterLink routerLink="/tab1">
        <img src="src/assets/ElectroScoot.png" alt=""  style={{ width: '350px', height: '100px', margin: '0 auto', display: 'block' }}/>
        </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="image-grid">
          <div className="image-item">
          <IonRouterLink routerLink="/tab5">
            <img src="src/assets/moto_1.png" alt="Imagen 1" className="image" />
            <IonButton className="rent-button">Alquilar</IonButton>
            </IonRouterLink>
          </div>
          <div className="image-item">
          <IonRouterLink routerLink="/tab5">
            <img src="src/assets/moto_2.jpg" alt="Imagen 2" className="image" />
            <IonButton className="rent-button">Alquilar</IonButton>
            </IonRouterLink>
          </div>
          <div className="image-item">
          <IonRouterLink routerLink="/tab5">
            <img src="src/assets/moto_3.jpg" alt="Imagen 3" className="image" />
            <IonButton className="rent-button">Alquilar</IonButton>
            </IonRouterLink>
          </div>

          <div className="image-item">
          <IonRouterLink routerLink="/tab5">
            <img src="src/assets/moto_4.jpg" alt="Imagen 4" className="image" />
            <IonButton className="rent-button">Alquilar</IonButton>
            </IonRouterLink>
          </div>
          <div className="image-item">
          <IonRouterLink routerLink="/tab5">
            <img src="src/assets/moto_5.jpg" alt="Imagen 5" className="image" />
            <IonButton className="rent-button">Alquilar</IonButton>
            </IonRouterLink>
          </div>
          <div className="image-item">
          <IonRouterLink routerLink="/tab5">
            <img src="src/assets/moto_6.jpg" alt="Imagen 6" className="image" />
            <IonButton className="rent-button">Alquilar</IonButton>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
