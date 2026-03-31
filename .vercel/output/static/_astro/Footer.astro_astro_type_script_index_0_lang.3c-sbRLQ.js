const n={terms:{title:"Términos y Condiciones",content:`
        <p>Bienvenido/a a <strong>Ingeniería Extrema Media</strong>. Al utilizar nuestra plataforma, usted acepta los siguientes Términos y Condiciones. Le recomendamos leerlos cuidadosamente para comprender el proceso de adquisición de nuestros activos digitales.</p>
        
        <h3>1. NATURALEZA DEL SERVICIO</h3>
        <p>Este sitio web funciona como una <strong>vitrina tecnológica avanzada</strong> para la presentación de Mega Packs y Colecciones AEC. <strong>Importante:</strong> La plataforma sirve para la exploración de catálogos y demostraciones técnicas. La gestión de acceso y entrega final se realiza a través de WhatsApp y Google Drive tras completar el proceso de solicitud.</p>

        <h3>2. PROCESO DE ADQUISICIÓN Y ENTREGA</h3>
        <p>El flujo inicia cuando el usuario selecciona un producto y es redirigido a nuestro checkout informativo. Al confirmar el interés, se inicia una comunicación directa con nuestro equipo mediante WhatsApp. Una vez validado el comprobante de pago y proporcionado un correo electrónico de Gmail, se otorgará acceso a una carpeta privada y exclusiva en Google Drive.</p>

        <h3>3. LICENCIA DE USO Y PROPIEDAD</h3>
        <p>El material entregado está destinado a uso profesional, educativo o personal por parte del comprador. La compra otorga una licencia de uso; la reventa o distribución masiva no autorizada del material está prohibida y contraviene estos términos.</p>

        <h3>4. LIMITACIÓN DE RESPONSABILIDAD</h3>
        <p>Como facilitadores de contenido técnico organizado, no asumimos responsabilidad por el uso derivado del material, ni por la disponibilidad técnica de plataformas externas (Google Drive) fuera de nuestro control directo, aunque garantizamos asistencia continua ante cualquier incidencia.</p>

        <h3>5. SOPORTE TÉCNICO VIP 24/7</h3>
        <p>Contamos con un equipo de ingenieros y especialistas disponibles para acompañar al usuario en el proceso de compra, resolver dudas técnicas o gestionar problemas de acceso de manera personalizada.</p>

        <h3>6. DERECHO DE RETRACTO</h3>
        <p>Debido a la naturaleza digital de descarga inmediata de los productos, no se realizan reembolsos una vez que el acceso a la carpeta de Drive ha sido concedido y activado para el correo del usuario.</p>
      `},privacy:{title:"Políticas de Privacidad",content:`
        <p>En <strong>Ingeniería Extrema Media</strong>, la privacidad de nuestros clientes es una prioridad técnica y ética.</p>

        <h3>1. RECOPILACIÓN MÍNIMA Y VOLUNTARIA</h3>
        <p>Recolectamos únicamente los datos necesarios para garantizar su acceso: <strong>Nombre, Correo electrónico (Gmail) y número de WhatsApp</strong>. Estos datos son proporcionados voluntariamente por usted al iniciar la solicitud de compra.</p>

        <h3>2. USO EXCLUSIVO DE LA INFORMACIÓN</h3>
        <p>Sus datos se utilizan únicamente para:<br>
          * Gestionar el acceso a los Mega Packs.<br>
          * Brindar soporte técnico personalizado.<br>
          * Asegurar la entrega eficiente del material.</p>
        <p>No realizamos prácticas de spam ni vendemos sus datos a terceros bajo ninguna circunstancia.</p>

        <h3>3. SEGURIDAD DE DATOS</h3>
        <p>Implementamos medidas de seguridad para proteger su información contra accesos no autorizados. La comunicación a través de WhatsApp cuenta con cifrado de extremo a extremo, y el almacenamiento se rige por la infraestructura de seguridad de Google.</p>

        <h3>4. COOKIES</h3>
        <p>Utilizamos herramientas de análisis (como Google Analytics) únicamente para comprender patrones de uso y mejorar la experiencia de navegación en nuestro catálogo. No se recolecta información personal identificable por este medio.</p>
      `},faq:{title:"Preguntas Frecuentes",content:`
        <h3>¿Quiénes están detrás de Ingeniería Extrema Media?</h3>
        <p>Somos un equipo de ingenieros y especialistas en metodología BIM y flujos de trabajo AEC. Nuestra misión es centralizar y optimizar los mejores recursos del mercado para que los profesionales no pierdan tiempo buscando, sino creando.</p>

        <h3>¿Por qué el proceso de pago es por WhatsApp?</h3>
        <p>Lo hacemos así para brindarte un <strong>trato 100% humano</strong>. Al contactarnos, un asesor real te guiará personalmente en el proceso, resolverá tus dudas técnicas al instante y te asegurará que recibas el acceso correcto sin errores de sistema.</p>

        <h3>¿Qué métodos de pago aceptan?</h3>
        <p>Aceptamos los principales métodos de transferencia: <strong>Bancolombia, Daviplanta, Nequi y Llave</strong>. El asesor de WhatsApp te dará los datos exactos para realizar la transacción de forma segura y rápida.</p>

        <h3>¿Ofrecen soporte si tengo problemas técnicos?</h3>
        <p>Nuestro soporte se especializa en el contenido de los packs, pero siempre estamos dispuestos a orientarte en configuraciones básicas de software relacionadas con el uso de nuestros recursos para que tu flujo de trabajo no se detenga.</p>

        <h3>¿Tienen algún tipo de comunidad o grupo de ayuda?</h3>
        <p>Sí. Al adquirir nuestros Mega Packs, pasas a formar parte de nuestra base de usuarios VIP, donde compartimos actualizaciones, consejos y noticias relevantes del sector AEC de forma periódica.</p>

        <h3>¿Qué pasa si mi link de Drive deja de funcionar?</h3>
        <p>Eso no sucederá bajo condiciones normales, pero si Google hiciera algún cambio técnico, nosotros nos encargamos de migrar todo el contenido y enviarte un <strong>nuevo link de acceso</strong> sin costo alguno. Tu inversión está protegida para siempre.</p>
      `}};function r(){const s=document.getElementById("legalModal"),i=document.getElementById("closeLegal"),t=s?.querySelector(".legal-overlay"),c=document.getElementById("legalTitle"),d=document.getElementById("legalBody"),l=document.querySelectorAll("[data-legal]"),o=(e,a="")=>{e&&a&&n[a]?(c.textContent=n[a].title,d.innerHTML=n[a].content,s.classList.add("is-active"),document.body.style.overflow="hidden"):(s.classList.remove("is-active"),document.body.style.overflow="")};l.forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-legal");o(!0,a)})}),i?.addEventListener("click",()=>o(!1)),t?.addEventListener("click",()=>o(!1)),window.addEventListener("keydown",e=>{e.key==="Escape"&&o(!1)})}r();document.addEventListener("astro:after-swap",r);
