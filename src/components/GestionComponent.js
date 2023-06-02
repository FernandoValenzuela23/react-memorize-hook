import React, { useCallback, useEffect, useRef, useState } from 'react'
import { EmpleadosComponent } from './EmpleadosComponent'

export const GestionComponent = () => {
    const[nombreGestor, setNombreGestor] = useState('');
    const[page, setPage] = useState(1);
    const nombreInput = useRef();

    const asignarGestor = e => {
        setNombreGestor(nombreInput.current.value);
    }

    const requirePage = (p) => {
        setPage(p);
    }

    useEffect(()=>{
        console.log('Gestion component renderizado')

    }, [nombreGestor, page])

    // Ejemplo para useCallback, cuando renderice el componente que guarde esta funcion 
    // y solo la ejecute de nuevo cuando cambia page - esto debido a que se la paso como parametro al componente hijo
    const mostrarMensaje = useCallback(() => {
        console.log('hola')

    }, [page])

    

  return (
    <div>
        Ingrese el nombre del Gestor:
        <input type='text' ref={nombreInput} placeholder='Nombre Gestor' onChange={asignarGestor} />
        
        <br />
        <br />
        <h1>Nombre gestor: {nombreGestor}</h1>

        <h2>Listado de empleados</h2>
        <EmpleadosComponent page={page} mensaje={mostrarMensaje} />
        <button onClick={e => requirePage(1)}>1</button> <button onClick={e => requirePage(2)}>2</button>
    </div>
  )
}
