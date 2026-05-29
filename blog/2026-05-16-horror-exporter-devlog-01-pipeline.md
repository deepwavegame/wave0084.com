---
title: "Horror Asset Exporter — Devlog #01: One-Click Pipeline"
description: "Why we're rebuilding the Blender → Unity export pipeline as a single relic. LOD generation, PBR remapping, and collider hints."
date: 2026-05-16
slug: horror-exporter-devlog-01-pipeline
authors: [vuminh]
tags: [horror-exporter, studio-log, tech-art]
---

![Horror Asset Exporter](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80)

**Vigil № 0001 — Horror Asset Exporter.** Opening dev log for the Blender add-on.

<!-- truncated -->

## Why the rewrite

The first internal version was four operators stitched together with `bpy.ops` calls. It worked, but every release of Blender broke something. The new version is a single relic — one `INVOKE_DEFAULT` entry point that runs the whole pipeline.

## What it does now

1. **Auto-LOD** — Decimate modifier at 0.5 and 0.2 ratios, baked to LOD1 and LOD2. Custom angle threshold per asset class.
2. **PBR remap** — Principled BSDF → HDRP/Lit + URP/Lit material templates. Outputs a `.unityassetdata` JSON the Unity side reads on import.
3. **Collider hints** — convex hull, bounding box, or "use mesh" tag baked into custom properties. Read by an importer post-processor on the Unity side.

## What's broken

- Export of armatures with custom bone groups loses the group names. Investigating.
- The LOD0 mesh is occasionally exported with double-sided normals on UV seams. Probably a Decimate modifier interaction.

Targeting v1.0.6 release end of the month.
