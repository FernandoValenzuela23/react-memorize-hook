import React, { useEffect, useState } from 'react'

export const EmpleadosComponent = React.memo(({page, mensaje}) => {
    const [empleados, setEmpleados] = useState([]);

    // evitar lanzar console.log directamente en el metodo para evitar las multiples renderizaciones
    // usar dentro de useEffect
    useEffect(() => {
        // sin React.memo este console log se lanzaria tambien siempre que hay un cambio en el componente padre
        // aunque no haya cambiado y no sea necesario renderizarlo de nuevo
        // De hecho sin el Memo, la consulta a la api se realizaria en cada render del componente gestion
        console.log('Empleados component renderizado y recarga de datos desde la api');
        getEmpleados();
    },[page]) // asi solo se detecta el cambio en pagina para hacer la consulta a demas de la primera vez que carga el componente
    

    const getEmpleados = async () => {
        const url = `https://reqres.in/api/users?page=${page}`;
        const req = await fetch(url);
        const { data } = await req.json();
        setEmpleados(data);
        console.log(empleados);
    }

    mensaje();


    return (
        <div>
            <ul>
                {
                    empleados.map(emp => {
                        return <li key={emp.id}>{`${emp.first_name} ${emp.last_name}`}</li>
                    })
                }
            </ul>

        </div>
    )
})
