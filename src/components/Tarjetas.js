import React, { useState, useEffect } from 'react';


export const Tarjetas = () => {
    const url = 'http://localhost:9090/tarjeta/consultar'
    const [tarjetas, setTarjetas] = useState();
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        console.log(responseJSON)
        setTarjetas(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div className="App w3-container">
            <h1>Sistema de Tarjetas</h1>

            <table className="w3-table-all w3-card-4">
                <thead>
                    <tr className="w3-black">
                        <td><strong>Id</strong></td>
                        <td><strong>Numero de Validacion</strong></td>
                        <td><strong>Hash</strong></td>
                        <td><strong>Titular</strong></td>
                        <td><strong>Cedula</strong></td>
                        <td><strong>Tipo</strong></td>
                        <td><strong>Telefono</strong></td>
                        <td><strong>Estado</strong></td>
                        <td><strong>Fecha</strong></td>
                        <td><strong>Pan</strong></td>
                    </tr>
                </thead>

                <tbody>
                    {!tarjetas ? 'cargando' :
                        tarjetas.map((tarjeta, index) => {
                            return <tr className="w3-hover-pink" key={index}>
                                <td>{tarjeta.id}</td>
                                <td>{tarjeta.numeroValidacion}</td>
                                <td>{tarjeta.hash}</td>
                                <td>{tarjeta.titular}</td>
                                <td>{tarjeta.cedula}</td>
                                <td>{tarjeta.tipo}</td>
                                <td>{tarjeta.telefono}</td>
                                <td>{tarjeta.estado}</td>
                                <td>{tarjeta.date}</td>
                                <td>{tarjeta.pan.toString().substr(0, 6) + '*******' + tarjeta.pan.toString().substr(tarjeta.pan.toString().length - 4, tarjeta.pan.toString().length)}</td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    );
}
