# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { loanRouter } from './controllers/loanController';

const app = express();
app.use(bodyParser.json());
app.use('/loans', loanRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// === ARCHIVO: src/controllers/loanController.ts ===
import { Router } from 'express';
import { createLoan, getLoan, updateLoan, deleteLoan } from '../services/loanService';
import { validateLoan } from '../middlewares/validationMiddleware';

const router = Router();

router.post('/', validateLoan, (req: Request, res: Response, next: NextFunction) => createLoan(req, res, next));
router.get('/:id', (req: Request, res: Response, next: NextFunction) => getLoan(req, res, next));
router.put('/:id', validateLoan, (req: Request, res: Response, next: NextFunction) => updateLoan(req, res, next));
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => deleteLoan(req, res, next));

export { router as loanRouter };

// === ARCHIVO: src/models/loanModel.ts ===
export interface Loan {
  id: string;
  amount: number;
  interestRate: number;
  startDate: Date;
  dueDate: Date;
}

// === ARCHIVO: src/services/loanService.ts ===
import { Loan } from '../models/loanModel';
import { auditLog } from '../utils/auditLogger';

const loans: Loan[] = [];

export const createLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan: Loan = req.body;
    loans.push(loan);
    auditLog('create', loan);
    res.status(201).send(loan);
  } catch (error) {
    next(error);
  }
};

export const getLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan = loans.find(l => l.id === req.params.id);
    if (!loan) {
      res.status(404).send({ message: 'Loan not found' });
    } else {
      res.send(loan);
    }
  } catch (error) {
    next(error);
  }
};

export const updateLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loanIndex = loans.findIndex(l => l.id === req.params.id);
    if (loanIndex === -1) {
      res.status(404).send({ message: 'Loan not found' });
    } else {
      loans[loanIndex] = {...loans[loanIndex],...req.body };
      auditLog('update', loans[loanIndex]);
      res.send(loans[loanIndex]);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loanIndex = loans.findIndex(l => l.id === req.params.id);
    if (loanIndex === -1) {
      res.status(404).send({ message: 'Loan not found' });
    } else {
      const deletedLoan = loans.splice(loanIndex, 1)[0];
      auditLog('delete', deletedLoan);
      res.send(deletedLoan);
    }
  } catch (error) {
    next(error);
  }
};

// === ARCHIVO: src/middlewares/validationMiddleware.ts ===
import { Request, Response, NextFunction } from 'express';
import { Loan } from '../models/loanModel';

export const validateLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan: Loan = req.body;
    if (loan.amount <= 0 || loan.interestRate <= 0 || loan.dueDate <= loan.startDate) {
      throw new Error('Invalid loan data');
    }
    next();
  } catch (error) {
    next(error);
  }
};

// === ARCHIVO: src/utils/auditLogger.ts ===
export const auditLog = (action: string, loan: any) => {
  console.log(`Audit log: ${action} - ${JSON.stringify(loan)}`);
};

// === ARCHIVO: src/tests/loanController.test.ts ===
import { Router } from 'express';
import request from 'supertest';
import { loanRouter } from '../controllers/loanController';
import { Loan } from '../models/loanModel';

describe('Loan Controller', () => {
  let app: Router;
  let loan: Loan;

  beforeEach(() => {
    app = loanRouter;
    loan = {
      id: '1',
      amount: 1000,
      interestRate: 5,
      startDate: new Date('2023-01-01'),
      dueDate: new Date('2023-12-31')
    };
  });

  it('should create a loan', async () => {
    const response = await request(app)
     .post('/')
     .send(loan);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(loan);
  });

  it('should get a loan', async () => {
    const response = await request(app)
     .get(`/${loan.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(loan);
  });

  it('should update a loan', async () => {
    const updatedLoan = {...loan, amount: 2000 };
    const response = await request(app)
     .put(`/${loan.id}`)
     .send(updatedLoan);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedLoan);
  });

  it('should delete a loan', async () => {
    const response = await request(app)
     .delete(`/${loan.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(loan);
  });
});

// === ARCHIVO: src/tests/loanService.test.ts ===
import { createLoan, getLoan, updateLoan, deleteLoan } from '../services/loanService';
import { Loan } from '../models/loanModel';

describe('Loan Service', () => {
  let loan: Loan;

  beforeEach(() => {
    loan = {
      id: '1',
      amount: 1000,
      interestRate: 5,
      startDate: new Date('2023-01-01'),
      dueDate: new Date('2023-12-31')
    };
  });

  it('should create a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    expect(getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toEqual(loan);
  });

  it('should get a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    expect(getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toEqual(loan);
  });

  it('should update a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    const updatedLoan = {...loan, amount: 2000 };
    updateLoan({ params: { id: loan.id }, body: updatedLoan } as any, {} as any, () => {});
    expect(getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toEqual(updatedLoan);
  });

  it('should delete a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    deleteLoan({ params: { id: loan.id } } as any, {} as any, () => {});
    expect(() => getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toThrow('Loan not found');
  });
});

// === ARCHIVO: package.json ===
{
  "name": "loan-management-api",
  "version": "1.0.0",
  "main": "src/index.ts",
  "scripts": {
    "start": "ts-node src/index.ts",
    "test": "jest"
  },
  "dependencies": {
    "express": "4.18.0",
    "body-parser": "1.19.2"
  },
  "devDependencies": {
    "typescript": "5.2.0",
    "ts-node": "10.9.1",
    "jest": "29.0.0",
    "@types/express": "4.17.13",
    "@types/jest": "29.0.0",
    "@types/node": "16.11.7",
    "supertest": "6.2.4"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

```
