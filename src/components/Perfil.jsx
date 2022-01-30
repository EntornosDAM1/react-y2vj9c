import React from 'react';
import BootstrapTabla from './BootstrapTabla';
import {Usuarios} from '../data/Usuarios';
import React from 'react';
import React from 'react';


export function Perfil() {
  
  if(localStorage.getItem('user')==Usuarios[0].Nombre && localStorage.getItem('Contraseña')==Usuarios[0].Contraseña){
    
    return (
      <BootstrapTabla/>
    );
  }else{
    return(
      <div>
        <h1>
          Error al introducir los datos
        </h1>
      </div>    
    );
  }
  
}