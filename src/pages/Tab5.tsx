import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonList, IonItem, IonInput, IonLabel, IonButton, IonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab5.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
         <IonToolbar className="custom-toolbar">
        <IonRouterLink routerLink="/tab1">
        <img src="src/assets/ElectroScoot.png" alt=""   style={{ width: '350px', height: '100px', margin: '0 auto', display: 'block' }}/>
        </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="payment-container">
          <div className="summary-column">
            <h2>Resumen del Pedido</h2>
            <p>Total: <span>$230.000 COP</span></p>
          </div>

          <div className="form-column">
            <h2>Información de Pago</h2>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Correo Electrónico</IonLabel>
                <IonInput type="email" placeholder="usuario@correo.com" />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Número de Tarjeta</IonLabel>
                <IonInput type="number" placeholder="1234 5678 9123 4567" />
              </IonItem>
              <div className="card-info-row">
                <IonItem>
                  <IonLabel position="floating">Fecha de Caducidad</IonLabel>
                  <IonInput type="text" placeholder="MM/AA" />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Código de Seguridad</IonLabel>
                  <IonInput type="number" placeholder="123" />
                </IonItem>
              </div>

              <IonItem>
                <IonLabel position="floating">Nombre en la Tarjeta</IonLabel>
                <IonInput type="text" placeholder="Juan Pérez" />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Dirección de Facturación</IonLabel>
                <IonInput type="text" placeholder="Cra 10 #20-30, Bogotá" />
              </IonItem>
            </IonList>
            <IonButton id="present-alert" className="pay-button">Realizar Pago</IonButton>
            <IonRouterLink routerLink="/tab1">
              <IonAlert
              trigger="present-alert"
              header="¡Su pago esta siendo procesado!"
              subHeader="Se enviará un comprobante para verificar la solicitud"
              message="Al correo electrónico llegaran las indicaciones y respectiva ubicación del transporte seleccionado"
              buttons={['Aceptar']}
            ></IonAlert>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
