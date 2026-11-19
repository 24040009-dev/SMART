// 1. Inicializar EmailJS con tu Public Key
emailjs.init("t22hw8TiRTk_zm9u5");

const SERVICE_ID = "service_xu2pglu";
const TEMPLATE_ID = "template_p8jxhn7";

// 2. Mapa de segmentación por Tipo de Incidencia
// Puedes usar correos distintos por área o el mismo correo institucional filtrado por asunto
const SEGMENTACION = {
    "Servicios Públicos": {
        departamento: "SIMAS / Obras Públicas",
        correo: "reporteparras@gmail.com"
    },
    "Alumbrado": {
        departamento: "Alumbrado Público",
        correo: "reporteparras@gmail.com"
    },
    "Seguridad": {
        departamento: "Seguridad Pública Municipal",
        correo: "reporteparras@gmail.com"
    },
    "Corrupción": {
        departamento: "Contraloría Municipal",
        correo: "reporteparras@gmail.com"
    },
    "Otros": {
        departamento: "Atención Ciudadana General",
        correo: "reporteparras@gmail.com"
    }
};

// 3. Generador de Captcha dinámico
let captchaActual = "";
function generarCaptcha() {
    const caracteres = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    captchaActual = Array.from({ length: 5 }, () =>
        caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    ).join("");
    document.getElementById("captcha-codigo").textContent = captchaActual;
}

// 4. Generador de Folio Único (Cumple RF-05)
function generarFolio(categoria) {
    const prefijo = categoria.substring(0, 3).toUpperCase();
    const aleatorio = Math.floor(1000 + Math.random() * 9000);
    return `SMART-${prefijo}-${aleatorio}`;
}

document.addEventListener("DOMContentLoaded", () => {
    generarCaptcha();

    const form = document.getElementById("form-denuncia");
    const btnEnviar = document.getElementById("btn-enviar");
    const cajaEstado = document.getElementById("mensaje-estado");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const captchaUsuario = document.getElementById("captcha-input").value.trim();
        if (captchaUsuario !== captchaActual) {
            mostrarMensaje("El código captcha es incorrecto. Inténtalo de nuevo.", false);
            generarCaptcha();
            return;
        }

        const categoria = document.getElementById("categoria").value;
        const ubicacion = document.getElementById("ubicacion").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const fecha = document.getElementById("fecha").value;

        const destino = SEGMENTACION[categoria] || SEGMENTACION["Otros"];
        const folio = generarFolio(categoria);

        const parametrosCorreo = {
            folio: folio,
            categoria: categoria,
            departamento: destino.departamento,
            correo_destino: destino.correo,
            ubicacion: ubicacion,
            descripcion: descripcion,
            fecha: fecha
        };

        btnEnviar.disabled = true;
        btnEnviar.textContent = "ENVIANDO REPORTE...";

        try {
            if (typeof emailjs === "undefined") {
                throw new Error("No se cargó la librería de EmailJS. Revisa tu conexión o desactiva bloqueadores de anuncios.");
            }
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, parametrosCorreo);
            mostrarMensaje(
                `Reporte enviado y canalizado a ${destino.departamento}. Guarda tu folio de seguimiento: ${folio}`,
                true
            );
            form.reset();
            generarCaptcha();
        } catch (error) {
            const motivo = error?.text || error?.message || JSON.stringify(error);
            mostrarMensaje(`Motivo real del fallo: ${motivo}`, false);
        }
         finally {
            btnEnviar.disabled = false;
            btnEnviar.textContent = "ENVIAR DENUNCIA ANÓNIMA";
        }
    });

    function mostrarMensaje(texto, exito) {
        cajaEstado.style.display = "block";
        cajaEstado.style.backgroundColor = exito ? "#d4edda" : "#f8d7da";
        cajaEstado.style.color = exito ? "#155724" : "#721c24";
        cajaEstado.style.border = exito ? "1px solid #c3e6cb" : "1px solid #f5c6cb";
        cajaEstado.textContent = texto;
    }
});