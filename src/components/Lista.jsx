import React,{ useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';
export function Lista(props) {
  const [listaComponentes,setlistaComponentes] = useState([]);
  const valorTextInput=useRef();
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaComponentes.push(
        <ComponenteListaClase
          done={props.elementos[i].done}
          texto={props.elementos[i].texto}
          prioridad={props.elementos[i].prioridad}
        />
      );
    }
  }
  const añadir=function anadir(){
    const newLista=listaComponentes.concat( <ComponenteListaClase
      done={false}
      texto={valorTextInput.current.value}
    />
    );
    setlistaComponentes(newLista);
  };
 

  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        {listaComponentes}
        <li>
          <input ref={valorTextInput} type="text" placeHolder="Introduce una tarea"/>
          <br/>
          <button  onClick={añadir}>Botón</button>
        </li> 
      </ul>
    </div>
  );
  
}