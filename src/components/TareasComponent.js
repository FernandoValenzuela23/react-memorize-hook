import React, { useMemo, useState } from 'react'

export const TareasComponent = () => {
    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(2000);

    const agregarTarea = e => {
        e.preventDefault();

        if(e.target.descripcion === '') {
            return;
        }

        setTareas(tareas => [...tareas, e.target.descripcion.value]);


    }

    const eliminarTarea = (i) => {
        setTareas(tareas.filter((t, idx) => idx !== i));
    }

    //  contadores pasados - otra necesidad de usar useMemo
    const sumarContador = e => {
        setContador(contador + 1);
    }

    const contadoresPasados = (acumulacion) => {
        for (let index = 0; index < acumulacion; index++) {
            console.log('Ejecutando logica de acumulacion')
            
        }

        return `Contador: ${acumulacion}`;
    }

    const memoContadores = useMemo(()=>{
        contadoresPasados(contador);
    }, [contador])

    

  return (
    <div>
        <hr />
        <br/>
        <h1>Mis tareas</h1>

        <form onSubmit={agregarTarea}>
            <input type='text' name='descripcion' placeholder='Describe la tarea' />
            <button type='submit'>Agregar</button>
        </form>

        <h3>Lista de tareas</h3>
        <ul>
            {
                tareas.map((t,i) => {
                    return (
                        <li key={i}>
                            {t}
                            &nbsp;
                            <button onClick={e => eliminarTarea(i)}>X</button>
                        </li>
                    )
                })
            }

        </ul>

        <br/>
        <h3>Memo contadores</h3>
        <h4>Contador: {memoContadores}</h4>
        <button onClick={sumarContador}>Contadores</button>

    </div>
  )
}
