---
layout: post
title: "What Two Years of Open Source Taught Me"
date: 2024-01-22
tags: [open-source, career]
reading_time: 4
excerpt: "I've been maintaining an open source project for two years. Here are the things I wish I'd known before I started."
---

Two years ago I published a small TypeScript utility library. I didn't expect much — maybe a handful of stars from friends. Instead, it's now used in thousands of projects and I've merged contributions from developers across three continents.

Here's what I wish I'd known before I started.

## Documentation is the product

For an open source library, the README *is* the product. No matter how elegant the code, if someone can't figure out how to use it in five minutes, they're gone.

Spend as much time on your docs as on your code. Include:

- A one-line description of what it does and why
- A minimal getting-started example in the first screen
- API reference with real examples
- A changelog

## A good issue template is worth its weight in gold

Before I added an issue template, bug reports were often missing the information I needed to reproduce them. Version numbers, minimal reproduction cases, expected vs. actual behavior — none of it was there by default.

An issue template takes 20 minutes to write and saves hours of back-and-forth.

## Say no more often

Early on, I accepted almost every feature request. The library grew bloated and the API became inconsistent. I learned a hard lesson: every feature you add is a feature you maintain forever.

Now I have a simple filter: does this feature serve the core use case of the library, or is it a personal optimization for a specific project? The latter almost always gets a polite "no."

## Burnout is real

Maintaining open source is work. Unpaid work, often thankless, often demanding. I went through a period where every GitHub notification felt like a chore.

What helped: setting explicit expectations (I respond to issues within two weeks, not two hours), taking breaks without apology, and finding co-maintainers who cared about the project.

## The rewards are real too

The best part of open source isn't the GitHub stars. It's the DM from a developer in Indonesia who says your library helped them ship a product. It's the pull request from someone who spotted a subtle bug you never would have found. It's the community that forms around a shared problem.

Two years in, I'd do it again.
