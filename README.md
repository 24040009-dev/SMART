# SMART
🛡️ S.M.A.R.T. — Sistema de Gestión de Reportes y Denuncia Ciudadana

Aplicación web responsiva diseñada para centralizar, canalizar y dar seguimiento a los reportes de fallas en servicios públicos, infraestructura urbana y denuncias anónimas en Parras de la Fuente, Coahuila.

📋 Descripción del Problema y Objetivo

Actualmente, los reportes ciudadanos sobre infraestructura urbana (fugas de agua, luminarias fundidas, baches, alcantarillas o seguridad) suelen dispersarse en llamadas o redes sociales, provocando pérdida de información y falta de seguimiento.

S.M.A.R.T. ofrece un portal web accesible desde dispositivos móviles y computadoras donde cualquier ciudadano puede registrar una incidencia de forma confidencial, obtener un folio único de seguimiento y activar una notificación automática segmentada hacia el área municipal correspondiente.

✨ Funcionalidades Principales

Formulario Ciudadano Anónimo: Captura categoría, ubicación de referencia, descripción detallada y fecha del incidente sin comprometer la identidad del ciudadano.

Generación Automática de Folios: Asigna un identificador único por reporte (ej. SMART-SER-5552) para su trazabilidad.

Segmentación Inteligente por Correo: Clasifica y enruta automáticamente cada reporte según el tipo de incidencia hacia el departamento operativo encargado mediante plantillas HTML institucionales.

Validación Captcha Dinámica: Filtro de seguridad en el cliente para evitar envíos automatizados o spam.

Diseño Responsivo: Adaptado tanto para pantallas de escritorio como para teléfonos inteligentes.

🗂️ Estructura del Proyecto

smart-parras/
├── index.html      # Estructura principal del portal y formulario de reporte
├── styles.css      # Estilos institucionales y reglas responsivas (@media)
├── app.js          # Lógica de validación, generación de folios, segmentación y EmailJS
├── logo.png        # Identidad gráfica municipal
└── README.md       # Documentación técnica del repositorio


🔀 Matriz de Segmentación de Reportes

Al enviarse un formulario, app.js asigna el departamento responsable y etiqueta el asunto del correo para facilitar su filtrado automático:

Tipo de Incidencia

Área Operativa Asignada

Prefijo en Asunto

Servicios Públicos

SIMAS / Obras Públicas

[Servicios Públicos]

Alumbrado

Alumbrado Público

[Alumbrado]

Seguridad

Seguridad Pública Municipal

[Seguridad]

Corrupción

Contraloría Municipal

[Corrupción]

Otros

Atención Ciudadana General

[Otros]

🚀 Instalación y Ejecución Local

Importante: Por políticas de seguridad de los navegadores y de EmailJS, el proyecto debe ejecutarse mediante un servidor local (http://localhost) o desplegado en GitHub Pages (https://), evitando abrir index.html directamente con file://.

Clonar el repositorio:

git clone https://github.com/24040009-dev/SMART.git

cd Smart



Levantar servidor local:

Con Python 3 (macOS / Linux / Windows):

python3 -m http.server 5500


O utilizando la extensión Live Server en Visual Studio Code.

Abrir en el navegador:
Ingresa a http://localhost:5500.

🗓️ Hoja de Ruta y Plan de Implementación

El desarrollo del sistema está organizado en tres módulos prioritarios:

[x] Módulo 1 — Notificaciones Automatizadas: Envío de reportes por correo electrónico con plantilla HTML y segmentación por área (EmailJS).

[ ] Módulo 2 — Persistencia en Base de Datos: Almacenamiento histórico de reportes, folios y estatus inicial (Firebase Firestore / Supabase).

[ ] Módulo 3 — Geolocalización Interactiva: Integración de mapa centrado en Parras de la Fuente (Leaflet + OpenStreetMap) para capturar coordenadas exactas (latitud y longitud).

👥 Equipo de Desarrollo

Proyecto académico desarrollado en la Universidad Tecnológica de Parras (UTP) — Formulación de Proyectos de Tecnología:

Juan Armando — Líder de Proyecto y Documentación

Ángel Humberto — Desarrollador Backend, Base de Datos y geolocalización 

Jesús Ángel — Desarrollador Frontend e Integración de Correo

📄 Licencia

Este proyecto fue desarrollado con fines académicos y de mejora en la gestión ciudadana para el municipio de Parras de la Fuente, Coahuila.
