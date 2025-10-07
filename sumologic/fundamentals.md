# Day 1: 10-7-2025

[Recordings](https://learn.sumologic.com/page/recorded-live-training)

## Agenda

Intros
Data Collection
Search & Analyzing Data
Alerts and Monitoring
Visualizing Data
Summary

## Introduction

[Sumo Logic Academy](https://www.sumologic.com/learn/training)

### Exams

[Training and Certifications FAQ](https://help.sumologic.com/docs/get-started/training-certification-faq/)

- Credly Badges

### What is Sumo Logic

Cloud-native data analytics platform

- Security
- Operations
- Business Intelligence Use Cases

### The Observability Solution

Resolve, Monitor, Diagnose

### The Security Solution

### What kind of data does Sumo Logic Ingest

### Architecture Highlights

#### Cloud Native

- Built on AWS
- Uses AWS AI

#### Microservices

- Autoscaling
- Increased reliability

#### Multi-tenant

- Resources are shared
- Headroom to scale

### Sumo Logic Data Pipeline

Ingestion Path:
Receiver > Kafka > Forge > Kafka > Indexer > S3 > Katta

Search Path:
Service > Stream > Katta

Queries run on Katta

### How is data organized

Partitions are used to keep data separated

Indexed Data

- Default continuous partition
- All ingested data that is not assigned to:
  - a partition
  - views populated by scheduled searches

Data Tiers

- Continuous Tier
- Frequent Tier
- Infrequent Tier

Manage Data > Logs > Partitions

- Create partitions first
- Assign partitions to data tiers later

### Taking advantage of App Catalog

Deliver

- out of the box dashboards
- saved searches
- field extraction rules

### Shared Content

For All Users

- Share log searches, metric searches, dashboards, folders
- Chose how widely it's shared
  For Admin
- Manage content to specific users and groups

### 3 Phases of Sumo Logic

1. Data Collections

   - Encrypt and compress data to Sumo from desired source

2. Search and Analyze
   - Operators and Charts
3. Visualize and Monitor
   - Alerts and Dashboards

## Data Collection

### Preparing the data to be seen

1. What do you want to know?

   - Performance, Numbers, Errors, Success rate

2. What are the resources available to you?

   - Money, Time, Expertise
   - Environments

3. Where does the data reside?

   - Environment, Infrastructure, Files, People

### Sending Data -> Metadata

Metadata tags are:

- Associated with each log message
- Attached to your log messages at collection-time
- Used to find targeted results

### Metadata: Source Category Best Practices

Common components

- Env
- Application Name
- Geography
- Region
- Business Unit

Can assign fields in key/value pairs at ingestion

### Source Category Usage Examples

1. Everything in my Prod Windows Events Env -> \_sourceCategory=prod/windows/events
2. All windows logs -> \_sourceCategory=\*/windows/\*

### Types of Collector

Installed Agents

- Java based Collector
- Open Telemetry Agent

Hosted Collector

- Hosted by Sumo

#### Installed Agents

- Can install on as many machines as you want
  - Machine needs access to the internet

##### When to use Installed vs OpenTelemetry

Use Installed

- Expect to ingest from at least 500 separate files
- Memory or CPU limits
  - 3% memory
  - 4% CPU
- Network clusters or regions are geographically separated
- More than 15000 events per second

##### When to use OpenTelemetry

- Leverage supported sources and supported platforms
- Want single agent
- Scale issues with FluentD or Kubernetes
- Looking for ARM support

#### Hosted Collector

- Each collector can be configured to 1000 sources

#### Selecting a Collector Type

### Sources

#### What is a Source?

Metric, Log, Trace from HOsts, Appliances, Infrastructure
