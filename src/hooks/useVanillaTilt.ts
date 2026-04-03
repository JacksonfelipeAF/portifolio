import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VanillaTilt: any;
  }
}

export const useVanillaTilt = (options: any = {}) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;

    // Aguardar o carregamento do Vanilla Tilt
    const initTilt = () => {
      if (tiltElement && typeof window !== "undefined" && window.VanillaTilt) {
        try {
          // Destruir instância anterior se existir
          if ((tiltElement as any).vanillaTilt) {
            (tiltElement as any).vanillaTilt.destroy();
          }

          const vanillaTilt = new window.VanillaTilt(tiltElement, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.05,
            ...options,
          });

          // Guardar referência para destruição posterior
          (tiltElement as any).vanillaTilt = vanillaTilt;
        } catch (error) {
          console.warn("Vanilla Tilt initialization failed:", error);
        }
      }
    };

    // Tentar inicializar imediatamente ou aguardar o script carregar
    if (window.VanillaTilt) {
      initTilt();
    } else {
      // Aguardar o script do Vanilla Tilt carregar
      const checkInterval = setInterval(() => {
        if (window.VanillaTilt) {
          clearInterval(checkInterval);
          initTilt();
        }
      }, 100);

      // Limpar interval após 5 segundos
      setTimeout(() => clearInterval(checkInterval), 5000);
    }

    return () => {
      if (tiltElement && (tiltElement as any).vanillaTilt) {
        (tiltElement as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return tiltRef;
};
