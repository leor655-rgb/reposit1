import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationTracker = () => {
  // O useLocation só funciona porque o App.jsx já colocou o Router em volta
  const location = useLocation();

  useEffect(() => {
    console.log("📍 Navegou para:", location.pathname);
  }, [location]);

  return null; // Este componente não desenha nada na tela, só monitora
};

export default NavigationTracker;