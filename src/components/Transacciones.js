import React, { useState, useEffect } from 'react'

export const Transacciones = () => {
    
    const url = 'http://localhost:9090/transaccion/consultar'
    const [Transacciones, setTransacciones] = useState();
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      console.log(responseJSON)
      setTransacciones(responseJSON)
    }

    useEffect(() => {
      fetchApi()
    }, [])
  return (
    <div className="App w3-container">
        <h1>Sistema de Transacciones</h1>
  
        <table className="w3-table-all w3-card-4">
          <thead>
            <tr className="w3-black">
              <td><strong>Identificador del Sistema</strong></td>
              <td><strong>Numero de Referencia</strong></td>
              <td><strong>Total de la Compra</strong></td>
              <td><strong>Direccion de la Compra</strong></td>
              <td><strong>Estado</strong></td>
              <td><strong>Fecha</strong></td>
            </tr>
          </thead>
  
          <tbody>
            {!Transacciones ? 'cargando' :
              Transacciones.map((transaccion, index) => {
                return <tr className="w3-hover-green" key={index}>
                  <td>{transaccion.identificador_sistema}</td>
                  <td>{transaccion.numero_referencia}</td>
                  <td>{transaccion.total_compra}</td>
                  <td>{transaccion.direccion_compra}</td>
                  <td>{transaccion.estado}</td>
                  <td>{transaccion.date}</td>
                  </tr>
              })}
          </tbody>
        </table>
      </div>
  )
}
