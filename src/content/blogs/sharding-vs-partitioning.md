---
title: "Sharding vs Partitioning: Database Scaling Strategies"
date: "2024-02-09"
readTime: "4 min read"
tags: ["Backend", "Databases", "Scale"]
excerpt: "Breaking down horizontal scaling approaches for distributed systems. Covers when to shard, partitioning strategies, and the operational complexity trade-offs of each approach."
---

# Sharding vs Partitioning: Database Scaling Strategies

Breaking down horizontal scaling approaches for distributed systems.

> This post was originally published on [Medium](https://medium.com/@mosiokanga/sharding-vs-partitioning-ed2b7e4708b6).

## The Problem

At some point, a single database node cannot serve your read/write throughput. When you hit that ceiling, you have two broad options: scale vertically (bigger machine) or scale horizontally (more machines). Partitioning and sharding are both forms of horizontal scaling — but they are not the same thing.

## Partitioning

Partitioning divides a table's data into smaller pieces — **within the same database instance**. A PostgreSQL table partitioned by date still lives on one server; it's just internally organized into sub-tables.

**Use cases:**
- Time-series data (partition by month or year)
- Archiving old rows without deleting them
- Improving query performance through partition pruning

```sql
CREATE TABLE events (
  id SERIAL,
  created_at TIMESTAMPTZ NOT NULL,
  payload JSONB
) PARTITION BY RANGE (created_at);

CREATE TABLE events_2024 PARTITION OF events
  FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

Partitioning is relatively low-risk. If you drop a partition, you don't touch the rest of the data.

## Sharding

Sharding distributes data across **multiple database nodes**. Each shard is a separate database instance, responsible for a subset of your data. A user with `id=1` might live on shard A; `id=2` on shard B.

This is a different level of operational complexity. Cross-shard queries become expensive or impossible. Schema migrations must be coordinated across all shards. Resharding — when a shard grows too large — is painful.

**When you truly need sharding:**
- Your write throughput exceeds what a single primary can handle
- Your dataset is too large to fit on any single machine's disk
- You need geographic data locality for compliance reasons

## The Operational Cost

Most applications don't need sharding. PostgreSQL with read replicas, connection pooling (PgBouncer), and careful indexing can handle enormous workloads. Redis or Elasticsearch can offload read-heavy patterns.

Before sharding: exhaust vertical scaling, add read replicas, optimize queries, add caching layers.

Sharding is not a performance optimization — it's a last resort for scale. The teams that manage sharded databases pay a significant ongoing operational tax. Make sure the scale problem is real before paying it.

## Summary

| | Partitioning | Sharding |
|---|---|---|
| Location | Same instance | Multiple instances |
| Complexity | Low | High |
| Cross-query | Easy | Expensive |
| When | Table performance | Write/size limits |
