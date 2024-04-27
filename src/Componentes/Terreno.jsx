import React, { useState } from "react";

function Terreno({ opcion }) {
  const [operacion, setOperacion] = useState(0);
  const [error, setError] = useState("");
  const [anchoValue, setAnchoValue] = useState("");
  const [largoValue, setLargoValue] = useState("");

  const handleChange = (e) => {
    const panelSeleccionado = parseInt(e.target.value); // Convertir a número
    const ancho = parseFloat(anchoValue);
    const largo = parseFloat(largoValue);

    if (panelSeleccionado === 2) {
      if (largo >= 2 || ancho >= 2) {
        setOperacion((largo * ancho) / panelSeleccionado);
        setError("");
      } else {
        setError(
          "El largo o el ancho de tu techo deben ser mayor o igual a 2m"
        );
        setOperacion(0);
      }
    } else if (panelSeleccionado === 4) {
      if (largo >= 2 && ancho >= 2) {
        setOperacion((largo * ancho) / panelSeleccionado);
        setError("");
      } else {
        setError(
          "El largo y el ancho de tu techo deben ser mayor o igual a 2m"
        );
        setOperacion(0);
      }
    }
  };

  const handleReiniciar = () => {
    setOperacion(0);
    setError("");
    setAnchoValue("");
    setLargoValue("");
  };

  return (
    <div>
      <h1>Ingresa las medidas de tu techo</h1>
      <div>
        <label htmlFor="ancho">Ancho (m2)</label>
        <input
          id="ancho"
          name="ancho"
          type="number"
          min="1"
          value={anchoValue}
          onChange={(e) => {
            setAnchoValue(e.target.value);
            handleChange({ target: { value: opcion } });
          }}
        />
      </div>
      <div>
        <label htmlFor="largo">Largo (m2)</label>
        <input
          id="largo"
          name="largo"
          type="number"
          min="1"
          value={largoValue}
          onChange={(e) => {
            setLargoValue(e.target.value);
            handleChange({ target: { value: opcion } });
          }}
        />
      </div>
      <h1>Selecciona el tipo de panel solar</h1>
      <select className="seleccion" value={opcion} onChange={handleChange}>
        <option value="">Selecciona una opción</option>
        <option value={2}>2m x 1m</option>
        <option value={4}>2m x 2m</option>
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleReiniciar}>Reiniciar</button>
      <h2>Resultado de la operación: {Math.floor(operacion)}</h2>
    </div>
  );
}

export default Terreno;
