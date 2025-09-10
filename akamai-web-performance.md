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

# Day 2: 9-10-2025

## Module 5: Refreshing Content

### Content Refresh Tools

- Fast and Advanced Purge
  - Avoid advanced unless absolutely necessary
    Fast Purge
- REST API support
- Production and staging
- <5 seconds (purge by URL)
- ~4 min (purge by CP Code)
  Advanced Purge
- SOAP API support
- 30-40 minutes

### Content Refresh - {OPEN} APIs

### Pragma Headers

[headers available](https://techdocs.akamai.com/edge-diagnostics/docs/pragma-headers)

### Key Takeaways

## Module 6: HTTP/3 and Adaptive Acceleration

End user to edge server

### HTTP/3 in a Nutshell

- QUIC integrates TLS v1.3
- Encryption moves from application layer to transport layer
- Quicker Connection setup
- Builds on top of HTTP/2

You can have 2 & 3 enabled. The browser will request what it is capable of handling

### Adaptive Acceleration - Push & Preconnect

- Requires HTTP/2 enabled
  Steps

1. Client requests content. JS injected (origin/edge) to provide mPulse data
2. JS code injects data in beasons to edge server for offline analysis
3. Based on analysis, edge server is able to push resources or give preconnect info

### Brotli Support from Origin

Akamai can return Brotli-compressed assets from your origin and cache them on edge servers
Akamai will only request Brotli compressed content form the origin if client request also had "Accept Encoding: br, gzip"

### Key Takeaways

- Enabling H/# is easy
- H/3
  - Better security

## Module 7: Analytics

### User Insights

- mPulse - Real User Monitoring
- Akamai control center reports
- ~Log delivery service~ and DataStream

### Navigation Timing Interface

mPulse

- Navigation Timing (JS API) for measuring performance on the web

### Navigation Timing Interface: Processing Model

this is all about the timing points and how they relate to request/response events

### Perceived Performance

### RUM vs Synthetic Testing

1. RUM

- Passive
- Collect data from every user, on every browser

2. Synthetic

- Active
- Simulated health check in controlled env

### What can RUM or Synthetic tell you

            RUM             |       Synth

- Uncovers real insights | Test diff locations, browsers
- Identify pain points |
- Measure performance

### When to use RUM vs Synth

### How mPulse Works

1. User requests and mPulse-enabled page
2. Edge server injects boomerang JS library to collect web performance data
3. mPulse collects data and sends a beacon to the portal
4. Edge server receives beacon and generates download receipt

### mPulse Data

Metric Data

- DNS
- TCP
- First byte
- Base page download time
- First paint
- DOM content loaded
- DOM complete
- on-load event

Demographic Data

- Browser
- OS
- Network type and speed

Perceived Data

- Time to visual ready
- TTI
- TTFI
- Interactions
- Delayed interactions
- Rage clicks

### mPulse Features

- Real data, real time, all the time
- Full SPA support
- Correlation and analysis
- Patented "What-if" feature
  - Establish "money-routes" and find ways to tweak it for better conversion
- Most matter pages identification
- Third-party resources mastering

### mPulse JS Loader

Akamai Edge-Injected mPulse

- Updates from Akamai automatically added on release

Origin-Injected mPulse

### Akamai Control Center - User Traffic Report

### Akamai Control Center - Unique Visitors Report

### Akamai Control Center - Traffic Report

### Akamai Control Center - Responses Report

### DataStream

Where you can send data to third parties (like DataDog)

Data set params

- Can add custom fields

Available Data

- Log Info
- Message exchange data
- Request headers
- Network performance data
- Geo data
- Cache data

### Key Takeaways

## Module 8: Diagnostic Tools

This would be really helpful for internal issues

- Send a link to a rep if they're having performance issues

Hamburger Menu -> Edge Diagnostics

You can use reference codes to figure out what happened
Get error string # from user and "translate error string"

Reference codes

- 18: Request was blocked

User diagnostic data

- Create a link to give to someone who may be experiencing an issue
  - Helpful for finding out why someone might be struggling with requests/navigation
- Take a url from an end user and generate the diagnostic link

Edge to Origin

- Make requests to your origin via the platform

### Key Takeaways

- There are APIs available for all of this

## Module 8: Advanced Caching

### Advanced Caching - Review

Cache Key

- Prevents cache proliferation or pollution
- Necessary for purghing

### Purging Contnet from Edge Cache - Recap

Tools

- Fast Purge
- {OPEN} APIs
- Control center UI

### Advanced Caching - What does it mean?

Cache by device type

### Cache Key Modification - cid (Cache ID)

### Implementation

Device Characterization - Define Cached Content

### Cache Key Modification - Source

Modify cache key based in data from incoming request

- Network, URL, HTTP Method/Protocol, HTTP Headers

### Additional Use Cases

Cache generic page, bypass page for users with session
Cache different versions of page for different locations
Caching APIs
Cache based on User-Defined Variable

### Cache Generic and Bypass Cache for Session

Serve generic (no session/no-login) users from cache
Bypass cache for users with session cookie
No cache key modification required

### Different Locations

Include info derived from IP Addresses of clients, networks, routers to identify user geo location. Cache accordingly
e.g.: Cache differently for a user from California vs Canada

### API Caching

### Query Strings Parameters and Caching

Can use things like product ID in the cache key
Purging

- Fast Purge
  - Need to know _all_ the cache keys
- Purge with ECCU
  - Slow, but allows for wildcards

### Controlling Edge Cache from Origin

- Honor Cache-Control -> caching
- Edge-control Headers -> caching override
- Cache Tags from Origin -> additional purging capabilities

Edge-Control Headers

- Honored by Edge regardless of caching configuration
- Override other TTLs/Caching configuration settings
- Edge-Control headers have same spec as Cache-Control

### Cache Tagging

`Edge-Cache-Tag`
Done at origin
Done at Edge -> using Modify Incoming Response Header
Supports multiple tags
Support from Fast Purge

Example:

- Edge-Content-Tag: jackets, blue
- Edge-Content-Tag: blouse, red

### Key Takeaways

- Cache ID modification takes cache control options for setting the key beyond path, filename, and query params
- Override with edge-control headers
- Use CID for purging

## Module 9: Image and Video Optimization

Challenges with delivering images and videos on site

### Challenges of Images Online

- Demand for image rich experiences
- Different devices and browsers
- Over-downloading: downloading images of excess resolution and quality

### Challenges - Image rich experiences

Bytes delivered by web-page since Jan '11 has roughly quadrupled

### Challenges - Different Devices and Browsers

Device types

- Mobile, desktop, tablets, IoT

Browsers

- Safari, Chrome, Edge, Firefox, Opera, etc

Many different screen size and image support requirements

### Challenges - Browser-Optimized Image Formats

Safari - supports JP2
Chrome - supports WebP
Edge - JPEG XR

### Challenges - Over-Downloading

Mobile getting the same image as desktop

- Waaaaay too big

### Image & Video Manager - Introduction

- Create a variety of optimized derivative versions
- Knows about different device/browser types

### Features: Scale for Mobile and Use Best File Type

Scale for Mobile

- Preset image widths based on device size
- `imwidth` query param

Best File Type

- serve best fit based on browser

### Image and Video Manager - Policies

Policies

- Image Widths
- Compression Settings
- Additional transformations (grayscale, overlay, etc)

By Default

- also called the `.auto` policy
- breakpoints: 5000, 2048, 1024, 640, 320
- Compression encoding level 90
- no transformations

### Image and Video Manager - Parameters

`impolicy`: use a policy other than default
`imwidth`: desired image width
`imformat`: image format (webp, jpeg, etc)

### Image and Video Manager - Policy Variables

Variables are supported with the manager

### Image and Video Manager - Video

Progressive Download, Origin agnostic, Automated Optimization, Quality

Limited to videos <5 minutes long

### Image and Video Manager - API

Policies
Images
Image Collections

### Image and Video Manager Configuration

1. Add the Image and Video Manager rule in Property Manager
2. Configure your policy (or policies)

### Configuration - Property Manager

You have to cache content -> minimum 1 day, default is 30 days

### Configuration - Policy Manager: Editing a Policy

Set break points (derivative widths)
Modify based on query params

### Image and Video Manager - Compression

Structural similarity algorithm

1. Quality Level

- Normalized quality setting across all image supported formats

2. Perceptual Quality

### Perceptual Quality Compression

Uses the Structural Similarity Algo to overlay a heat map and understand compression
