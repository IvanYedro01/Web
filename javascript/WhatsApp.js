function abrirWhatsApp() {
    var mensaje = "Hola, estoy interesado en tus productos. ¿Puedes ayudarme?";
    var numeroTelefono = "1153242777"; 

    // Crear el enlace de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + numeroTelefono + "?text=" + encodeURIComponent(mensaje);

    // Abrir enlace en una nueva ventana
    window.open(enlaceWhatsApp, "_blank");
  }

