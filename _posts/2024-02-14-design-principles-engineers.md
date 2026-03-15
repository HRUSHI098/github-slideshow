---
layout: post
title: "Design Principles Every Engineer Should Know"
date: 2024-02-14
tags: [design, engineering]
reading_time: 5
excerpt: "You don't need to be a designer to build products that feel polished. A handful of core principles will take you surprisingly far."
---

You don't need to be a designer to build products that feel polished. A handful of core principles will take you surprisingly far — and help you collaborate more effectively with designers on your team.

## Proximity

Elements that are related should be close together. Elements that are unrelated should have space between them. This sounds obvious, but I see this violated constantly: labels floating away from their inputs, buttons disconnected from the content they act on.

When in doubt, increase the spacing between unrelated things and tighten it between related things.

## Hierarchy

Every UI needs a clear visual hierarchy that tells the user what to look at first. You create hierarchy through:

- **Size** — bigger = more important
- **Weight** — bold text draws the eye
- **Color** — high contrast = high importance
- **Space** — whitespace creates breathing room and emphasis

If everything is bold, nothing is bold.

## Consistency

Consistency reduces cognitive load. When users learn that blue underlined text is a link, that mental model should hold everywhere in your app. Inconsistency forces users to re-evaluate each interaction.

This is why design systems exist. They're not about aesthetics — they're about making consistency effortless.

## Feedback

Every user action should produce feedback. A button click should look different when pressed. A form submission should indicate progress. An error should be immediately visible.

The absence of feedback creates anxiety. Users will click that button three more times if they're not sure it registered.

```css
/* Good: visible focus state for accessibility */
button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

## Whitespace is not wasted space

Whitespace is the most underused design tool. It creates:

- Visual breathing room
- Grouping (proximity, see above)
- Emphasis for the elements that remain
- A sense of quality and intentionality

The fastest way to make a UI feel more professional is often to remove elements and add space, not add more.

---

These principles aren't rules to follow mechanically — they're lenses for diagnosing why something feels off. Train yourself to look through them and your UI instincts will sharpen quickly.
