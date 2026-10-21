# Turismo Seguro Cusco (MVP)
> **Regulación Dinámica de Capacidad de Carga y Desvío Peatonal Patrimonial **

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?logo=flutter)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.x-0175C2?logo=dart)](https://dart.dev)
[![Coverage](https://img.shields.io/badge/Coverage->90%-brightgreen)](test/)
[![Platform](https://img.shields.io/badge/Platform-Android-green?logo=android)](android/)

Proyecto desarrollado para la asignatura de **Desarrollo de Software II**, Escuela Profesional de Ingeniería Informática y de Sistemas de la **Universidad Nacional de San Antonio Abad del Cusco (UNSAAC)**.

---

## 👥 Integrantes del Equipo
* **Jhoel Alex Luicho Quispe** – `224871`
* **Lino Zeynt Huaracallo Arenas** – `204798`
* **Diego Shaid Ninancuro Huarayo** – `200946`

**Docente:** Ing. Hans Harley Ccacyahuillca Bejar  
**Semestre:** 2026-II  

---

## 📌 1. Definición del Problema
El Centro Histórico de Cusco experimenta una severa concentración peatonal: más del 80% de la carga de visitantes se concentra en calles prehispánicas angostas de menos de dos metros de ancho, destacando la **Calle Hatun Rumiyoc**.

Esta aglomeración produce dos problemas críticos:
1. **Deterioro del patrimonio lítico:** Fricción física involuntaria contra los muros incas milenarios (Piedra de los 12 Ángulos).
2. **Riesgo de colapso urbano:** Ralentización extrema del flujo peatonal (< 0.2 m/s), impidiendo evacuaciones médicas o policiales oportunas.

---

## 🚀 2. Propuesta de Valor y Alcance del MVP
El MVP transforma el concepto de guía turística tradicional en un **sistema deductivo de regulación de flujo peatonal (tipo Uber/Waze)**:
* **Monitoreo en Tiempo Real:** Detección semafórica de aforo (*Óptimo*, *Moderado*, *Saturado*) en corredores patrimoniales.
* **Desvío Cultural Inteligente:** Activación automática al superar el umbral crítico del 80% de ocupación en Hatun Rumiyoc.
* **Navegación Alterna Segura:** Redirección en un toque hacia el *Circuito Tradicional San Cristóbal y Siete Borreguitos* (1.2 km, 18 min a pie, 15% congestión) con respaldo de patrullaje POLTUR.

---

## 🏛️ 3. Arquitectura y Patrones de Diseño
Para garantizar cero latencia, eliminar fallos por APIs externas lentas y asegurar un funcionamiento *offline-first*, el sistema adopta una arquitectura modular por capas:

* **Repository Pattern:** Desacopla la lógica de negocio de las fuentes de datos mediante interfaces abstractas.
* **Publish-Subscribe / Observer (GoF):** Emisión reactiva de aforos peatonales mediante `Stream` en Dart y actualización visual mediante `StreamBuilder` sin bloqueos de hilo.
* **Datos Migrados y Sintéticos:**
  * *Datos Migrados:* Información patrimonial estructurada en `assets/data/atractivos_migrados.json`.
  * *Datos Sintéticos:* Simulación estocástica y horaria en memoria que emula sensores biométricos y cámaras del Centro de Monitoreo C2.

---

## 📋 4. Historias de Usuario (Planificación del MVP)
* **HU-01 (Monitoreo de Capacidad):** *Como turista en el Centro Histórico, quiero consultar el semáforo de aforo en tiempo real para evitar atascos y proteger los muros incas.*  
  *Criterio de Aceptación:* Si la ocupación es $\ge 80\%$, se despliega un banner de advertencia en rojo con el tiempo de demora estimado.
* **HU-02 (Desvío Inteligente):** *Como turista ante un corredor saturado, quiero recibir una ruta alterna cultural en un toque para continuar mi recorrido sin aglomeraciones.*  
  *Criterio de Aceptación:* Presenta distancia, tiempo a pie y verificación de patrullaje policial.
* **HU-03 (Acceso sin Fricción):** *Como visitante ocasional, quiero ingresar directamente en modo invitado sin crear cuentas ni contraseñas para resolver mi recorrido de inmediato.*  
  *Criterio de Aceptación:* El botón "Continuar como Turista Invitado" otorga acceso directo al dashboard/monitoreo.

---

## 🧪 5. Pruebas Automatizadas (>90% Cobertura)
La lógica de negocio (`domain/models`) se valida mediante una suite completa de pruebas unitarias que cubren:
* Cálculo aritmético de porcentajes de ocupación.
* Transición de estados en el enumerador `NivelAforo`.
* Disparo determinista de la regla de negocio `sugerirRutaAlterna()`.
* Manejo seguro de casos de borde (aforo nulo o fuera de rango).

Para ejecutar los tests automatizados:
```bash
flutter test --coverage
