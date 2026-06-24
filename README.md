# Desarrollo de una API REST con Express y TypeScript

Estás encargado de desarrollar una API REST para un sistema de gestión de préstamos. La API debe permitir la creación, lectura, actualización y eliminación de préstamos. Los préstamos tienen atributos como ID, monto, tasa de interés, fecha de inicio y fecha de vencimiento. La API debe validar que los montos y tasas de interés sean positivos y que las fechas de vencimiento sean posteriores a las fechas de inicio. Además, la API debe manejar errores de forma idempotente y emitir eventos de auditoría por cada acción realizada.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | typescript-express |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Creación de la estructura básica de la API

**Objetivo:** Configurar el proyecto con Express y TypeScript y crear las rutas básicas para la gestión de préstamos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar el proyecto con Express y TypeScript.
- Crear las rutas básicas para la creación, lectura, actualización y eliminación de préstamos.
- Validar que los montos y tasas de interés sean positivos y que las fechas de vencimiento sean posteriores a las fechas de inicio.

**Entregable:** Proyecto configurado con Express y TypeScript, rutas básicas creadas y validaciones implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Configuración de un proyecto con Express y TypeScript.
- Creación de rutas en Express.
- Validación de datos en las solicitudes.

</details>

### Fase 2: Implementación de la lógica de negocio

**Objetivo:** Implementar la lógica de negocio para la gestión de préstamos, incluyendo la creación, lectura, actualización y eliminación de préstamos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la lógica de negocio para la creación, lectura, actualización y eliminación de préstamos.
- Asegurar que la API maneje errores de forma idempotente.
- Emitir eventos de auditoría por cada acción realizada.

**Entregable:** Lógica de negocio implementada para la gestión de préstamos, manejo de errores idempotente y emisión de eventos de auditoría.

<details>
<summary>Pistas de conocimiento</summary>

- Implementación de la lógica de negocio en una API REST.
- Manejo de errores idempotente.
- Emisión de eventos de auditoría.

</details>

### Fase 3: Pruebas unitarias y de integración

**Objetivo:** Escribir pruebas unitarias y de integración para la API utilizando Jest.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Escribir pruebas unitarias para la lógica de negocio.
- Escribir pruebas de integración para las rutas de la API.
- Asegurar una cobertura de pruebas del 80%.

**Entregable:** Pruebas unitarias y de integración escritas y ejecutadas con una cobertura del 80%.

<details>
<summary>Pistas de conocimiento</summary>

- Escrituras de pruebas unitarias y de integración con Jest.
- Aseguramiento de una cobertura de pruebas adecuada.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una API REST y cómo se implementa con Express y TypeScript?
- **paraQueSirve**: ¿Para qué sirve la lógica de negocio en una API REST?
- **comoSeUsa**: ¿Cómo se usa Jest para escribir pruebas unitarias y de integración?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una API REST con Express y TypeScript?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de una API REST idempotente y con emisión de eventos de auditoría?

## Criterios de Evaluacion

- Configuración correcta del proyecto con Express y TypeScript.
- Rutas básicas creadas y validaciones implementadas.
- Lógica de negocio implementada para la gestión de préstamos.
- Manejo de errores idempotente y emisión de eventos de auditoría.
- Pruebas unitarias y de integración escritas y ejecutadas con una cobertura del 80%.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
