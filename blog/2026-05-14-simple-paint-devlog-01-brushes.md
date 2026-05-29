---
title: "Simple Paint — Devlog #01: GPU Brush Stamps"
description: "How the new texture-stamp brush works, why we rewrote the GPU path, and what's still slow on mobile."
date: 2026-05-14
slug: simple-paint-devlog-01-brushes
authors: [vuminh]
tags: [simple-paint, studio-log, unity, shader]
---

![Simple Paint — brush stamps](https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80)

**Vigil № 0001 — Simple Paint.** Picking up dev log notes for the painting tool after a long quiet stretch.

<!-- truncated -->

## What changed in 2.0.1

- Brush stamps now sample a texture instead of solid colour. Texture array, indexed by brush id.
- The compute kernel runs on a render texture target now, not a CPU `Texture2D`. ~14x faster on the Pixel 7.
- Pressure curve is a `AnimationCurve` baked to a 256-entry LUT each frame the curve changes. No per-stamp evaluation cost.

## Known issues

- Stamp seams visible when the user paints faster than the stamp spacing. Need to interpolate stamp positions between input samples.
- Eraser is a colour brush right now. Real alpha erasing is the next pass.

The version on the Asset Store is still 2.0.0. Next push: brush spacing fix + the alpha eraser.
