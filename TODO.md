# TODO - Refactoring Tasks

Code smells identified per https://refactoring.guru/refactoring/smells

## Bloaters

- [ ] `src/components/ParticleSystem.tsx` - **Magic Numbers**: Hardcoded 30 particles, animation durations (20-15s), delays (5s), opacity (0.1-0.3). Extract to constants.
- [ ] `src/components/StarField.tsx` - **Magic Numbers**: Star speed (0.1), twinkle speed (0.02 + 0.005), opacity ranges. Extract to config object.

## Object-Orientation Abusers

- [ ] `src/components/StarField.tsx` - **Large Class**: Star class handles state, physics, and rendering. Violates Single Responsibility Principle. Split into Star model, StarPhysics, and StarRenderer.
- [ ] `src/components/StarField.tsx` - **Temporary Fields**: Variables like `animationFrameId` initialized incompletely then reassigned. Use proper initialization.

## Change Preventers

- [ ] Multiple files - **Divergent Change**: Animation config scattered across `tailwind.config.js`, `tailwind.css`, and components. Centralize in a single config module.

## Dispensables

- [ ] `src/styles/tailwind.css` + `tailwind.config.js` - **Duplicate Code**: Same design tokens (colors, spacing, animations) defined in both files. Use single source of truth.

## Couplers

- [ ] `src/components/StarField.tsx` - **Feature Envy**: Star class accesses canvas dimensions and context from closure. Pass dependencies via constructor/method parameters.
- [ ] `src/components/ParticleSystem.tsx` - **Inappropriate Intimacy**: Component hardcodes animation timing that should come from shared config.
