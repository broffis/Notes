# Day 1: 9-9-2025

[Web Performance Foundations](https://training.akamai.com/learn/courses/351/akamai-web-performance-foundations/sessions/512/amer-akamai-web-performance-foundations)

## Learning Resources

- Tech Docs: https://techdocs.akamai.com/home
- Discussion Board: https://community.akamai.com/customers/s/?language=en_US

<!-- ## [Recording Passwords](https://training.akamai.com/learn/courses/351/akamai-web-performance-foundations/lessons/4126/recording-passwords) -->

## Module 1: Introduction

### How Akamai Edge Platform Works for Cached Content

1. Platform maps the most optimal Edge Server
2. Edge Servers apply relevant rules from customer configuration
3. Edge Server caches that data for a predetermined amount of time

### How Akamai Edge Platform Works for Non-Cached Content

1. Platform maps the most optimal Edge Server
2. Applies relevant rules
3. Finds the fastest out of three routes for future routes

- This is used for roughly 30 seconds before being reevaluated

4. Future requests use the "fastest" route

### Default Edge Server Defense: Transport Layer

- Only TCP Traffic Accepted
- Protection against TCP Floods
- Slow Read Protection
  - Sits at edge until full message received

### Default Edge Server Defense: Application Layer

- Only routes through Ports 80 (HTTP) and 443 (HTTPS)
- Strict HTTP Implementation
- Slow Loris Protection

### [Akamai Control Center](https://control.akamai.com)

#### Navigating the Control Center

#### Property Manager

- Manage configurations and exercise control

#### Access Control

- IAM role access, basically
- 3 Major components: Account -> Group -> Property

#### Property Configuration

- Business rules used by edge server

#### Rules, Match Conditions, Behaviors

- Rules = Match Condition(s) + Behavior(s)

#### CP Codes

- Content Provider Codes are used for traffic tracking, reporting, and billing
- All content must have a CP Code
- Can be used for purging

#### Setting CP Codes

### Product Portfolio

#### Security

- Application
- Infrastructure
- Zero Trust
- Security Services

#### Delivery

- App & API
  - mPulse
- Media Delivery
- Edge Services

#### Cloud Computing

- Cloud Computing
- Programmable Edge

### Core Site-Delivery Products

### DNS Record Types

- A Record
  - A: IPV4
  - AAAA: IPV6
- CNAME

### Hostnames

- Resolves to an address
- Gets Host Headers

### Akamai Edge Hostnames

### How a Property is Akamaized

Customer DNS --CNAME--> {customer dns}.edgekey.net --A,AAAA--> IP Address Edge Server

#### Staging Network

- Just for functional testing
  - Don't us for performance testing
- Quick deploys for testing
- Host names include {-staging}

### Key Takeaways

Setting up Web Performance

1. Create Origin Record to tell Akamai how to find your Origin Server
2. Configure Web Performance in Akamai
3. Test Property in Staging
4. Go live by creating CNAME record and serve traffic through Akamai

## Module 2: Secure Delivery

### TLS - HTTPS

- TLS is the standard now
  - SSL is old standard

### "TLS Everywhere" is a reality

### Certificate Signing

### Certificate Authority - Validation Types

- Domain Validation -> Applicant must prove domain control only
- Organizational Validation -> Applicant must prove domain control and pass organizational vetting
- Extended Validation -> Applicant must prove domain control and pass extended organizational vetting. CA verifies physical existence and integrity of organization

### Client Trust

- Inherited from CA's root certs

### Certificate Methods - Summary

### Akamai Networks - TLS Deployment

- Standard and Enhanced

### Edge / Origin Certificate

- Edge: End user to Edge Server
- Origin: Edge Server to Origin
- If it went End to Origin, Edge wouldn't be able to read due to encryption

### Origin SSL Cert Verification

1. Check Origin SSL Cert Verification Configuration
2. Edge server requests certificate from Origin

### Certificate Provisioning System

## Module 3: Caching

### Caching

Two types

- Caching at edge
- Browser caching

### What Should not be cached

- Dynamic data
- Legal restrictions - PII

### Downstream Caching

Cache-Control header in response

### Caching at Edge

Cache content on Akamai servers

### Caching Behavior Options

- Cache - at Edge
- No Store - don't cache
- Bypass - go to origin
- Honor origin cache - honor cache headers set at origin

### Caching HTTP Error Responses

204, 305, 404, 405, 500, 501, 502, 503, 504

### Caching at Browser

Listed at "Downstream Cacheability"

### The Cache Key

Default Cache Key contains

- Hostname
- Path
- Query String
- Internal Identifier

### Akamai Debug Headers

`Pragma`

Tools:

- ModHeader
- Charles HTTP Proxy
- cURL

### Akamai Debug - Response Headers

Header Names

- X-Cache, X-Cache-Remote, X-Cache-Key, X-True-Cache-Key, X-Checkable-Cacheable

### Key Takeaways

- Akamai can store a copy of your content
- Cache settings apply to objects cached in Akamai
- Cache key is a unique string that lets Akamai Edge look for your content

## Module 4: Variables

### Control Center Variables

- User-defined values
  - contains `PMUSER_`
- Built-in variables
  - contains `AK_` and/or `builtin.AK_`

### Set Variable Behavior

### Create Value From - Expression

- must use `{{` for varibles to pop up

### Create Value From - Extract

- Select where you want the data from

### Create Value From - Operation

### Matching on Variables

### Variable Support

- If you see `(variable support)` under something, you can use the `{{` to see variable uses

### Key Takeaways

- Variables allow for additional controls
- Create your own or use predefined ones
