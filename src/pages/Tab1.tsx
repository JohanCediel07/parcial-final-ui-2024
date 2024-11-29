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
          <IonRouterLink routerLink="/tab2">
          <img src="src/assets/moto_1.png" alt="Moto eléctrica" className="overlay-image" />
          <p className="overlay-text">Moto eléctrica</p>
          </IonRouterLink>
        </div>
        <div className="overlay-item">
        <IonRouterLink routerLink="/tab3">
          <img src="src/assets/scooter_1.png" alt="Scooter eléctrico" className="overlay-image" />
          <p className="overlay-text">Scooter eléctrico</p>
          </IonRouterLink>
        </div>
       <div className="overlay-item">
       <IonRouterLink routerLink="/tab4">
          <img src="src/assets/vehiculo_1.jpg" alt="Carro eléctrico" className="overlay-image" />
          <p className="overlay-text">Carro eléctrico</p>
          </IonRouterLink>
        </div>
        </div>
        <p className="banner-paragraph">
        Tenemos las mejores opciones de alquiler para ti, ¡Anímate!
        </p>
      </div>
      <footer className="footer-container">
      <div className="footer-column">
        <h3 className="footer-title">Tienda Online</h3>
        <ul className="footer-list">
          <li>Sobre nosotros</li>
          <li>Política de privacidad</li>
          <li>Servicios</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Obtener ayuda</h3>
        <ul className="footer-list">
          <li>Preguntas frecuentes</li>
          <li>Ubicaciones</li>
          <li>Cancelación de pedido</li>
          <li>Estado del pedido</li>
          <li>Opciones de pago</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Síguenos</h3>
        <div className="footer-socials">
          <img src="src/assets/Logo_Facebook.png" alt="Facebook" className="social-icon" />
          <img src="src/assets/Logo_Instagram.png" alt="Instagram" className="social-icon" />
          <img src="src/assets/X.png" alt="Twitter" className="social-icon" />
        </div>
      </div>
    </footer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
