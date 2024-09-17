import React, { useState, useEffect } from 'react';

const YearsInMarket = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1973; // Ajusta este valor al año de inicio de la empresa
  const totalYears = currentYear - startYear;
  const [years, setYears] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (years < totalYears) {
      // Incrementa el contador cada segundo hasta llegar al total de años
      timer = setTimeout(() => {
        setYears(years + 1);
      }, 1000);
    } else {
      // Cuando llega al total, espera 3 segundos y reinicia
      timer = setTimeout(() => {
        setYears(0);
      }, 3000);
    }

    // Limpia el temporizador cuando el componente se desmonte o el valor cambie
    return () => clearTimeout(timer);
  }, [years, totalYears]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold mb-2">Años en el Mercado</h3>
      <p className="text-5xl font-bold text-ser">{years}</p>
      <p className="mt-4">Ofreciendo soluciones desde {startYear}.</p>
    </div>
  );
};

export default YearsInMarket;
