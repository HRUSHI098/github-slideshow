---
layout: post
title: "TypeScript Patterns I Reach For Every Day"
date: 2023-11-05
tags: [engineering, typescript]
reading_time: 5
excerpt: "After years of writing TypeScript, a few patterns have become second nature. Here are the ones I find myself using most often."
---

TypeScript's type system is remarkably expressive. After years of using it daily, a handful of patterns have become second nature. These aren't advanced wizardry — they're practical tools that make code clearer and safer.

## Discriminated unions for state

Instead of using boolean flags to model state, use a discriminated union:

```typescript
// Avoid: boolean soup
type RequestState = {
  isLoading: boolean;
  isError: boolean;
  data?: User;
  error?: Error;
};

// Better: explicit states
type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User }
  | { status: 'error'; error: Error };
```

This makes impossible states unrepresentable and switch statements exhaustive.

## `satisfies` for validated literals

The `satisfies` operator (TS 4.9+) lets you validate a value against a type while preserving its literal type:

```typescript
const routes = {
  home: '/',
  about: '/about',
  blog: '/blog',
} satisfies Record<string, string>;

// routes.home is typed as '/' not string
type Route = (typeof routes)[keyof typeof routes];
// = '/' | '/about' | '/blog'
```

## Generic utility types you should know

TypeScript ships with powerful built-in utilities:

```typescript
// Extract keys from an object type
type UserKeys = keyof User;

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name' | 'avatar'>;

// Exclude a type from a union
type NonNull<T> = Exclude<T, null | undefined>;
```

## `as const` for exhaustive enums

```typescript
const Direction = {
  North: 'NORTH',
  South: 'SOUTH',
  East: 'EAST',
  West: 'WEST',
} as const;

type Direction = (typeof Direction)[keyof typeof Direction];
// = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'
```

This gives you the exhaustiveness checking of enums without the runtime cost or quirks.

## Template literal types

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type ButtonEvents = EventName<'click' | 'focus' | 'blur'>;
// = 'onClick' | 'onFocus' | 'onBlur'
```

Powerful for building consistent API surface types.

---

TypeScript's type system rewards exploration. These patterns are entry points — once you're comfortable with them, the deeper capabilities start to make sense.
