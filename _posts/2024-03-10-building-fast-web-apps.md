---
layout: post
title: "Building Fast Web Apps: Lessons from the Trenches"
date: 2024-03-10
tags: [engineering, performance]
reading_time: 6
excerpt: "Performance isn't a feature you bolt on at the end — it's a discipline you practice from day one. Here's what I've learned building apps that need to be fast."
---

Performance isn't a feature you bolt on at the end — it's a discipline you practice from day one. Over the past few years shipping production apps at scale, I've collected a handful of lessons that have made a real difference.

## Start with the right mental model

The fastest code is code that doesn't run. Before reaching for optimization techniques, ask: *does this computation need to happen at all?* Can you defer it, cache it, or eliminate it?

A useful mental model is to think in three layers:

1. **Network** — minimize what you send, compress aggressively, leverage CDNs
2. **Parse & execute** — ship less JavaScript, code-split ruthlessly
3. **Render** — avoid layout thrash, batch DOM mutations, prefer `transform` over properties that trigger layout

## Bundle size is your biggest lever

In most apps I've worked on, JavaScript bundle size is the biggest driver of Time to Interactive (TTI). A few principles that help:

- **Lazy-load routes** — don't ship code for `/dashboard` to users landing on `/login`
- **Audit your dependencies** — `bundlephobia` is your friend. Do you really need that 40kb date library?
- **Use tree-shaking** — import named exports, not default objects

```js
// Bad — imports the entire library
import _ from 'lodash';

// Good — tree-shakeable
import debounce from 'lodash/debounce';
```

## Measure, don't guess

I've been surprised too many times by where the actual bottlenecks are. Use real tools:

- **Chrome DevTools Performance panel** for runtime profiling
- **Lighthouse** for a quick audit score
- **Web Vitals** (LCP, FID, CLS) as your north star metrics
- **Real User Monitoring (RUM)** — synthetic tests lie, real users don't

## The 100ms budget

Research shows users perceive interactions as immediate if they respond within **100ms**. For anything that might take longer:

- Show a loading indicator immediately
- Optimistically update the UI before the server responds
- Use skeleton screens instead of spinners

## Caching is nuanced

HTTP caching is powerful but misunderstood. The key insight: separate your **immutable assets** (bundle files with content hashes) from **mutable data** (API responses). Set `Cache-Control: max-age=31536000, immutable` on hashed assets and be deliberate about your API cache headers.

---

Performance work is never done, but with the right foundations in place, you're playing a different game entirely. Measure everything, optimize what matters, and ship with confidence.
