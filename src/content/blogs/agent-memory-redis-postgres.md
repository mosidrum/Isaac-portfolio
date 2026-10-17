---
title: "Persistent memory for AI agents: Redis for sessions, Postgres for long-term context"
date: "2026-10-20"
tags: ["AI", "Agents", "Backend"]
excerpt: "DRAFT: how a two-tier memory split keeps agent sessions fast without treating every request as a cold start."
draft: true
---

> Draft outline. Isaac to fill in from first-hand experience at Relaystack. Nothing here is published.

## The problem

- What goes wrong when an agent has no memory between sessions?
- What did users notice?

## Two tiers

- What lives in Redis (session state), and why?
- What lives in PostgreSQL (long-term context), and why?
- How does context get promoted from one to the other?

## What I would do differently

- One concrete mistake or trade-off.
