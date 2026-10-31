# AGENTS.md

App móvil de gestión personal (rutinas, eventos, finanzas, universidad) — React Native + TypeScript,
local-first y UI Glassmorphism con paleta de dos colores (blanco dominante, verde de acento).
`README.md` es la especificación funcional (módulos, MVP, requisitos); este archivo resume cómo
trabajar en el código real.

Estado actual: proyecto recién inicializado desde la plantilla de React Native. Ya existe el dashboard
(`src/views/Home/`) con las cuatro tarjetas de módulo; `App.tsx` lo monta. Todavía no hay navegación,
base de datos ni lógica de módulos: tocar una tarjeta solo muestra un aviso de "próximamente".

## Stack real (verificado en `package.json`)

- React Native **0.88 CLI bare** (no Expo), React **19.3**, TypeScript 6 vía `@react-native/typescript-config`.
- Node **>= 22.11**.
- Dependencias de runtime: solo `react-native-safe-area-context` además del core. **Todavía no hay**
  navegación, base de datos, iconos, blur/glass ni librería de componentes: hay que elegir, instalar
  y justificar cada una antes de importarla.
- Entry: `index.js` → `App.tsx` (`AppRegistry`, nombre de `app.json`). Android: `com.apppersonalmultiusos`.

## Comandos

```bash
npm.cmd start            # Metro
npm.cmd run android
npm.cmd run ios
npm.cmd test             # jest
npm.cmd run lint         # eslint
npx.cmd tsc --noEmit     # typecheck (no hay script npm)
```

En este entorno Windows/PowerShell los shims `.ps1` están bloqueados: `npm ...` y `npx ...` fallan con
"la ejecución de scripts está deshabilitada", así que hay que usar `npm.cmd` y `npx.cmd`.

- Un solo test: `npx.cmd jest __tests__/App.test.tsx -t "renders correctly"`.
- Verificación antes de cerrar un cambio: `npx.cmd tsc --noEmit` → `npm.cmd test` → `npm.cmd run lint`.
  Los tres pasan hoy; mantenerlos en verde (el lint fallaba antes por restos de la plantilla, ya limpiados).
- Metro resuelve `index.js` en la raíz y `App.tsx`. Para validar que el bundle compila sin emulador:
  `npx.cmd react-native bundle --platform android --dev false --entry-file index.js --bundle-output "$env:TEMP\check.bundle"`.

## Estructura

Layout objetivo del README (crear a medida que se implementa, no de golpe):

```text
src/context/{theme,modules}   src/app/{navigation,providers}
src/views/<Pantalla>/{<Pantalla>.tsx,<Pantalla>.ts,style.ts}
src/components/{common,forms,glass}   src/features/{workouts,events,finances,university}
src/database/{migrations,repositories,schema}   src/hooks  src/services  src/types  src/utils
assets/  tests/
```

- Patrón de pantalla fijado por el dueño del proyecto: `<Pantalla>.tsx` = JSX puro, `<Pantalla>.ts` =
  lógica (hooks, helpers, tipos), `style.ts` = `StyleSheet.create`. La vista no calcula; el `.ts` no
  renderiza. Aplicarlo a cada pantalla nueva.
- **Trampa:** `Home.ts` y `Home.tsx` comparten nombre base, así que `import Home from './.../Home'`
  resuelve al `.ts` y rompe en runtime. Importar siempre con extensión:
  `'./src/views/Home/Home.tsx'` (`allowImportingTsExtensions` está activo en el preset de TS).
- Globales (tokens de diseño y registros de datos) viven en `src/context/`: `theme.ts` (colores,
  espacios, radios, tipografía, sombras y el helper `alpha`) y `modules.ts` (registro de los cuatro
  módulos). La UI recorre `MODULES`, así que un módulo nuevo es una entrada ahí más su carpeta en
  `src/features`.
- El `src/theme/` del README no se creó: los tokens están en `src/context/theme.ts` por decisión del
  dueño del proyecto. No duplicar colores ni estilos fuera de ahí.
- Un módulo = una carpeta de feature con sus componentes, hooks y acceso a datos propio.
- Datos: local-first, **SQLite o WatermelonDB aún sin decidir ni instalar**. No inventar una capa de
  persistencia: proponer la elección, centralizar el acceso en `src/database/repositories` y mantener
  los componentes fuera de la DB. Prever migraciones, validación previa al guardado y manejo de errores.

## Diseño (requisito de producto, no sugerencia)

Estilo: fondo blanco puro con superficies blancas elevadas, sombras verdes y bordes sutiles; nada de
blur ni transparencias (el Glassmorphism del README quedó acotado a esta versión). Paleta de
**dos colores**, con el blanco como dominante y el verde solo como acento:

| Color | HEX | Uso |
|---|---|---|
| Blanco | `#FFFFFF` | superficies y tarjetas, texto, bordes, iconos, acciones principales |
| Verde | `#0CC61B` | acentos, estados activos, indicadores, efectos y sombras |

- No reintroducir la paleta anterior (`#05D12E`, `#42D105`, `#05D194`): fue descartada por el dueño.
  Tampoco otros verdes ni una tercera familia de color.
- El resto de la interfaz se construye con neutros derivados (negros/grises y blanco con alpha) para
  fondos, superficies, texto secundario y estados. Definir todo en `src/context/theme.ts`.

- Fondo y tarjetas son blancos (`#FFFFFF`); el relieve es neumórfico: superficie con gradiente
  blanco→gris verdoso muy leve, luz blanca arriba-izquierda y proyección verde difusa abajo-derecha
  (`boxShadow` multicapa de RN 0.88, New Architecture). Al presionar, la tarjeta se hunde con sombras
  `inset`. Nada de glows ni degradados de fondo: el fondo queda completamente blanco.
- El verde no se usa como color de texto (2.3:1 sobre blanco, ilegible): solo sombras, bordes, puntos
  e iconos. Texto principal en `#0B100C` y secundario en negro al 55%.
- Rendimiento: cada sombra multicapa cuesta; no sumar más capas por tarjeta ni animar `boxShadow`
  (se anima la escala, como ya hace `usePressFeedback`).
- Accesibilidad: contraste suficiente, tipografía legible, áreas táctiles amplias; toda tarjeta
  presionable lleva `accessibilityRole` y `accessibilityLabel`.
- Idioma: UI y textos de usuario en **español**; identificadores, tipos y comentarios de código en inglés.

## Testing

- Jest con `@react-native/jest-preset` y `react-test-renderer` 19.3; no hay `@testing-library/react-native`
  (si se añade, migrar también `__tests__/App.test.tsx`).
- Tests en `__tests__/` o junto al módulo; mantener el smoke test de `App`.

## Skills del repo

`.agents/skills/` está gestionado por `autoskills` (`skills-lock.json`); no editarlo para adaptar el
proyecto. Aplicables aquí: `react-best-practices`, `composition-patterns`, `design-mobile-apps`
(ver `styling/stylesheet.md`), `typescript-advanced-types`, `accessibility`. `nodejs-*`, `ruby` y `seo`
no aplican a esta app.
