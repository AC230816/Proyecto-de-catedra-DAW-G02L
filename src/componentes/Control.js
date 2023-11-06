import React, { useState } from 'react';

function Control() {
    const [data, setData] = useState([
        { medicamento: '', tipo: '', dosis: '', tiempos: '', periodo: '', enfermedad: '' },
    ]);

    const handleAddRow = () => {
        const newRow = { medicamento: '', tipo: '', dosis: '', tiempos: '', periodo: '', enfermedad: '' };
        setData([...data, newRow]);
    };

    const handleDeleteRow = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    };

    const handleEditCell = (rowIndex, key, value) => {
        const updatedData = [...data];
        updatedData[rowIndex][key] = value;
        setData(updatedData);
    };

    return (
        <div className="container mt-4">
            <button
                className="btn btn-primary mb-2"
                style={{ backgroundColor: '#3eb070', borderColor: '#3eb070' }}
                onClick={handleAddRow}
            >
                Agregar Fila
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Medicamento</th>
                        <th>Tipo</th>
                        <th>Dosis</th>
                        <th>Tiempos</th>
                        <th>Periodo</th>
                        <th>Enfermedad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td onDoubleClick={(e) => handleEditCell(rowIndex, 'medicamento', prompt('Editar Medicamento', row.medicamento))}>
                                {row.medicamento}
                            </td>
                            <td onDoubleClick={(e) => handleEditCell(rowIndex, 'tipo', prompt('Editar Tipo', row.tipo))}>
                                {row.tipo}
                            </td>
                            <td onDoubleClick={(e) => handleEditCell(rowIndex, 'dosis', prompt('Editar Dosis', row.dosis))}>
                                {row.dosis}
                            </td>
                            <td onDoubleClick={(e) => handleEditCell(rowIndex, 'tiempos', prompt('Editar Tiempos', row.tiempos))}>
                                {row.tiempos}
                            </td>
                            <td onDoubleClick={(e) => handleEditCell(rowIndex, 'periodo', prompt('Editar Periodo', row.periodo))}>
                                {row.periodo}
                            </td>
                            <td onDoubleClick={(e) => handleEditCell(rowIndex, 'enfermedad', prompt('Editar Enfermedad', row.enfermedad))}>
                                {row.enfermedad}
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteRow(rowIndex)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Control;