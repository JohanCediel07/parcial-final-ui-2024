import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
        <IonRouterLink routerLink="/tab1">
        <img src="src/assets/ElectroScoot.png" alt="" className="logo"  style={{ width: '350px', height: '100px', margin: '0 auto', display: 'block' }}/>
        </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="banner-container">
          <img src="src/assets/banner_principal.png" alt="Banner" className="banner-image" />

      <div className="overlay-images">
          <div className="overlay-item">
          <img src="src/assets/moto_1.png" alt="Moto eléctrica" className="overlay-image" />
          <p className="overlay-text">Moto eléctrica</p>
        </div>
        <div className="overlay-item">
          <img src="src/assets/scooter_1.png" alt="Scooter eléctrico" className="overlay-image" />
          <p className="overlay-text">Scooter eléctrico</p>
        </div>
       <div className="overlay-item">
          <img src="src/assets/vehiculo_1.jpg" alt="Carro eléctrico" className="overlay-image" />
          <p className="overlay-text">Carro eléctrico</p>
        </div>
        </div>
        <p className="banner-paragraph">
        Tenemos las mejores opciones de alquiler para ti, ¡Anímate!
        </p>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
