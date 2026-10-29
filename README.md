# AppPersonalMultiUsos

## 1. Descripción general

**AppPersonalMultiUsos** es una aplicación móvil de productividad y gestión personal desarrollada con **React Native**, diseñada para centralizar en un solo lugar la organización de rutinas de ejercicio, eventos, finanzas personales y actividades académicas.

La aplicación busca ofrecer una experiencia intuitiva, visualmente atractiva y funcional, permitiendo al usuario administrar sus actividades cotidianas y consultar su información de manera rápida y organizada.

El diseño estará basado en el estilo **Glassmorphism**, caracterizado por superficies translúcidas, efectos de desenfoque, transparencias, bordes sutiles y una jerarquía visual moderna.

La información se almacenará localmente en el dispositivo mediante una base de datos, priorizando la privacidad, el acceso sin conexión a internet y la persistencia de los datos.

## 2. Objetivos del proyecto

- Centralizar las principales herramientas de organización personal en una única aplicación.
- Facilitar la planificación y el seguimiento de actividades diarias, semanales y mensuales.
- Proporcionar herramientas para registrar y consultar información personal de forma estructurada.
- Ofrecer una interfaz moderna, coherente, accesible y adaptable a dispositivos móviles.
- Garantizar la persistencia de los datos mediante almacenamiento local.
- Permitir la gestión completa de la información mediante operaciones CRUD (crear, consultar, actualizar y eliminar).

## 3. Módulos principales

### 3.1. Módulo de rutinas de ejercicio

Permite crear, organizar y realizar seguimiento de rutinas de entrenamiento físico.

**Funcionalidades principales:**

- Crear, editar y eliminar rutinas de entrenamiento.
- Organizar ejercicios por días de la semana, grupos musculares o tipo de entrenamiento.
- Registrar ejercicios con series, repeticiones, peso, duración y tiempo de descanso.
- Consultar información detallada de cada ejercicio.
- Registrar entrenamientos completados y llevar un historial de actividad.
- Visualizar el progreso del entrenamiento a lo largo del tiempo.
- Consultar rutinas mediante una vista semanal.
- Marcar ejercicios y sesiones como completados.

### 3.2. Módulo de eventos y calendario

Permite administrar compromisos, citas, actividades y recordatorios personales mediante un calendario dinámico.

**Funcionalidades principales:**

- Visualizar eventos en vistas mensual, semanal y diaria.
- Crear, consultar, editar y eliminar eventos.
- Definir título, descripción, fecha, hora, ubicación y categoría.
- Configurar recordatorios y notificaciones locales.
- Clasificar eventos por tipo, prioridad o importancia.
- Gestionar eventos recurrentes, como actividades semanales o mensuales.
- Consultar los próximos eventos y los compromisos del día.
- Identificar visualmente los eventos mediante colores o categorías.

### 3.3. Módulo de finanzas personales

Permite llevar un control organizado de los ingresos, gastos, ahorros y obligaciones económicas del usuario.

**Funcionalidades principales:**

- Registrar, editar y eliminar ingresos y gastos.
- Clasificar movimientos por categorías.
- Consultar balances y saldos disponibles.
- Establecer presupuestos por categoría o periodo.
- Crear objetivos de ahorro y realizar seguimiento de su progreso.
- Registrar obligaciones financieras, pagos pendientes y fechas de vencimiento.
- Gestionar un fondo de emergencia.
- Consultar historiales de movimientos y resúmenes mensuales.
- Visualizar estadísticas mediante gráficos de ingresos, gastos y ahorros.
- Filtrar movimientos por fecha, categoría y tipo de transacción.

### 3.4. Módulo de organización universitaria

Permite organizar las actividades académicas y realizar seguimiento de las responsabilidades universitarias.

**Funcionalidades principales:**

- Registrar asignaturas y sus respectivos horarios.
- Crear y administrar horarios de clases.
- Registrar tareas, trabajos, proyectos, exámenes y entregas.
- Definir fechas límite, prioridades y estados de progreso.
- Configurar recordatorios para actividades académicas.
- Consultar las actividades pendientes y próximas entregas.
- Organizar actividades por asignatura y periodo académico.
- Registrar fechas importantes, como matrículas, exposiciones y evaluaciones.
- Consultar un calendario académico integrado con los demás eventos personales.

## 4. Diseño e interfaz de usuario (UI/UX)

La aplicación utilizará **Glassmorphism** como lenguaje visual principal, buscando una apariencia moderna, limpia y consistente.

### Principios de diseño

- **Superficies translúcidas:** tarjetas, paneles y elementos de navegación con transparencias controladas.
- **Efectos de desenfoque:** uso moderado de blur para generar profundidad y separación visual.
- **Bordes sutiles:** contornos finos y reflejos suaves que definan los componentes.
- **Jerarquía visual:** títulos, subtítulos, datos y acciones claramente diferenciados.
- **Paleta de colores coherente:** colores base neutros con acentos específicos para cada módulo.
- **Iconografía consistente:** iconos claros y reconocibles para navegación y acciones.
- **Diseño adaptable:** interfaces que se ajusten a diferentes tamaños de pantalla.
- **Accesibilidad:** contraste suficiente, tipografía legible y áreas táctiles adecuadas.
- **Rendimiento visual:** uso controlado de transparencias, sombras y desenfoques para evitar afectar la fluidez de la aplicación.

### Navegación principal

La aplicación contará con una pantalla de inicio o dashboard desde la cual se podrá acceder a los cuatro módulos.

El dashboard podrá incluir:

- Resumen de las actividades del día.
- Próximos eventos y recordatorios.
- Estado de la rutina de entrenamiento.
- Resumen financiero.
- Próximas tareas y compromisos académicos.
- Accesos rápidos a las acciones más frecuentes.

La navegación deberá ser consistente y permitir cambiar entre módulos sin perder el contexto de uso.

## 5. Arquitectura y tecnologías

### Tecnología principal

- **React Native:** desarrollo de la aplicación móvil.
- **TypeScript:** tipado estático para mejorar la mantenibilidad, seguridad y calidad del código.
- **SQLite o WatermelonDB:** almacenamiento y persistencia de datos locales.
- **Sistema de navegación compatible con React Native:** gestión de pantallas y flujos de navegación.
- **Librería de componentes visuales propia:** creación de componentes reutilizables con el estilo Glassmorphism.

### Persistencia y almacenamiento local

La aplicación almacenará sus datos en el dispositivo, sin depender de un servidor remoto para las funcionalidades principales.

La capa de persistencia deberá contemplar:

- Estructuras de datos organizadas por módulo.
- Relaciones entre entidades cuando corresponda.
- Consultas eficientes y filtros por fecha, categoría y estado.
- Migraciones del esquema de la base de datos.
- Validación de datos antes de guardarlos.
- Manejo de errores durante las operaciones de lectura y escritura.
- Persistencia de los datos después de cerrar o reiniciar la aplicación.

La selección definitiva entre SQLite y WatermelonDB se realizará considerando la complejidad de las relaciones, el volumen de información, las necesidades de consulta y los requisitos de rendimiento.

## 6. Organización del código

El proyecto deberá mantener una arquitectura modular, con separación de responsabilidades y componentes reutilizables.

Estructura de referencia:

```text
AppPersonalMultiUsos/
├── src/
│   ├── app/
│   │   ├── navigation/
│   │   └── providers/
│   ├── components/
│   │   ├── common/
│   │   ├── forms/
│   │   └── glass/
│   ├── features/
│   │   ├── workouts/
│   │   ├── events/
│   │   ├── finances/
│   │   └── university/
│   ├── database/
│   │   ├── migrations/
│   │   ├── repositories/
│   │   └── schema/
│   ├── hooks/
│   ├── services/
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── effects.ts
│   ├── types/
│   └── utils/
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
├── tests/
├── app.json
├── package.json
└── tsconfig.json
```

Esta estructura es una propuesta inicial y podrá adaptarse a las decisiones técnicas del proyecto.

## 7. Requisitos no funcionales

- **Funcionamiento sin conexión:** las funcionalidades principales estarán disponibles offline.
- **Persistencia:** los datos deberán conservarse después de cerrar la aplicación.
- **Privacidad:** la información personal permanecerá en el dispositivo, salvo que posteriormente se implemente una función explícita de sincronización o exportación.
- **Rendimiento:** la navegación y las operaciones habituales deberán ser fluidas.
- **Mantenibilidad:** el código deberá estar organizado por módulos y responsabilidades.
- **Escalabilidad:** la arquitectura deberá permitir incorporar nuevos módulos sin reestructurar toda la aplicación.
- **Consistencia:** los componentes visuales, formularios, estados y patrones de navegación deberán seguir criterios comunes.
- **Confiabilidad:** las operaciones sobre los datos deberán contemplar validaciones, errores y actualizaciones seguras.

## 8. Alcance inicial (MVP)

La primera versión funcional de la aplicación deberá incluir:

1. Estructura base del proyecto en React Native y TypeScript.
2. Sistema de navegación entre los cuatro módulos.
3. Dashboard con información resumida.
4. Implementación del sistema visual Glassmorphism.
5. Base de datos local y operaciones CRUD.
6. Funcionalidades esenciales de cada módulo.
7. Calendarios, fechas límite y recordatorios locales.
8. Formularios con validaciones y estados de carga, vacío y error.
9. Pruebas de las funcionalidades principales.
10. Manejo de persistencia y recuperación de datos.

Las funcionalidades avanzadas, como sincronización en la nube, copias de seguridad automáticas, exportación de información y análisis históricos avanzados, podrán incorporarse en fases posteriores.

## 9. Resultado esperado

Obtener una aplicación móvil personal, modular y extensible que permita gestionar rutinas de ejercicio, eventos, finanzas personales y responsabilidades universitarias desde una interfaz unificada.

El producto deberá combinar una experiencia visual moderna basada en Glassmorphism con una arquitectura mantenible, almacenamiento local confiable y funcionalidades prácticas para la organización cotidiana.

**Nombre del proyecto:** AppPersonalMultiUsos  
**Plataforma:** React Native  
**Lenguaje recomendado:** TypeScript  
**Persistencia:** SQLite o WatermelonDB  
**Enfoque visual:** Glassmorphism  
**Arquitectura:** modular, local-first y escalable  
**Versión inicial:** MVP funcional
