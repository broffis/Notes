# Best Practices for Query Efficiency

## Day 1: 10/9/2025

## Objectives

- Explain Flex Pricing Model
- Explain optimizing queries for performance and scope
- Evaluate architecture/setup for efficiency
- Write queries using best practices

## Flex pricing

- "Value driven" model

  - $0 cost for ingestion
  - Charge based on Storage (S3) and Search Data Volume

- Use indexes with metadata fields to narrow down volume of data scanned

- Cost Model
  - Metered is for scheduled queries
  - Upfront is for adhoc queries

## Search Optimization Tools

- Index-based Methods

  - Data Partitions
  - Scheduled Views

- Field-based Methods
  - Metatdata
  - Field Extraction Rules

## Basic Concepts

- Partitions in DB
  - Parse operators to extract fields from logs
- Indexes
  - Logs are stored in Sumo on an index (also called a partitions)
- Field Execution Rules

## Key phases of a query

1. Scope of the Scan

- Metadata scope
- Less data scan = Faster search performance

2. Retrieval
3. Compute

## Efficiency in log search queries

Performance Efficiency

- Partitioning
- Scheduled Views

Scope Efficiency

- Narrow scope
- Use metadata
- Use indexes or `_sourceCategory`

## Labs

### Architectural Considerations

### Alignment of architecture setup with business needs

Key considerations

- Evaluate architecture/setup for efficiency
- Create Partitions by specifying their routing

### Using Partitions

Using `_index` targets a specific partition

#### Seven Rules of Good Partition Design

1. Use same metadata for all of them
2. Keep scope simple
3. Good partition names
4. Keep high use data in small partitions
5. Avoid large default partitions
6. Avoid too many data partitions
7. RBAC by index

### Scheduled Views

Queries that run once per minute
Can be used for Scheduled searches, dashboards, and ad hoc searches
Can include historical data

#### Why Views?

## Writing Efficient Queries

- Optimize compute time

### Log query optimization

- Use keywords in log search

### Ladder of Acceleration
