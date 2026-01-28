# CLAUDE.md

## Project Overview

**Tech Stack:**

- Preact 10.x (lightweight React alternative)
- Vite 5.x (build tool & dev server)
- TypeScript 5.x (strict mode)
- Tailwind CSS v4 (utility-first CSS)
- Docker + Nginx (production deployment)

**Entry Points:**

- `src/index.tsx` - Application bootstrap
- `src/app.tsx` - Root component

## Current Project Structure

```
src/
├── app.tsx              # Root App component
├── index.tsx            # Entry point
├── components/          # React components
│   ├── Hero.tsx         # Main title section
│   ├── StarField.tsx    # Canvas star animation
│   └── ParticleSystem.tsx  # Floating particles
├── types/               # TypeScript definitions
│   ├── data.ts          # Data models (Particle)
│   └── css.d.ts         # CSS module types
└── styles/              # Styling
    ├── global.css       # Base styles
    └── tailwind.css     # Tailwind v4 config
```

## Feature-Sliced Design (FSD) Guidelines

For future development, follow the FSD architecture:

```
src/
├── app/          # App initialization, providers, routing
├── pages/        # Page components (compositional layer)
├── widgets/      # Standalone UI blocks (Header, Footer)
├── features/     # User interactions, business logic
├── entities/     # Business entities (models, types)
└── shared/       # Shared utilities, UI kit, configs
```

### FSD Principles

1. **Layered Architecture**: `app → pages → widgets → features → entities → shared`
2. **Public API**: Each slice exposes functionality via `index.ts`
3. **No Cross-Slice Imports**: Slices at the same layer cannot import from each other
4. **Unidirectional Dependencies**: Lower layers cannot import from higher layers

### SOLID Principles

| Principle                 | Description                                         |
| ------------------------- | --------------------------------------------------- |
| **S**ingle Responsibility | Each module/class should have one reason to change  |
| **O**pen/Closed           | Open for extension, closed for modification         |
| **L**iskov Substitution   | Subtypes must be substitutable for their base types |
| **I**nterface Segregation | Many specific interfaces better than one general    |
| **D**ependency Inversion  | Depend on abstractions, not concretions             |

### FSD + SOLID Integration

- FSD layers enforce **Single Responsibility** at architectural level
- Slice isolation supports **Open/Closed** (extend via new slices)
- Public APIs (`index.ts`) enable **Interface Segregation**
- Import rules enforce **Dependency Inversion**

## Code Smell Awareness

Reference: https://refactoring.guru/refactoring/smells

### Categories to Watch

| Category                       | Examples                                                         |
| ------------------------------ | ---------------------------------------------------------------- |
| **Bloaters**                   | Long methods, Large classes, Magic numbers, Long parameter lists |
| **Object-Orientation Abusers** | Switch statements, Temporary fields, Refused bequest             |
| **Change Preventers**          | Divergent change, Shotgun surgery                                |
| **Dispensables**               | Dead code, Duplicate code, Lazy class                            |
| **Couplers**                   | Feature envy, Inappropriate intimacy, Message chains             |

### TODO Convention

When spotting code smells, add a TODO comment:

```typescript
// TODO: [REFACTOR] <smell-type> - <description>
// Example:
// TODO: [REFACTOR] Magic Numbers - Extract 30 to PARTICLE_COUNT constant
```

See `TODO.md` for tracked refactoring tasks.
