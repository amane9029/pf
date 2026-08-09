Product Requirements Document (PRD)
PondFish Digital Ecosystem

Version: 1.0 (Draft)

Prepared By: SProjectX

Document Type: Product Requirements Document (PRD)

Confidentiality: This document contains the product architecture, workflows, business rules, functional requirements, and technical specifications for the PondFish Digital Ecosystem. It is intended exclusively for PondFish stakeholders and the SProjectX development team.

Document Guidelines
This PRD follows the following principles throughout the document.
Single Source of Truth (SSOT)
Every business workflow is documented exactly once.
No duplicated workflow descriptions are allowed. Every module references the original workflow instead of redefining it.
Business-Driven Documentation
Every feature exists because it solves a real business problem identified during the discovery phase.
No placeholder or generic features will be included.
Implementation Ready
Every requirement should be detailed enough that a new developer joining the project can begin implementation without requiring additional clarification.
Scope Control
Only approved features will be included in the MVP.
Future ideas will be documented separately under Future Scope and will not affect MVP development.

Table of Contents

Section 1 — Product Overview

1.1 Project Introduction
1.2 Business Background
1.3 Existing Business Workflow
1.4 Business Problems
1.5 Proposed Digital Solution
1.6 Product Objectives
1.7 Project Scope
1.8 Out of Scope

Section 2 — User Interface Blueprint

Landing Website
Customer Portal
Worker Portal
Admin Portal

Section 3 — Business Workflows

Master Business Workflow
Fish Procurement Workflow
Live Truck Tracking Workflow
Inventory Management Workflow
Customer Booking Workflow
Subscription Workflow
Payment Workflow
Worker Workflow
Order Completion Workflow
Notification Workflow
AI Workflows

Section 4 — Functional Requirements

Landing Website
Customer Module
Worker Module
Admin Module
Subscription Engine
Wallet Engine
Booking Engine
GPS Tracking
CRM
Analytics
AI Modules

Section 5 — Business Rules

Subscription Rules
Booking Rules
Inventory Rules
Payment Rules
QR Rules
Notification Rules
Security Rules

Section 6 — Database Design

ER Diagram
Database Schema
Relationships
Indexes
Constraints

Section 7 — API Specifications

Authentication APIs
Booking APIs
Inventory APIs
Subscription APIs
GPS APIs
Stripe APIs
Notification APIs
Analytics APIs

Section 8 — Technical Architecture

System Architecture
Infrastructure
Authentication
Deployment
Security
Performance
Scalability

Section 9 — Development Roadmap

MVP
Phase 2
Phase 3



SECTION 1

Product Overview

1.1 Project Introduction
Product Name
PondFish Digital Ecosystem

Developed By
SProjectX

Product Type
Web Application with Mobile Application (Android & iOS) built using Capacitor from the same codebase.

Target Platforms
Responsive Website
Android Application (APK / AAB)
iOS Application (IPA)
Technology Direction
The platform will be developed as a responsive Next.js application.
The same frontend will be converted into Android and iOS applications using Capacitor, allowing a single codebase to serve web and mobile users while still accessing native device capabilities such as push notifications, camera, QR scanning, GPS integration, and local device features.


1.2 Business Background

PondFish is a fresh fish retail business that sources live fish directly from organic farms and transports them to its retail warehouse for sale.
Unlike traditional seafood stores, customers expect fresh fish every day and frequently contact the business to ask:

Has today's fish arrived?
Which fish are available today?
What time will the truck reach the store?

Currently, this communication is handled manually through phone calls, creating a significant operational burden.
The business also operates a subscription model where customers receive weekly purchase benefits based on their selected subscription plan. Managing these benefits manually increases the chance of errors and slows down the checkout process.
As the customer base grows, manual inventory updates, payment calculations, booking management, and customer communication become increasingly difficult to manage efficiently.
The purpose of this project is to digitize these operations into a single integrated platform.

1.3 Business Problems

The following operational challenges have been identified during the product discovery phase:
Customer Communication
Customers repeatedly call the business to check whether fresh fish has arrived.
This creates unnecessary workload for staff and delays customer service.
No Live Delivery Visibility
Customers have no way of knowing the live location of the delivery truck or the estimated arrival time.
Manual Subscription Calculations
Staff currently need to manually determine how much of a customer's purchase is covered by their subscription and how much must be paid separately.
This increases billing errors.
No Reservation System
Customers visit the store without knowing whether their preferred fish is still available.
This often leads to waiting, stock conflicts, and customer dissatisfaction.
Manual Worker Operations
Workers spend time identifying customers and calculating subscription benefits instead of focusing on fish preparation.
Limited Business Insights

The business has no centralized system for tracking:

Customer purchase history
Subscription usage
Fish demand trends
Inventory consumption
Revenue analytics

1.4 Proposed Digital Solution

The proposed solution is an integrated digital ecosystem that connects every stage of the business.
The platform will provide:

Live truck tracking from farm to warehouse
Real-time fish availability
Subscription-based purchasing
Digital booking with QR verification
Worker-assisted order fulfillment
Automated payment calculations
CRM and analytics
AI-powered demand forecasting
Personalized fish recommendations
Predictive inventory alerts
All operations will be managed from a unified platform, accessible through both the website and the Capacitor-based mobile application.





SECTION 2
Product Interface Blueprint

2.1 Introduction

The PondFish Digital Ecosystem is designed around four independent interfaces, each serving a specific business function. Although all interfaces connect to the same backend and database, each interface provides only the functionality required for its intended user.

The four interfaces are:

PondFish Digital Ecosystem

├── Landing Website
├── Customer Portal
├── Worker Portal
└── Admin Portal

Each interface is documented independently. This approach ensures there is no overlap between modules and allows future developers to understand the responsibilities of each interface without referring to unrelated sections.

2.2 Interface Navigation Overview

This section defines the role of each interface within the ecosystem.

Interface	Primary User	Purpose
Landing Website	Public Visitors	Brand awareness, subscription information, today's fish, app download, customer registration
Customer Portal	Registered Customers	Fish booking, subscription management, QR ticket, booking history, notifications
Worker Portal	Store Workers	Scan booking QR, retrieve booking details, complete fish handover
Admin Portal	Business Owner / Staff	Inventory, subscriptions, truck tracking, bookings, CRM, analytics, notifications
2.3 Interface Relationship
                      Landing Website
                             │
                  Register / Login
                             │
                             ▼
                    Customer Portal
                             │
                     Create Booking
                             │
                             ▼
                     Worker Portal
                             │
                  Complete Booking
                             │
                             ▼
                      Admin Portal

The interfaces communicate through a shared backend. No interface communicates directly with another interface. Every interaction is performed through backend APIs to maintain security, consistency, and centralized business logic.

2.4 Interface Documentation Standard

To maintain consistency throughout the PRD, every interface and every screen will follow the same documentation format.

Each screen will contain the following sections:

Screen Information
Screen ID
Screen Name
Purpose
Primary User
Layout Overview
Header
Navigation
Main Content
Action Area
Footer (if applicable)
Components

Every visible UI component on the screen.

Example:

Search Bar
Fish Cards
Subscription Card
QR Code
Buttons
Tables
Status Indicators
User Actions

Every action the user can perform.

Example:

View
Search
Filter
Book
Pay
Scan
Complete
Navigation Rules

Defines where the user can navigate from the current screen and how they return.

Business Logic

Describes the operational rules applied to the screen.

Examples:

Booking validation
Subscription verification
Quantity calculation
QR generation
Inventory updates
Data Requirements

Defines the data required from the backend.

Example:

Customer Profile
Fish Inventory
Subscription Details
Booking Information
Validation Rules

Defines all validations performed before an action is completed.

Example:

Subscription Active
Fish Available
Quantity Within Stock
Payment Successful
Empty States

Defines the UI when no data is available.

Example:

"No fish available today."

Error States

Defines system behavior when an operation fails.

Example:

"Unable to retrieve inventory."

Responsive Behaviour

Defines how the screen adapts across:

Desktop
Tablet
Mobile (Capacitor)
2.5 Screen Identification Convention

To keep the document organized and make it easier to reference screens in future sections (APIs, Database, Workflows, QA), every screen will have a unique identifier.

Landing Website
LW-01  Home

LW-02  Today's Fish

LW-03  Subscription Plans

LW-04  About Us

LW-05  Contact
Customer Portal
CP-01  Authentication

CP-02  Home Dashboard

CP-03  Fish Marketplace

CP-04  Fish Details

CP-05  Booking

CP-06  Checkout

CP-07  QR Ticket

CP-08  Subscription

CP-09  Wallet

CP-10  Notifications

CP-11  Booking History

CP-12  Profile

CP-13  Settings
Worker Portal
WP-01  Login

WP-02  QR Scanner

WP-03  Booking Details

WP-04  Complete Order
Admin Portal
AP-01  Dashboard

AP-02  Inventory

AP-03  Bookings

AP-04  Subscriptions

AP-05  Live Truck Tracking

AP-06  Notifications

AP-07  CRM

AP-08  Analytics

AP-09  Settings
2.6 Documentation Sequence

To mirror the real user journey, the interfaces will be documented in the following order:

Landing Website – Public-facing experience and customer acquisition.
Customer Portal – Authentication, fish browsing, booking, subscriptions, and customer services.
Worker Portal – QR scanning and order completion.
Admin Portal – Business operations, inventory, logistics, CRM, analytics, and system management.

This sequence ensures that the PRD follows the natural lifecycle of the product, beginning with customer acquisition and ending with operational management.




2.7 Landing Website Interface Specification

2.7.1 Purpose

The Landing Website is the public entry point into the PondFish Digital Ecosystem. It represents the PondFish brand and serves as the first interaction for potential and existing customers.

The website is designed to educate visitors about PondFish, showcase the freshness and quality of the products, display the current day's fish availability, explain the subscription model, and encourage customers to either register or download the mobile application.

The Landing Website is not responsible for customer bookings, subscription management, wallet operations, or order processing. Those functions belong to the authenticated Customer Portal.

2.7.2 Business Objectives

The Landing Website is designed to achieve the following objectives:

Introduce PondFish as a premium fresh fish retailer.
Increase customer trust through transparency in sourcing and operations.
Display today's available fish inventory.
Explain the subscription model in a simple and understandable way.
Encourage visitors to create an account.
Encourage users to install the PondFish mobile application.
Provide store information and contact details.
2.7.3 Target Audience

The Landing Website is intended for users who have not yet entered the operational platform.

Primary audience includes:

First-time visitors
Existing customers checking general information
Customers comparing subscription plans
Visitors interested in downloading the application
Customers looking for store location or contact details

No login is required to access this interface.

2.7.4 Website Structure

The Landing Website consists of the following sections.

LW-01 Home

│

├── Navigation Bar

├── Hero Section

├── Today's Fresh Fish

├── How PondFish Works

├── Subscription Plans

├── Why Choose PondFish

├── Mobile App Promotion

├── Contact Information

└── Footer

All sections are contained within a single responsive homepage.

2.7.5 Navigation Bar
Purpose

The navigation bar provides quick access to the primary informational sections of the website and allows visitors to access the Customer Portal.

Components
Company Logo

Position:

Top Left

Action:

Returns to Homepage.

Navigation Menu

The navigation contains:

Home

Today's Fish

Subscription Plans

About PondFish

Contact

Login

Download App
Login Button

Purpose

Redirects users to the Customer Authentication Portal.

No authentication occurs on the Landing Website.

Download App Button

Purpose

Direct users to install the PondFish mobile application.

On Android

Downloads APK or redirects to Google Play when available.

On iOS

Redirects to the App Store when released.

2.7.6 Hero Section
Purpose

Immediately communicate PondFish's core value proposition.

The Hero Section should answer three questions within the first few seconds:

What does PondFish offer?
Why is it different?
What should the visitor do next?
Layout

Left Side

Contains:

Main Heading
Supporting Description
Primary Action Buttons

Right Side

Contains:

Premium hero image of fresh fish.
Illustration or visual representing farm-to-store freshness.
Primary Heading

Example:

Fresh Fish Directly from Organic Farms, Delivered Fresh Every Day.

The final marketing copy may change during branding.

Supporting Description

A short paragraph explaining that PondFish sources fish directly from trusted organic farms, transports them daily, and allows customers to reserve their preferred fish before visiting the store.

Primary Actions

Primary Button

View Today's Fish

Secondary Button

Download Mobile App
2.7.7 Today's Fresh Fish
Purpose

Allow visitors to immediately understand what fish are currently available before creating an account.

This section is informational only.

Visitors cannot purchase or reserve fish from this page.

Fish Card Components

Each fish card displays:

Fish Image
Fish Name
Price per Kilogram
Availability Status
Category (Freshwater / Marine, if applicable)
Availability Status

The system supports the following values:

Available Today

Coming Today

Out of Stock

These values are automatically synchronized with the inventory managed through the Admin Portal.

User Interaction

Clicking on a fish card opens a detailed information page.

If the visitor selects Book Now, they are redirected to the Login page because bookings require authentication.

2.7.8 How PondFish Works
Purpose

Educate new customers about the business process.

Rather than lengthy text, this section presents a simple visual journey.

Organic Farm

↓

Fresh Fish Collection

↓

Transportation

↓

Warehouse

↓

Customer Booking

↓

Store Pickup

Each step includes an icon, title, and brief description.

This section is informational and does not include any interactive functionality.

2.7.9 Subscription Plans
Purpose

Clearly explain the two subscription plans offered by PondFish.

This section focuses on quantity-based benefits, reflecting the approved business model.

Type 1 Subscription

Monthly Subscription Fee:

₹2,000

Weekly Benefit:

Up to 2 Kg of fish per week.
Customers may choose any available fish.
If the selected quantity exceeds 2 Kg, the additional quantity must be paid through Razorpay.
Weekly allowance resets automatically every seven days.
Type 2 Subscription

Monthly Subscription Fee:

₹6,000

Weekly Benefit:

Up to 3 Kg of fish per week.
Customers may choose any available fish.
If the selected quantity exceeds 3 Kg, the additional quantity must be paid through Razorpay.
Weekly allowance resets automatically every seven days.

Each subscription card includes a single action button:

Choose Subscription

Visitors who are not logged in are redirected to the authentication screen before continuing.

2.7.10 Why Choose PondFish

This section highlights the key advantages of the service.

The following value propositions are displayed:

Fresh Fish Every Day
Direct Sourcing from Organic Farms
Live Fish Delivery Tracking
Quantity-Based Subscription Plans
QR-Based Pickup Experience
Transparent Pricing

Each point is presented with a supporting icon and short explanation.

2.7.11 Mobile Application Promotion

The PondFish mobile application is the recommended platform for regular customers.

This section encourages visitors to install the application.

Displayed information includes:

Available on Android
iOS Coming Soon (or available when released)
Push Notifications
Live Truck Tracking
Faster Booking Experience
QR-Based Store Pickup

Available actions:

Download APK

Download from Google Play (Future)

Download from App Store (Future)
2.7.12 Contact Section

This section provides official business contact information.

Information displayed:

Store Address
Business Phone Number
Business Email
Operating Hours
Embedded Google Maps Location
WhatsApp Contact (optional)

A simple enquiry form allows visitors to submit questions or requests.

2.7.13 Footer

The footer contains:

Company Information
Quick Navigation Links
Privacy Policy
Terms & Conditions
Copyright Information
Social Media Links
2.7.14 Navigation Flow
Visitor Opens Website
        │
        ▼
Reads About PondFish
        │
        ▼
Views Today's Fish
        │
        ▼
Explores Subscription Plans
        │
        ▼
Downloads Mobile App
        │
        ▼
Creates Account
        │
        ▼
Redirected to Customer Portal
2.7.15 Responsive Behaviour

The Landing Website is fully responsive and optimized for:

Desktop
Full navigation menu
Multi-column content layout
Large promotional visuals
Tablet
Condensed navigation
Two-column responsive layout
Mobile (Browser & Capacitor)
Collapsible navigation menu
Single-column content flow
Touch-friendly buttons
Optimized spacing for smaller screens
Safe-area support for modern devices

The functionality remains identical across all devices, with only the layout adapting to screen size.

2.7.16 Landing Website Boundaries

The Landing Website must not perform any authenticated business operations.

The following actions are intentionally excluded:

Booking fish
Subscription activation
Wallet management
Viewing booking history
QR ticket generation
Payment processing
Worker operations
Administrative functions

Any action requiring authentication redirects the user to the Customer Portal.




2.8 Customer Portal Interface Specification
2.8.1 Purpose

The Customer Portal is the primary operational interface of the PondFish Digital Ecosystem. It is designed specifically for registered customers and provides access to all customer-facing services, including fish discovery, subscription management, booking, QR-based pickup, notifications, purchase history, and account management.

Unlike the Landing Website, which is informational, the Customer Portal is an authenticated environment where customers interact directly with the PondFish business.

The Customer Portal is available through both the responsive web application and the Capacitor-based mobile application, providing a consistent experience across desktop, tablet, and mobile devices.

2.8.2 Business Responsibilities

The Customer Portal is responsible for enabling customers to:

Create a new customer account.
Authenticate using mobile number and OTP verification.
Complete their customer profile.
Browse today's available fish.
View fish details.
Book fish before visiting the store.
Manage their subscription.
Monitor their remaining weekly fish allowance.
Monitor their remaining subscription balance.
Pay for additional quantity through Razorpay.
Receive QR booking tickets.
View booking history.
Receive application notifications.
Track live fish delivery vehicles.
Manage their personal profile.

The Customer Portal is designed to minimize customer waiting time by allowing fish to be booked before arriving at the store.

2.8.3 Interface Boundaries

The Customer Portal is limited to customer-facing functionality.

The following operations are intentionally excluded from this interface:

Inventory management.
Fish stock updates.
Subscription configuration.
Worker operations.
QR scanning.
Customer verification by workers.
Delivery truck publishing.
Administrative reports.
CRM management.
Business analytics.

These responsibilities belong to the Worker Portal and Admin Portal.

2.8.4 Navigation Structure

The Customer Portal uses a consistent navigation structure across all authenticated screens.

Desktop Navigation

Left Sidebar

Home

Fish Marketplace

Subscription

Booking History

Notifications

Profile

Settings

Top Header

Customer Name
Current Subscription
Notification Icon
Profile Menu
Mobile Navigation (Capacitor & Mobile Browser)

Bottom Navigation

Home

Fish

Subscription

Notifications

Profile

The Booking flow is initiated directly from the Fish Marketplace and therefore does not require a dedicated navigation item.

2.8.5 Customer Portal Screen Hierarchy
Customer Portal

├── CP-01 Customer Access
│     ├── Register
│     ├── Login
│     ├── OTP Verification
│     └── Complete Profile
│
├── CP-02 Home Dashboard
│
├── CP-03 Fish Marketplace
│
├── CP-04 Fish Details
│
├── CP-05 Booking
│
├── CP-06 Checkout
│
├── CP-07 QR Ticket
│
├── CP-08 Subscription
│
├── CP-09 Notifications
│
├── CP-10 Booking History
│
├── CP-11 Profile
│
└── CP-12 Settings
Group A — Customer Access
CP-01 Customer Access
Purpose

The Customer Access module manages both new customer registration and existing customer authentication.

Authentication is entirely mobile-number based using Firebase Authentication and OTP verification.

The application does not use passwords, email authentication, or social logins.

Registration Flow

A new customer who has never used PondFish must complete registration before accessing the Customer Portal.

Registration Process
Open Application

↓

Select "Create Account"

↓

Enter Mobile Number

↓

Receive OTP

↓

Verify OTP

↓

Complete Profile

↓

Enter Customer Portal
Registration Form

After OTP verification, the customer must complete the following information:

Field	Required
Full Name	Yes
Mobile Number	Auto-filled after OTP verification
Age	Yes
Area / Locality	Yes

The mobile number becomes the customer's unique login identifier and cannot be modified without an account recovery process.

Existing Customer Login

Returning customers authenticate using the same process.

Enter Mobile Number

↓

Receive OTP

↓

Verify OTP

↓

Login Successful

↓

Customer Dashboard

Since customer information already exists, profile completion is skipped.

Authentication Technology

Authentication is powered by:

Firebase Authentication (Phone Authentication)
Firebase OTP Verification
Firebase Cloud Messaging (FCM) for OTP delivery and future push notifications

The system does not support:

Password authentication
Forgot Password
Email login
Username login
Social login
Authentication Validation Rules

Registration is completed only when:

A valid mobile number is entered.
OTP verification succeeds.
Full Name is provided.
Age is provided.
Area is selected or entered.

If OTP verification fails, registration cannot proceed.

Successful Authentication

After successful login or registration, the system performs the following actions:

Retrieves the customer profile.
Retrieves the active subscription (if available).
Retrieves the current subscription balance.
Retrieves the weekly fish allowance.
Retrieves active bookings.
Retrieves recent notifications.
Redirects the customer to the Home Dashboard.
Business Rules
One mobile number can be associated with only one customer account.
OTP verification is mandatory for every login.
Profile completion is mandatory only during first-time registration.
Customers cannot access any authenticated feature until registration is complete.
Authentication sessions remain active until the customer logs out or the session expires.
Interface Boundary

The Customer Access module is responsible only for account creation and authentication.

It does not:

Purchase subscriptions.
Create bookings.
Display fish inventory.
Process payments.
Generate QR tickets.

Those functions begin after successful authentication within the Customer Portal.






2.8.6 CP-02 — Customer Home Dashboard
Screen Information
Property	Description
Screen ID	CP-02
Screen Name	Customer Home Dashboard
Primary User	Registered Customer
Access	Authenticated Users Only
Entry Point	After successful login or registration
Exit Points	Fish Marketplace, Subscription, Notifications, Profile, Booking History
Purpose

The Customer Home Dashboard serves as the customer's personal control center within the PondFish Digital Ecosystem.

Instead of functioning as a traditional shopping homepage, it provides a real-time overview of the customer's subscription, weekly fish allowance, live truck status, today's available fish, active bookings, and recent notifications.

The dashboard should allow customers to understand the current state of their account within a few seconds without navigating to multiple screens.

Business Objective

The dashboard is designed to answer the following questions immediately after login:

Is my subscription active?
How much subscription balance is remaining?
How much fish can I still claim this week?
Has today's fish arrived?
Which fish are available today?
Is there an active booking?
Are there any important notifications?

The customer should not need to search for this information across multiple pages.

Layout Overview
Desktop Layout
---------------------------------------------------------
 Header
---------------------------------------------------------

 Welcome Card

---------------------------------------------------------

 Subscription Summary

 Weekly Allowance

 Subscription Balance

---------------------------------------------------------

 Live Truck Status

 Today's Fish

---------------------------------------------------------

 Active Booking

 Notifications

---------------------------------------------------------
Mobile Layout (Capacitor)
Welcome

↓

Subscription Summary

↓

Weekly Allowance

↓

Today's Fish

↓

Live Truck

↓

Active Booking

↓

Recent Notifications

The mobile version follows a vertical layout optimized for one-handed navigation.

Components
Component 1 — Welcome Card
Purpose

Provide a personalized greeting and quick account summary.

Information Displayed
Good Morning, Stevan

Member Since:
January 2026

Current Subscription:
Type 1

Greeting changes dynamically according to the time of day.

Component 2 — Subscription Summary
Purpose

Provide a quick overview of the customer's current subscription.

Information Displayed
Subscription

Type 1

Status

Active

Recharge Required (Only when expired)

If no subscription exists, display:

No Active Subscription

Purchase a subscription to start booking fish.

Primary Action

View Subscription
Component 3 — Subscription Balance
Purpose

Display the remaining prepaid balance of the subscription.

Information Displayed
Subscription Balance

₹1,420 Remaining

If balance reaches zero:

Subscription Balance

₹0

Recharge Required

Primary Action

Recharge Subscription

The recharge process will be defined in the Subscription Module.

Component 4 — Weekly Fish Allowance
Purpose

Display the customer's weekly fish usage.

Information Displayed
Weekly Allowance

2 Kg

Used This Week

1.4 Kg

Remaining

0.6 Kg

Additional Information

Next Reset

Monday

The reset date is calculated automatically by the backend.

Component 5 — Today's Fresh Fish
Purpose

Provide quick access to today's available inventory.

The dashboard displays a limited preview.

Each Fish Card contains:

Fish Image
Fish Name
Price per Kg
Availability

Primary Action

View All Fish

Selecting a fish opens CP-04 Fish Details.

Component 6 — Live Truck Status
Purpose

Provide customers with real-time delivery information.

The dashboard displays a compact tracking card.

Example

Fresh Fish Delivery

Current Status

On the Way

ETA

18 Minutes

Current Location

Kukatpally

Primary Action

Track Live

Selecting the card opens the Live Tracking screen (defined later in the Customer Portal).

If no active delivery exists:

No Delivery In Progress
Component 7 — Active Booking
Purpose

Allow customers to quickly access their latest booking.

If an active booking exists, display:

Booking ID

PF-10021

Fish

Rohu

Quantity

2 Kg

Primary Action

View QR Ticket

Selecting the card opens CP-07 QR Ticket.

If no booking exists:

No Active Booking
Component 8 — Recent Notifications
Purpose

Display the three most recent notifications.

Examples:

Fresh fish has arrived.
Weekly allowance has been reset.
Booking completed.

Primary Action

View All Notifications

Selecting the card opens CP-09 Notifications.

User Actions

The customer can perform the following actions from the dashboard:

View subscription details.
Recharge subscription.
Browse today's fish.
Open fish details.
Track live delivery.
View active QR ticket.
Open booking history.
Read notifications.
Access profile.
Navigate to settings.

No booking or payment actions occur directly on the dashboard.

Data Requirements

The dashboard requires the backend to provide:

Customer profile.
Active subscription.
Subscription balance.
Weekly fish allowance.
Next reset date.
Today's available fish.
Active delivery status.
Active booking.
Recent notifications.

The dashboard should load all required information through a single aggregated dashboard API to reduce loading time.

Loading State

While dashboard data is loading:

Show skeleton loaders for all cards.
Prevent interaction until required data is available.
Load independent cards asynchronously where appropriate to improve perceived performance.
Empty States

The dashboard must handle missing data gracefully.

Examples:

No subscription:

Purchase a subscription to start booking fish.

No fish today:

No fresh fish available today.

No booking:

You don't have any active bookings.

No notifications:

You're all caught up.
Error States

If data cannot be retrieved:

Unable to load dashboard information.

Please try again.

The customer may retry without leaving the screen.

Navigation Rules

From this screen the customer can navigate to:

Fish Marketplace
Subscription
Booking History
Notifications
Profile
Settings
QR Ticket
Live Truck Tracking

The Home Dashboard itself cannot create bookings or perform payments directly.

Business Rules
Subscription information is always retrieved from the latest backend data.
Weekly allowance values are read-only and cannot be edited by the customer.
Subscription balance updates immediately after successful bookings.
Live truck information is displayed only when the admin has published an active delivery.
Fish availability is synchronized with the Admin Inventory Module.
Only one active booking is highlighted on the dashboard. Historical bookings are accessed through Booking History.
Interface Boundary

The Customer Home Dashboard is an information and navigation interface.

It is responsible for summarizing the customer's current account status and providing quick access to other modules.

The dashboard does not:

Create bookings.
Modify subscriptions.
Process payments.
Generate QR tickets.
Update customer information.
Manage inventory.

Those responsibilities belong to their respective modules, which will be defined later in this PRD.






2.8.7 Group C – Fish Marketplace
CP-03 — Fish Marketplace
Screen Information
Property	Description
Screen ID	CP-03
Screen Name	Fish Marketplace
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Fish Marketplace is the primary discovery screen where customers browse today's available fish.

This screen acts as the digital fish counter, allowing customers to explore all fish currently available before making a booking decision.

It is intentionally designed as a catalog interface and does not perform booking, payment, or subscription calculations.

Business Objective

Provide customers with real-time visibility into available fish inventory, reducing uncertainty before visiting the store and encouraging advance bookings.

Screen Layout
---------------------------------------------------------

Search Bar

---------------------------------------------------------

Category Filters

---------------------------------------------------------

Today's Available Fish

Fish Cards Grid

---------------------------------------------------------

The layout should prioritize simplicity and fast browsing while remaining fully responsive across desktop and mobile devices.

Components
Search Bar

Allows customers to search fish by name.

Example:

Search Fish...

Search updates results dynamically.

Category Filter

Available filter options may include:

All Fish

Freshwater

Marine

Seasonal

The available categories are managed by the Admin Portal and loaded dynamically.

Availability Filter

Customers can filter fish by availability.

Available options:

Available Today

Coming Soon

Out of Stock

By default, only Available Today fish are displayed.

Customers may optionally enable other availability states.

Fish Card

Each fish is displayed as an individual card.

Every Fish Card contains:

Fish Image
Fish Name
Price per Kilogram
Availability Status
Short Freshness Indicator
"View Details" button

Example

🐟 Rohu

₹320 / Kg

Available Today

[ View Details ]

The Fish Marketplace intentionally avoids displaying technical information or booking controls.

User Actions

Customers can:

Search fish
Filter fish
Browse categories
Open Fish Details

Customers cannot:

Book fish
Make payments
Modify subscriptions

Those actions begin in the next screen.

Navigation

Selecting any fish redirects the customer to:

CP-04 — Fish Details

Search and filter selections remain active when the customer returns to the marketplace.

Data Requirements

The Fish Marketplace retrieves:

Fish Name
Fish Image
Price per Kilogram
Category
Availability Status
Display Priority

No subscription or booking information is requested on this screen.

Empty State

If no fish are available:

No Fresh Fish Available Today.

Please check back later or enable notifications to receive updates when new fish arrive.
Error State

If inventory cannot be retrieved:

Unable to load today's fish.

Please try again.
Screen Boundary

The Fish Marketplace is responsible only for displaying fish inventory.

It does not:

Reserve inventory
Calculate subscription usage
Validate quantity
Process payments
Create bookings

These responsibilities belong to the subsequent booking flow.










CP-04 — Fish Details
Screen Information
Property	Description
Screen ID	CP-04
Screen Name	Fish Details
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Fish Details screen provides complete information about a selected fish before the customer initiates a booking.

This screen allows customers to understand product availability, pricing, freshness, source information, and subscription eligibility before proceeding to the booking process.

The Fish Details screen does not create bookings or process payments. It serves as the final decision point before entering the booking workflow.

Business Objective

Provide customers with sufficient product information to confidently reserve fresh fish without requiring assistance from store staff.

The information displayed on this screen should eliminate uncertainty regarding availability, subscription eligibility, and pricing.

Screen Layout
Desktop
----------------------------------------------------------

Breadcrumb

↓

Fish Image Gallery         Fish Information

↓

Additional Information

↓

Subscription Information

↓

Buy Now Button

----------------------------------------------------------
Mobile
Fish Image

↓

Fish Information

↓

Availability

↓

Origin Information

↓

Subscription Information

↓

Buy Now

The layout should prioritize readability and require minimal scrolling.

Components
Fish Image

Displays high-quality images of the selected fish.

If multiple images exist, customers can swipe between them.

Images are managed through the Admin Portal.

Fish Information

Displays:

Fish Name

Category

Price Per Kilogram

Example

Rohu

Freshwater Fish

₹320 / Kg
Availability

Displays the current inventory status.

Possible values

Available Today

Coming Today

Out of Stock

If the fish is unavailable, the Buy Now button is disabled.

Freshness Information

Displays freshness information provided by the business.

Example

Freshly Arrived Today

Directly Sourced from Organic Farm

This information is managed through the Admin Portal.

Place of Origin

Displays the source location of the fish.

Example

Source Farm

Organic Fish Farm

Warangal

If available, additional information may include:

Farm Name
District
State

This improves customer trust and transparency.

Description

Displays a short description of the fish.

Example

Fresh Rohu sourced directly from certified organic farms and delivered on the same day for maximum freshness.
Subscription Information

This section is specific to PondFish.

Instead of generic pricing information, it explains how the customer's subscription applies to this fish.

Example

Your Subscription

Type 1

Weekly Allowance

2 Kg

Remaining This Week

1.2 Kg

If no active subscription exists

No Active Subscription

Purchase a subscription to enjoy weekly fish benefits.
Pricing Information

Displays

Price

₹320 / Kg

Below the price, include an informational note.

Example

If your selected quantity exceeds your remaining weekly allowance, the additional quantity will be charged during checkout.

This informs customers before they begin the booking process.

Buy Now Button

Primary Button

Buy Now

Selecting this button navigates the customer to:

CP-05 — Booking

No booking is created at this stage.

User Actions

The customer can:

View fish information.
View pricing.
View availability.
View source location.
Review subscription allowance.
Start the booking process.

The customer cannot:

Select quantity.
Make payments.
Confirm bookings.

These actions belong to the Booking module.

Navigation

Customer enters from:

CP-03 Fish Marketplace

Customer exits to:

CP-05 Booking

Returning to the marketplace preserves previous search and filter selections.

Data Requirements

The screen requires the following data:

Fish Information
Fish ID
Fish Name
Images
Description
Category
Pricing
Price per Kilogram
Inventory
Availability Status
Current Stock Indicator
Source Information
Farm Name
District
State
Customer Subscription
Subscription Type
Remaining Weekly Quantity
Subscription Balance
Subscription Status
Validation Rules

The system validates:

Fish exists.
Fish is available.
Customer is authenticated.

No booking validation occurs on this screen.

Empty State

If the selected fish is unavailable

This fish is currently unavailable.

Please explore today's available fish.

The Buy Now button remains disabled.

Error State

If fish information cannot be loaded

Unable to load fish details.

Please try again.
Screen Boundary

The Fish Details screen provides product information only.

It does not:

Reserve stock.
Select booking quantity.
Calculate subscription usage.
Calculate additional charges.
Process Razorpay payments.
Generate bookings.
Generate QR tickets.

Those responsibilities begin in CP-05 – Booking.





2.8.8 Group D – Booking Journey

The Booking Journey consists of three connected screens:

CP-05 Booking

↓

CP-06 Checkout

↓

CP-07 QR Ticket

These screens together complete a single business transaction.



CP-05 — Booking
Screen Information
Property	Description
Screen ID	CP-05
Screen Name	Booking
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Booking screen is the first transactional step in the customer journey.

After selecting a fish, the customer arrives on this screen to specify the quantity they wish to purchase.

The system validates the booking against the customer's subscription (if one exists), determines whether additional payment is required, and prepares the booking summary before checkout.

No payment is processed on this screen.

Business Objective

Allow customers to reserve their preferred quantity of fish while automatically applying subscription benefits where applicable.

The customer should clearly understand:

How much fish they are booking.
Whether they have an active subscription.
How much of the selected quantity is covered by the subscription.
Whether additional payment is required.
The estimated amount payable before proceeding to checkout.
Screen Layout
---------------------------------------------------------

Selected Fish

↓

Price Information

↓

Quantity Selector

↓

Subscription Summary

↓

Booking Summary

↓

Continue to Checkout

---------------------------------------------------------
Components
Selected Fish

Displays the fish selected in CP-04.

Information displayed:

Fish Image
Fish Name
Price per Kilogram
Availability
Quantity Selector

Allows the customer to choose the quantity to reserve.

The selector supports:

Increase Quantity
Decrease Quantity
Manual Quantity Entry (optional)

Example:

Quantity

[-]   2.5 Kg   [+]

The quantity cannot exceed the available stock.

Subscription Summary

The information displayed depends on the customer's subscription status.

Customer with Active Subscription

Example:

Subscription

Type 1

Status

Active

Weekly Allowance

2 Kg

Remaining This Week

1.5 Kg
Customer without Subscription

Example:

No Active Subscription

You can still continue with your booking.

The full booking amount will be payable during checkout.

A secondary action may be shown:

View Subscription Plans

This action is optional and should not interrupt the booking flow.

Booking Summary

This section dynamically updates as the customer changes the quantity.

Example 1 – Active Subscription Within Weekly Limit
Selected Quantity

1.5 Kg

Covered by Subscription

1.5 Kg

Additional Payment

₹0
Example 2 – Active Subscription Exceeding Weekly Limit
Selected Quantity

3 Kg

Covered by Subscription

2 Kg

Additional Quantity

1 Kg

Estimated Payment

₹320
Example 3 – No Subscription
Selected Quantity

2 Kg

Subscription Coverage

Not Applicable

Estimated Payment

₹640
Continue to Checkout

Primary Button

Continue to Checkout

Selecting this button navigates the customer to CP-06 Checkout.

No booking record is created until checkout is completed successfully.

User Actions

The customer can:

Modify booking quantity.
Review subscription benefits.
View estimated payable amount.
Continue to checkout.

The customer cannot:

Complete payment.
Generate QR tickets.
Confirm bookings.
Navigation

Entry:

CP-04 Fish Details

Exit:

CP-06 Checkout

Returning to CP-04 preserves the selected fish.

Data Requirements

The Booking screen requires:

Fish Information
Fish ID
Fish Name
Price per Kilogram
Current Stock
Customer Information
Customer ID
Subscription Status
Subscription Type
Remaining Weekly Allowance
Remaining Subscription Balance
Validation Rules

Before continuing:

Customer must be authenticated.
Fish must still be available.
Requested quantity must not exceed available stock.
Subscription information must be retrieved successfully.
Estimated payment must be calculated.

If any validation fails, checkout is disabled until the issue is resolved.

Empty State

If the fish becomes unavailable before booking:

This fish is no longer available.

Please return to the marketplace and select another fish.
Error State

If booking information cannot be calculated:

Unable to calculate your booking.

Please try again.
Screen Boundary

The Booking screen is responsible only for preparing the booking.

It does not:

Process Razorpay payments.
Reserve inventory.
Create booking records.
Generate QR codes.
Deduct subscription balance.
Update weekly allowance.

These operations occur only after successful payment (if required) during the Checkout process.









CP-06 – Checkout

This covers all scenarios and is consistent with modern booking platforms.

CP-06 — Checkout
Screen Information
Property	Description
Screen ID	CP-06
Screen Name	Checkout
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Checkout screen is the final verification step before confirming a booking.

It presents a complete summary of the customer's booking, automatically applies subscription benefits where applicable, calculates the payable amount, and initiates the payment process when required.

The customer reviews the booking and confirms the transaction from this screen.

Business Objective

Provide complete transparency before booking confirmation.

The customer should clearly understand:

What fish is being booked.
How much quantity is reserved.
How much quantity is covered by the subscription.
How much quantity requires payment.
The final payable amount.
The selected pickup location.
The payment method (if required).

Only after confirmation should the booking be created.

Screen Layout
---------------------------------------------------------

Booking Summary

↓

Subscription Summary

↓

Payment Summary

↓

Pickup Information

↓

Terms & Confirmation

↓

Confirm Booking

---------------------------------------------------------
Components
Booking Summary

Displays the selected fish.

Information displayed:

Fish Image
Fish Name
Price per Kilogram
Selected Quantity

Example

Fish

Rohu

Selected Quantity

2.5 Kg

Price

₹320 / Kg
Subscription Summary

The system displays different information depending on the customer's subscription status.

Active Subscription

Example

Subscription

Type 1

Weekly Allowance Remaining

2 Kg

Subscription Balance

₹1,480

The system automatically calculates:

Covered by Subscription

2 Kg
No Active Subscription

Example

No Active Subscription

Full booking amount will be charged.
Payment Summary

This section is generated automatically by the backend.

Scenario 1

Subscription covers the full quantity.

Example

Selected Quantity

2 Kg

Covered by Subscription

2 Kg

Payable Quantity

0 Kg

Payable Amount

₹0
Scenario 2

Quantity exceeds the weekly allowance.

Example

Selected Quantity

3 Kg

Covered by Subscription

2 Kg

Payable Quantity

1 Kg

Payable Amount

₹320
Scenario 3

No Subscription

Example

Selected Quantity

2 Kg

Covered by Subscription

Not Applicable

Payable Quantity

2 Kg

Payable Amount

₹640

The payment summary is read-only and generated automatically.

Pickup Information

Displays the store where the booking will be collected.

Example

Pickup Location

PondFish Store

Hyderabad

Pickup Type

Store Collection

If, in the future, multiple stores are introduced, this section can support location selection without changing the booking flow.

Terms & Confirmation

Before continuing, the customer must confirm:

☑ I confirm my booking details.

☑ I understand that booked fish will be prepared after QR verification at the store.

These confirmations are mandatory.

Confirm Booking Button

Primary Action

Confirm Booking

The behavior depends on the payable amount.

Payable Amount = ₹0
Confirm Booking

↓

Booking Created

↓

QR Generated

↓

Navigate to CP-07

No payment gateway is opened.

Payable Amount > ₹0
Confirm Booking

↓

Redirect to Razorpay

↓

Payment Successful

↓

Booking Created

↓

QR Generated

↓

Navigate to CP-07

The booking is created only after Razorpay confirms a successful payment.

User Actions

The customer can:

Review the booking summary.
Review subscription usage.
Review payable quantity.
Review payable amount.
Confirm the booking.
Complete payment (when required).

The customer cannot modify the booking quantity from this screen.

To make changes, they must return to CP-05 Booking.

Navigation

Entry:

CP-05 Booking

Exit:

CP-07 QR Ticket

If the customer returns to CP-05, the previously selected quantity is retained.

Data Requirements

The Checkout screen requires:

Booking Information
Fish ID
Fish Name
Quantity
Price per Kg
Customer Information
Customer ID
Subscription Status
Subscription Type
Remaining Weekly Allowance
Subscription Balance
Payment Information
Payable Quantity
Payable Amount
Razorpay Order (if required)
Store Information
Pickup Location
Validation Rules

Before confirmation:

Customer must be authenticated.
Fish must still be available.
Requested quantity must still be available.
Subscription must be validated.
Payable amount must be calculated.
Razorpay payment must succeed (when required).

If any validation fails, booking confirmation is blocked.

Payment Processing

The payment process follows these rules:

If Payable Amount = ₹0
Skip Razorpay.
Create booking immediately.
Deduct the applicable quantity from the customer's weekly allowance.
Deduct the corresponding value from the customer's subscription balance.
Generate QR Ticket.
If Payable Amount > ₹0
Redirect to Razorpay.
Wait for payment confirmation.
Verify the payment response.
Create booking.
Deduct the applicable quantity from the weekly allowance.
Deduct the corresponding value from the subscription balance.
Record the additional paid quantity.
Generate QR Ticket.

If Razorpay reports a failed or cancelled payment:

No booking is created.
Weekly allowance remains unchanged.
Subscription balance remains unchanged.
Inventory is not reserved.
Error States
Payment Failed
Payment was not completed.

Your booking has not been created.

The customer can retry payment or return to the booking screen.

Inventory Changed
The selected quantity is no longer available.

Please review your booking.
Validation Failed
Unable to complete checkout.

Please try again.
Screen Boundary

The Checkout screen is responsible for validating and confirming the booking.

It does not:

Display booking history.
Generate reports.
Perform worker operations.
Manage inventory.
Close completed orders.

Its responsibility ends once the booking has been successfully created and the customer is redirected to the QR Ticket screen.











2.8.9 Group D – Booking Journey
CP-07 – Booking Confirmation & QR Ticket
Screen Information
Property	Description
Screen ID	CP-07
Screen Name	Booking Confirmation & QR Ticket
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Booking Confirmation & QR Ticket screen is the final screen of the customer booking journey.

It confirms that the booking has been successfully created and provides the customer with a unique QR code that serves as their digital pickup ticket.

This QR code is presented to the store worker upon arrival. The worker scans the QR code to retrieve the booking details and begin preparing the fish.

This screen represents the successful completion of the customer booking process.

Business Objective

Provide customers with:

Confirmation that their booking has been accepted.
A digital pickup ticket.
Complete booking information.
Easy access to the QR code.
Booking reference details.

The customer should never need a printed receipt.

The QR Ticket is the only document required during store pickup.

Screen Layout
----------------------------------------------------

Booking Successful

↓

Booking Summary

↓

QR Code

↓

Pickup Instructions

↓

Booking Information

↓

Download / Share QR

↓

Return to Dashboard

----------------------------------------------------
Components
Booking Success Banner

Displays a success message after booking completion.

Example

✅ Booking Confirmed

Your fish has been successfully reserved.

The success banner is displayed only after a successful booking.

QR Ticket

The QR Code is the primary component of this screen.

The QR Code represents a unique booking.

Example

+----------------------+
|                      |
|      QR CODE         |
|                      |
+----------------------+

Booking ID

PF-20260807-00125

The QR Code contains a secure booking token.

It should never expose customer information directly.

The QR should encode only a secure booking reference that is validated by the backend after scanning.

Booking Summary

Displays a summary of the confirmed booking.

Example

Fish

Rohu

Quantity

2.5 Kg

Price

₹320 / Kg
Subscription Summary

Displays how the subscription was used for this booking.

Example 1
Subscription

Type 1

Covered Quantity

2 Kg

Paid Quantity

0.5 Kg
Example 2

Customer without Subscription

Subscription

Not Active

Paid Quantity

2 Kg
Payment Summary

Displays the completed payment details.

Fully Covered by Subscription
Payable Amount

₹0

Payment Status

Covered by Subscription
Partial Payment
Paid Through Razorpay

₹160

Payment Status

Successful
Customer without Subscription
Paid Through Razorpay

₹640

Payment Status

Successful
Pickup Instructions

Displays clear instructions for the customer.

Example

Please visit the PondFish store.

Show this QR code to the store worker.

The worker will scan your booking and prepare your fish.
Booking Information

Displays

Booking ID

PF-20260807-00125

Booking Date

07 August 2026

Booking Time

11:45 AM

Pickup Location

PondFish Store
Action Buttons

Primary

View Booking History

Secondary

Return to Home

Optional

Share Booking

The QR code should always remain available from the Booking History screen, so downloading it is optional rather than required.

User Actions

The customer can:

View the QR Ticket.
View booking details.
View payment summary.
View subscription usage.
Return to the dashboard.
Open Booking History.
Share booking details (optional).

The customer cannot:

Modify the booking.
Edit the QR code.
Change the quantity.
Cancel the booking from this screen.

Any future cancellation policy will be defined separately if the business decides to support it.

Navigation

Entry

CP-06 Checkout

Exit

CP-02 Dashboard
CP-10 Booking History
Data Requirements

The screen requires:

Booking
Booking ID
Booking Status
Booking Date
Booking Time
Fish
Fish Name
Quantity
Price per Kg
Subscription
Subscription Status
Covered Quantity
Paid Quantity
Payment
Payment Status
Razorpay Payment ID (stored internally)
Amount Paid
QR
Booking Token
QR Image
Validation Rules

The QR Ticket is displayed only when:

Booking is successfully created.
Inventory has been successfully reserved.
Payment has been confirmed (when applicable).
Booking record exists in the database.

If any of these validations fail, the QR Ticket is not generated.

Error States
QR Generation Failed
Unable to generate your booking ticket.

Please contact support.
Booking Not Found
Booking information could not be retrieved.
Screen Boundary

The Booking Confirmation & QR Ticket screen is responsible only for presenting the completed booking.

It does not:

Scan QR codes.
Verify customer identity.
Prepare fish.
Complete orders.
Update inventory.
Process payments.

Those operations belong to the Worker Portal and were already completed by the Checkout process.

SProjectX Recommendation

I recommend that the QR Ticket remain live rather than static.

Instead of generating a simple image containing booking details, the QR should represent a secure booking reference. Every time the worker scans it, the Worker Portal retrieves the latest booking information directly from the backend.

This approach provides several advantages:

Booking information is always up to date.
Customer information is never exposed inside the QR code.
Fraudulent or copied QR codes are easier to detect.
If a booking is ever cancelled or becomes invalid in the future, the QR can immediately be rejected by the backend.
The Worker Portal always displays the latest booking status and details.

This architecture is significantly more secure and scalable than embedding booking information directly inside the QR code.

✅ Group D – Booking Journey Completed

At this point, the entire customer booking lifecycle has been fully documented:

CP-03  Fish Marketplace
        │
        ▼
CP-04  Fish Details
        │
        ▼
CP-05  Booking
        │
        ▼
CP-06  Checkout
        │
        ▼
CP-07  Booking Confirmation & QR Ticket

This is now one complete business flow with no duplicated logic.












2.8.10 Group E – Subscription Management
CP-08 — Subscription Management Center
Screen Information
Property	Description
Screen ID	CP-08
Screen Name	Subscription Management Center
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Subscription Management Center provides customers with complete visibility and control over their PondFish subscription.

This screen centralizes all subscription-related information, including the active plan, remaining subscription credit, weekly fish allowance, usage history, recharge options, and previous subscription transactions.

Rather than distributing subscription information across multiple screens, the Subscription Management Center serves as the single source of truth for all subscription-related activities.

Business Objective

Enable customers to independently manage their subscription without contacting the business.

The customer should always be able to answer the following questions:

Which subscription plan am I using?
Is my subscription active?
How much subscription credit remains?
How much fish can I still claim this week?
When does my weekly allowance reset?
When should I recharge my subscription?
What subscriptions have I purchased previously?
Screen Layout
----------------------------------------------------------

Current Subscription

↓

Remaining Subscription Credit

↓

Weekly Fish Allowance

↓

Weekly Usage Progress

↓

Recharge Subscription

↓

Subscription History

----------------------------------------------------------

The screen is designed as a vertically scrollable dashboard where each section functions as an independent information card.

Components
Current Subscription Card

Displays the customer's active subscription.

Example

Current Plan

Type 1

₹2,000 Subscription

Status

Active

If no subscription exists

No Active Subscription

Primary Action

Purchase Subscription
Remaining Subscription Credit

Displays the remaining prepaid subscription value.

Example

Remaining Subscription Credit

₹1,480

This value decreases automatically as the customer books fish.

If the value reaches zero

Remaining Subscription Credit

₹0

Recharge Required

The customer cannot continue using subscription benefits until the subscription is recharged.

Weekly Fish Allowance

Displays the weekly fish entitlement.

Example

Weekly Allowance

2 Kg

Used This Week

1.4 Kg

Remaining

0.6 Kg

Additional Information

Next Weekly Reset

Monday

The weekly allowance resets automatically according to the subscription cycle.

Weekly Usage Progress

A progress indicator visually represents weekly consumption.

Example

Weekly Usage

████████░░

1.6 Kg / 2 Kg

This allows customers to quickly understand how much of their weekly allowance has been used.

Recharge Subscription

This section appears when:

Subscription credit reaches zero.
The customer wants to switch to a higher plan.
The customer wishes to purchase a new subscription after the current one ends.

Available options

Type 1

₹2,000

2 Kg Weekly
Type 2

₹6,000

3 Kg Weekly

Each card includes

Recharge

Selecting a plan redirects the customer to the Razorpay payment flow.

After successful payment:

Subscription becomes active.
Subscription credit is updated.
Weekly allowance is initialized.
Subscription history is recorded.
Subscription History

Displays all previous subscription purchases.

Each history card includes:

Subscription Type
Purchase Date
Recharge Amount
Status

Example

Type 1

₹2,000

Purchased

05 Aug 2026

Completed

Selecting a history item opens detailed subscription information.

User Actions

The customer can:

View current subscription.
View remaining subscription credit.
View weekly allowance.
View weekly usage.
Recharge the subscription.
Upgrade from Type 1 to Type 2.
View subscription history.

The customer cannot:

Modify subscription rules.
Edit weekly allowances.
Change recharge amounts.
Pause subscriptions.
Transfer subscription credit.

These rules are controlled by the business.

Navigation

Entry:

Dashboard
Profile

Exit:

Razorpay Checkout (Recharge)
Subscription History Details

After a successful recharge, the customer returns to this screen with updated subscription information.

Data Requirements

The screen requires:

Subscription Information
Current Plan
Subscription Status
Subscription Credit
Weekly Allowance
Weekly Usage
Remaining Weekly Quantity
Next Reset Date
Subscription History
Subscription ID
Plan Type
Purchase Date
Amount Paid
Payment Status
Validation Rules

The system validates:

Active subscription.
Remaining subscription credit.
Weekly allowance availability.
Successful Razorpay payment before activating a recharge.

Recharge cannot be completed until payment is confirmed.

Empty State

If the customer has never purchased a subscription

No Active Subscription

Purchase a subscription to enjoy weekly fish benefits.
Error State

If subscription information cannot be retrieved

Unable to load subscription details.

Please try again.
Screen Boundary

The Subscription Management Center is responsible only for displaying and managing subscription information.

It does not:

Calculate booking quantities.
Reserve inventory.
Generate QR tickets.
Process fish bookings.
Modify inventory.
Complete payments manually.

Subscription purchases are initiated here, but payment processing is delegated to Razorpay.



Recommendation

displaying a Subscription Health Indicator at the top of the screen.

Instead of only showing numerical values, the system should provide a simple visual indicator of the subscription's current state.

Example:

Subscription Health

🟢 Excellent

Subscription Active

Credit Available

Weekly Allowance Available

Another example:

Subscription Health

🟡 Low Credit

Recharge Recommended

And finally:

Subscription Health

🔴 Subscription Exhausted

Recharge Required

This allows customers to understand the overall status of their subscription at a glance without interpreting multiple values individually. It also creates a more intuitive experience, especially for users who may not regularly check the exact credit or weekly allowance values.













.8.11 Group F – Customer Communication
CP-09 — Notification Center
Screen Information
Property	Description
Screen ID	CP-09
Screen Name	Notification Center
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Notification Center serves as the centralized communication hub between PondFish and the customer.

It stores every important notification generated by the platform, allowing customers to review both current and previous updates at any time.

While push notifications provide immediate alerts through the device, the Notification Center maintains a permanent in-app history of those notifications.

The Notification Center is read-only and does not allow customers to modify or respond to notifications.

Business Objective

Ensure customers never miss important operational updates, even if they dismiss a push notification.

The Notification Center provides transparency by maintaining a chronological record of all communication related to bookings, subscriptions, deliveries, and system events.

Screen Layout
---------------------------------------------------------

Notification Categories

↓

Notification Timeline

↓

Notification Details

---------------------------------------------------------

The layout is designed as a chronological timeline, with the most recent notifications displayed first.

Components
Notification Categories

Customers can filter notifications by category.

Available categories:

All

Bookings

Subscriptions

Delivery

System

Selecting a category filters the notification timeline without leaving the page.

Notification Timeline

Each notification appears as an individual activity card.

Every card contains:

Notification Icon
Notification Title
Short Description
Date & Time
Read / Unread Indicator

Example:

🐟 Fresh Fish Arrived

Today's fresh fish has reached the store.

Today

8:15 AM

Another example:

🚚 Live Delivery Started

Fresh fish is on the way.

ETA: 42 Minutes

Track Now

Another example:

✅ Booking Confirmed

Booking ID

PF-20260807-00125

Another example:

💳 Subscription Recharged

Type 1 Subscription

Activated Successfully.
Notification Details

Selecting a notification expands it to display complete information.

Example

Booking Confirmed

Fish

Rohu

Quantity

2 Kg

Booking ID

PF-20260807-00125

Date

07 August 2026
Notification Types

The Notification Center supports the following notification types.

Delivery Notifications

Generated automatically by the Admin Portal.

Examples:

Live delivery started.
Live truck published.
Fish arrived at the warehouse.
Delivery completed.
Booking Notifications

Generated by the Booking Engine.

Examples:

Booking confirmed.
QR ticket generated.
Booking completed.
Subscription Notifications

Generated by the Subscription Engine.

Examples:

Subscription activated.
Subscription recharged.
Weekly allowance reset.
Subscription credit exhausted.
Recharge reminder.
System Notifications

Generated by the platform.

Examples:

Scheduled maintenance.
Application updates.
General announcements.
User Actions

Customers can:

View notifications.
Filter notifications by category.
Open notification details.
Mark individual notifications as read.
Mark all notifications as read.
Delete individual notifications (optional).
Clear all notifications (optional).

Notifications cannot be edited.

Navigation

Notifications can redirect customers to related screens.

Examples:

Notification	Redirect
Live Delivery Started	Live Truck Tracking
Booking Confirmed	CP-07 QR Ticket
Subscription Recharged	CP-08 Subscription
Booking Completed	CP-10 Booking History

This allows customers to quickly continue the relevant workflow.

Data Requirements

The Notification Center retrieves:

Notification ID
Category
Title
Description
Timestamp
Read Status
Related Entity (Booking, Subscription, Delivery)
Redirect Destination
Validation Rules

The system validates:

Customer identity.
Notification ownership.
Notification availability.

Customers can only access notifications generated for their own account.

Empty State

If no notifications exist:

You're all caught up.

No notifications available.
Error State

If notifications cannot be retrieved:

Unable to load notifications.

Please try again.
Screen Boundary

The Notification Center is responsible only for displaying communication generated by other modules.

It does not:

Create notifications.
Send push notifications.
Publish delivery updates.
Generate booking events.
Manage subscriptions.

It only displays notifications that have already been created by the respective business modules.

Notification Generation Matrix

The following table defines which module is responsible for generating each notification.

Event	Generated By
Live Delivery Started	Admin Portal
Fish Arrived	Admin Portal
Booking Confirmed	Booking Engine
QR Ticket Generated	Booking Engine
Booking Completed	Worker Portal
Subscription Purchased	Subscription Module
Subscription Recharged	Subscription Module
Weekly Allowance Reset	Subscription Engine
Subscription Credit Exhausted	Subscription Engine
System Announcement	Admin Portal

This table establishes clear ownership and prevents duplicate notification generation.

Push Notification Behaviour

Every notification created by the platform follows the same communication flow.

Business Event Occurs

↓

Backend Creates Notification

↓

Notification Saved to Database

↓

Firebase Cloud Messaging (FCM)

↓

Push Notification Sent to Customer Device

↓

Notification Stored in CP-09 Notification Center

This ensures that even if a customer dismisses a push notification from their device, the notification remains permanently accessible within the application.

Recommendation

I recommend that notifications be treated as business events rather than simple messages.

Every notification should have:

A unique notification ID.
A source module.
A related entity ID (Booking ID, Subscription ID, Delivery ID, etc.).
A timestamp.
A destination screen.

This approach transforms the Notification Center into a structured event history rather than just a messaging list. It also simplifies debugging, auditing, and future integrations while keeping the customer experience intuitive.




















2.8.12 Group F – Customer Services
CP-10 — Booking History
Screen Information
Property	Description
Screen ID	CP-10
Screen Name	Booking History
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Booking History screen provides customers with a complete record of every booking made through the PondFish platform.

It allows customers to review previous bookings, understand how their subscription was used, view payment information, and access completed booking details.

The Booking History serves as the customer's permanent transaction archive and provides complete transparency for all past purchases.

Business Objective

Provide customers with a centralized location to review all completed and previous bookings without requiring assistance from the business.

Customers should be able to answer questions such as:

What fish did I purchase?
When did I purchase it?
How much quantity did I book?
How much was covered by my subscription?
Did I make an additional payment?
How much subscription credit was deducted?
Was the booking successfully completed?
Screen Layout
---------------------------------------------------------

Search Bookings

↓

Filter Options

↓

Booking Timeline

↓

Booking Cards

↓

Booking Details

---------------------------------------------------------

Bookings are displayed in reverse chronological order, with the newest bookings appearing first.

Components
Search

Customers can search bookings using:

Booking ID
Fish Name

Example

Search Booking...

Search results update dynamically.

Filter

Customers can filter bookings by:

All Bookings

Subscription Bookings

Full Payment Bookings

Partially Paid Bookings

Completed

Future filters may include date ranges if required.

Booking Card

Each booking is displayed as an individual card.

Example

Booking ID

PF-20260807-00125

Fish

Rohu

Quantity

2.5 Kg

Booking Date

07 Aug 2026

Completed

>

The card provides a quick overview without exposing excessive information.

Booking Details

Selecting a booking opens the complete booking summary.

Fish Information

Displays:

Fish

Rohu

Category

Freshwater

Price

₹320 / Kg

Booked Quantity

2.5 Kg
Subscription Usage

Displays how the booking interacted with the customer's subscription.

Example

Subscription

Type 1

Covered Quantity

2 Kg

Remaining Subscription Credit Before Booking

₹1,800

Subscription Credit Used

₹640

Remaining Subscription Credit

₹1,160

If no subscription existed:

Subscription

Not Applied
Payment Information

Displays:

Payable Quantity

0.5 Kg

Paid Through

Razorpay

Amount Paid

₹160

Payment Status

Successful

If the booking was fully covered:

Payment

Covered by Subscription
Booking Information

Displays:

Booking ID

PF-20260807-00125

Booking Date

07 Aug 2026

Booking Time

11:42 AM

Pickup Location

PondFish Store
Completion Information

Displays:

Order Status

Completed

Completed On

07 Aug 2026

Completed At

12:08 PM

This information is updated automatically when the worker completes the order.

QR Ticket Archive

Every completed booking retains its QR ticket for reference.

The QR is marked as:

Already Used

The QR remains viewable but cannot be scanned again for pickup.

User Actions

Customers can:

Browse previous bookings.
Search bookings.
Filter bookings.
View complete booking details.
View payment information.
View subscription usage.
View archived QR tickets.

Customers cannot:

Modify previous bookings.
Reuse QR tickets.
Edit booking information.
Reopen completed bookings.
Navigation

Entry:

Dashboard
Notifications
Profile

Exit:

Booking Details
QR Ticket Archive

Selecting a booking expands its details without leaving the Booking History module.

Data Requirements

The Booking History screen requires:

Booking Data
Booking ID
Booking Date
Booking Time
Fish Name
Quantity
Price Per Kilogram
Booking Status
Subscription Data
Subscription Type
Covered Quantity
Subscription Credit Used
Remaining Subscription Credit
Payment Data
Payment Method
Razorpay Transaction ID (internal reference)
Amount Paid
Payment Status
Completion Data
Completion Status
Completion Date
Worker Completion Timestamp
Validation Rules

The system validates:

Booking ownership.
Customer identity.
Booking availability.

Customers may only access bookings associated with their own account.

Empty State

If no bookings exist:

No Bookings Yet

You haven't booked any fish yet.

Browse today's available fish to make your first booking.

A button redirects the customer to:

Browse Fish
Error State

If booking history cannot be loaded:

Unable to retrieve your booking history.

Please try again.
Screen Boundary

The Booking History screen is responsible for displaying historical booking information.

It does not:

Create new bookings.
Modify existing bookings.
Process payments.
Regenerate QR tickets.
Recharge subscriptions.
Update inventory.

All information displayed on this screen is read-only.


Recommendation

Instead of treating Booking History as just a transaction log, I recommend presenting it as a Customer Activity Timeline.

Each booking can be displayed with its complete lifecycle:

Booking Created
        │
        ▼
Payment Completed
        │
        ▼
QR Ticket Generated
        │
        ▼
QR Scanned at Store
        │
        ▼
Fish Prepared
        │
        ▼
Order Completed

This gives customers complete visibility into what happened with every booking, even after it has been completed. It also reduces support queries because customers can clearly understand each stage of their order without contacting the business.









2.8.13 Group F – Customer Services
CP-11 — Customer Profile
Screen Information
Property	Description
Screen ID	CP-11
Screen Name	Customer Profile
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Customer Profile serves as the customer's digital identity within the PondFish Digital Ecosystem.

It combines personal information, membership details, subscription overview, and customer statistics into a single interface, allowing customers to understand their relationship with PondFish beyond individual bookings.

The Profile is intended to be the customer's personal dashboard rather than a simple account settings page.

Business Objective

Provide customers with a centralized view of their personal information, membership details, subscription status, and overall activity within the platform.

The customer should immediately understand:

Who they are registered as.
Which subscription they currently have.
How long they have been a PondFish member.
How actively they have used the platform.
Their lifetime activity and engagement.
Screen Layout
---------------------------------------------------------

Profile Header

↓

Personal Information

↓

Membership Information

↓

Subscription Summary

↓

Customer Statistics

↓

Quick Actions

---------------------------------------------------------

Each section is displayed as an independent information card.

Components
Profile Header

Displays the customer's primary identity.

Information displayed:

Customer Photo (Future)

Customer Name

Customer ID

Member Since

Example

Stevan

Customer ID

PF-100284

Member Since

August 2026

The customer photo is optional and can be introduced in a future release.

Personal Information

Displays:

Full Name
Mobile Number
Age
Area / Locality

Example

Name

Stevan

Mobile

+91 XXXXX XXXXX

Age

20

Area

Uppal

Only editable fields may be modified by the customer.

The registered mobile number cannot be changed directly within the application.

Membership Information

Displays:

Membership Status

Active

Current Subscription

Type 1

Membership Since

07 August 2026

If no subscription exists:

Membership Status

Registered Customer

No Active Subscription
Subscription Overview

Displays a quick summary without replacing the dedicated Subscription Management Center.

Information displayed:

Subscription Credit

₹1,420

Weekly Allowance

2 Kg

Remaining This Week

0.8 Kg

Primary Action

Manage Subscription

Redirects to CP-08.

Customer Statistics

The Profile includes lifetime platform statistics.

Information displayed:

Total Bookings

18

Total Fish Purchased

36.5 Kg

Total Subscription Purchases

5

Lifetime Spending

₹12,840

Future metrics may include:

Favorite Fish
Most Purchased Category
Average Monthly Purchase
Quick Actions

The following actions are available:

Edit Personal Information

Manage Subscription

View Booking History

Contact Support

Logout is intentionally placed in the Settings screen to keep the Profile focused on customer information.

User Actions

The customer can:

View personal details.
Edit allowed profile information.
View membership details.
View subscription summary.
View lifetime statistics.
Navigate to Subscription Management.
Navigate to Booking History.

The customer cannot:

Change the registered mobile number.
Modify customer ID.
Change membership history.
Edit subscription records.
Navigation

Entry:

Dashboard
Bottom Navigation

Exit:

Subscription Management
Booking History
Settings
Data Requirements

The Profile requires:

Customer Information
Customer ID
Name
Mobile Number
Age
Area
Registration Date
Membership Information
Membership Status
Active Subscription
Member Since
Subscription Summary
Subscription Credit
Weekly Allowance
Remaining Weekly Quantity
Customer Statistics
Total Bookings
Total Fish Purchased
Lifetime Spending
Total Subscription Purchases
Validation Rules

The system validates:

Customer identity.
Profile ownership.

Editable fields are validated before saving changes.

Empty State

The Profile screen has no empty state because every authenticated customer has a profile.

If optional fields are incomplete, placeholders are displayed with an option to complete the information.

Error State

If profile information cannot be retrieved:

Unable to load your profile.

Please try again.
Screen Boundary

The Customer Profile is responsible for presenting customer identity and account information.

It does not:

Manage bookings.
Process subscription payments.
Display notification history.
Generate QR tickets.
Modify business rules.

Operational actions are delegated to their respective modules.



Recommendation

I recommend introducing a Customer Membership Badge within the Profile Header.

Rather than displaying only text, the application can visually represent the customer's current membership level.

Example:

🐟 PondFish Member

Type 1 Subscription

Active

or

🐟 PondFish Premium Member

Type 2 Subscription

Active

If no subscription exists:

🐟 Registered Customer

Subscription Not Active

This small enhancement provides immediate recognition of the customer's current status and creates a stronger sense of membership within the platform. It also helps differentiate subscribed customers from regular registered users without requiring them to navigate into the Subscription module.














2.8.14 Group F – Customer Services
CP-12 — Settings
Screen Information
Property	Description
Screen ID	CP-12
Screen Name	Settings
Parent Interface	Customer Portal
Primary User	Registered Customer
Purpose

The Settings screen allows customers to configure their application preferences, privacy settings, notification preferences, and account-related options.

Unlike the Profile screen, which represents the customer's identity within the PondFish ecosystem, the Settings screen focuses solely on how the application behaves for the customer.

Business Objective

Provide customers with a centralized location to manage their application preferences without affecting operational modules such as bookings, subscriptions, or payments.

The Settings screen should remain simple, organized, and independent from business workflows.

Screen Layout
---------------------------------------------------------

Application Settings

↓

Notification Settings

↓

Privacy & Security

↓

Support

↓

Legal Information

↓

Account Actions

---------------------------------------------------------

Each section is displayed as a separate settings group.

Components
Application Settings

Allows customers to customize general application behavior.

Available Options
Language

Application Version

About PondFish
Language

The application should support multiple languages in the future.

For the MVP:

English

Future releases may include:

Telugu
Hindi
Notification Preferences

Customers can control which notifications they receive.

Notification Categories
Live Delivery Updates

Booking Notifications

Subscription Notifications

System Announcements

Each category includes an individual toggle.

Example

☑ Live Truck Updates

☑ Booking Confirmation

☑ Subscription Updates

☑ General Announcements

Disabling a category stops future push notifications for that category but does not delete previously received notifications.

Privacy & Security

Displays account security information.

Information displayed:

Registered Mobile Number

OTP Authentication Enabled

Available Action

View Privacy Policy

Since authentication is managed by Firebase OTP, there are no password management options.

Help & Support

Provides customers with official support channels.

Options

Contact Support

Call Store

Email Support

Frequently Asked Questions

Selecting an option redirects the customer to the corresponding communication channel.

Legal Information

Displays legal documents.

Available Pages

Privacy Policy

Terms & Conditions

Refund Policy (if applicable)

Application Version

These pages are maintained by the Admin Portal and displayed as read-only content.

Account Actions

Contains account-level actions.

Available Actions

Logout

Optional (Future)

Request Account Deletion

For the MVP, account deletion requests should be handled by the business rather than allowing immediate deletion from the application.

User Actions

The customer can:

Change notification preferences.
View legal information.
Contact support.
View application information.
Log out.

The customer cannot:

Change subscription rules.
Modify booking history.
Change authentication methods.
Update business configurations.
Navigation

Entry:

Profile
Bottom Navigation

Exit:

Login Screen (after logout)
Support Pages
Legal Documents
Data Requirements

The Settings screen requires:

Customer Preferences
Notification Preferences
Preferred Language
Application Information
Current Application Version
Build Version
Account Information
Registered Mobile Number
Validation Rules

The system validates:

Customer authentication before accessing settings.
Preference updates before saving.
Successful logout before redirecting to the authentication screen.
Empty State

The Settings screen has no empty state because default settings are available for every customer.

Error State

If settings cannot be loaded:

Unable to load application settings.

Please try again.

If updating preferences fails:

Unable to save your changes.

Please try again.
Screen Boundary

The Settings screen is responsible only for application preferences and account-related options.

It does not:

Manage subscriptions.
Process bookings.
Display booking history.
Handle payments.
Modify customer profile information.

Operational functionality is intentionally excluded to keep the screen focused on application configuration.










2.8.15 Customer Portal Summary

With CP-12 completed, the Customer Portal specification is now complete.

This summary provides a consolidated view of the customer's complete journey through the PondFish ecosystem.

Customer Journey
Open App
    │
    ▼
Customer Access (CP-01)
    │
    ▼
Home Dashboard (CP-02)
    │
    ▼
Browse Fish (CP-03)
    │
    ▼
Fish Details (CP-04)
    │
    ▼
Booking (CP-05)
    │
    ▼
Checkout (CP-06)
    │
    ▼
Booking Confirmation & QR Ticket (CP-07)
    │
    ▼
Store Visit
    │
    ▼
Worker Scans QR
    │
    ▼
Fish Prepared
    │
    ▼
Order Completed
Customer Portal Navigation Map
Customer Portal

├── CP-01 Customer Access
│
├── CP-02 Home Dashboard
│
├── CP-03 Fish Marketplace
│
├── CP-04 Fish Details
│
├── CP-05 Booking
│
├── CP-06 Checkout
│
├── CP-07 Booking Confirmation & QR Ticket
│
├── CP-08 Subscription Management Center
│
├── CP-09 Notification Center
│
├── CP-10 Booking History
│
├── CP-11 Customer Profile
│
└── CP-12 Settings
Customer Portal Responsibilities

The Customer Portal is responsible for:

Customer registration and authentication.
Fish discovery.
Fish booking.
Subscription management.
Subscription recharge.
Razorpay checkout.
QR ticket generation.
Notification history.
Booking history.
Customer profile management.
Application preferences.
Customer Portal Integrations

The Customer Portal communicates with the following platform services:

Service	Purpose
Firebase Authentication	OTP-based customer authentication
Firebase Cloud Messaging (FCM)	Push notifications
Razorpay	Subscription purchases and booking payments
Booking Engine	Booking creation and validation
Subscription Engine	Weekly allowance and subscription credit management
Inventory Module	Fish availability and reservation
Notification Engine	Notification generation and synchronization
Admin Portal	Receives inventory, delivery, and business updates
Worker Portal	Receives booking information after QR scan
Customer Portal Boundaries

The Customer Portal does not perform operational or administrative tasks.

The following responsibilities belong to other interfaces:

Inventory management.
Fish stock updates.
QR scanning.
Fish preparation.
Order completion.
Delivery publication.
Business analytics.
CRM management.
System administration.

These operations are handled by the Worker Portal and Admin Portal.













2.9 Worker Portal Interface Specification
2.9.1 Overview

The Worker Portal is the operational workspace used by PondFish store staff to process customer bookings and complete order fulfillment.

Unlike the Customer Portal, which focuses on customer interactions and booking creation, the Worker Portal is designed for fast in-store operations. Every function within this interface is optimized to reduce customer waiting time and simplify the order fulfillment process.

The Worker Portal communicates with the Booking Engine, Inventory Module, Customer Portal, and Admin Portal to retrieve booking information, update order status, invalidate QR tickets, and synchronize operational records.

The interface is intentionally lightweight so that workers can learn and operate it with minimal training.

2.9.2 Responsibilities

The Worker Portal is responsible for:

Authenticating store workers.
Viewing active customer bookings.
Retrieving bookings using QR Scan or Manual Search.
Displaying booking information.
Completing customer orders.
Viewing completed order history.
Viewing worker profile information.
2.9.3 Interface Boundaries

The Worker Portal is not responsible for:

Customer registration.
Subscription management.
Subscription recharge.
Razorpay payment processing.
Inventory management.
Business analytics.
CRM management.
Live truck publishing.
Application configuration.

These responsibilities belong to the Customer Portal and Admin Portal.

2.9.4 Worker Workflow

Every customer follows the same fulfillment workflow regardless of how the booking is retrieved.

Customer Arrives
        │
        ▼
Retrieve Booking
(QR or Search)
        │
        ▼
Verify Booking
        │
        ▼
Prepare Fish
        │
        ▼
Hand Over Fish
        │
        ▼
Complete Order
        │
        ▼
Booking Archived
2.9.5 Navigation Structure

The Worker Portal is organized into three operational modules and one account module.

Worker Portal

├── WP-01 Active Orders
│
├── WP-02 Completed Orders
│
└── WP-03 Profile

Unlike the Customer Portal, the Worker Portal does not require multiple navigation levels.

Workers remain on the Active Orders screen for most of their working hours.

2.9.6 Booking Retrieval Methods

Workers can retrieve bookings using either of the following methods.

QR Retrieval

The customer presents the booking QR Ticket.

Customer

↓

Shows QR

↓

Worker Scans

↓

Booking Opens
Manual Retrieval

If QR scanning is unavailable, workers may search using:

Booking ID
Customer Name
Mobile Number
Search Booking

↓

Select Booking

↓

Booking Opens

Both methods retrieve the same booking record from the backend.

2.9.7 Order Completion Lifecycle

Once the worker clicks Complete Order, the system executes the following sequence.

Complete Order

↓

Booking Completed

↓

Completion Time Recorded

↓

Inventory Updated

↓

QR Invalidated

↓

Booking Archived

↓

Customer Notification Sent

↓

Admin Dashboard Updated

These actions are performed automatically by the backend as a single transaction.

2.9.8 QR Lifecycle
Booking Created

↓

QR Generated

↓

Worker Retrieves Booking

↓

Order Completed

↓

QR Invalidated

↓

Archived

A completed QR Ticket cannot be reused.

Any attempt to scan an invalid QR displays:

Booking Already Completed

This QR Ticket is no longer valid.
2.9.9 Screen Hierarchy
Worker Portal

├── WP-01 Active Orders
│
├── WP-02 Completed Orders
│
└── WP-03 Worker Profile
2.9.10 Interface Integrations

The Worker Portal communicates with:

Module	Purpose
Booking Engine	Retrieve booking information
Customer Portal	Booking synchronization
Inventory Module	Update reserved inventory after completion
Notification Engine	Send booking completion notifications
Admin Portal	Update operational dashboard
2.9.11 Design Philosophy

The Worker Portal is built around operational efficiency rather than navigation complexity.

Every interaction should reduce the number of clicks required to complete an order.

The interface should prioritize:

Large touch-friendly controls.
Fast booking retrieval.
Clear booking information.
Immediate order completion.
Minimal navigation between screens.

Workers should be able to complete most customer interactions from a single operational dashboard.




















2.9.12 WP-01 — Active Orders Dashboard
Screen Information
Property	Description
Screen ID	WP-01
Screen Name	Active Orders Dashboard
Parent Interface	Worker Portal
Primary User	Store Worker
Purpose

The Active Orders Dashboard is the primary operational workspace for store workers.

It is the first screen displayed after successful worker authentication and remains the main interface throughout daily operations.

All active customer bookings awaiting pickup are managed from this dashboard. Workers can retrieve bookings using either QR scanning or manual search, review booking details, prepare the customer's order, and complete the order without navigating to multiple screens.

The dashboard is designed to provide a fast, uninterrupted workflow that minimizes customer waiting time during store operations.

Business Objective

Provide workers with a single operational workspace where every pending booking can be managed efficiently.

The interface should reduce navigation, simplify booking retrieval, and allow workers to complete customer orders with minimal interaction.

Interface Layout
Desktop
+--------------------------------------------------------------+

Today's Orders | Pending | Completed

48                17          31

---------------------------------------------------------------

 Search Booking............................. [ Scan QR ]

---------------------------------------------------------------

 Active Orders

---------------------------------------------------------------

PF-00125

Stevan

Rohu

2 Kg

11:42 AM                                   >

---------------------------------------------------------------

PF-00126

Rahul

Katla

3 Kg

11:48 AM                                   >

---------------------------------------------------------------

PF-00127

Kiran

Tilapia

1 Kg

11:55 AM                                   >

---------------------------------------------------------------

Mobile
Today's Orders

48 | 17 | 31

↓

Search Booking

↓

Scan QR

↓

Active Orders List

↓

Booking Details (Bottom Sheet)

The dashboard should remain simple, touch-friendly, and optimized for continuous operational use.

Dashboard Components
1. Order Summary

At the top of the dashboard, workers are presented with a quick overview of the day's operational status.

Displayed Information:

Today's Orders
Pending Orders
Completed Orders

Example:

Today's Orders

48

Pending

17

Completed

31

These values update automatically whenever an order is completed.

2. Search Booking

Workers can manually retrieve customer bookings without requiring a QR code.

Supported search parameters:

Booking ID
Customer Name
Registered Mobile Number

Example:

Search Booking...

__________________________

The search updates results dynamically as the worker types.

3. QR Scanner

A dedicated Scan QR button is available beside the search bar.

[ Scan QR ]

Selecting this button opens the device camera to scan a customer's booking QR.

If a valid QR is scanned, the corresponding booking is opened immediately.

If scanning fails or the customer cannot present a QR, the worker can continue using the search function without leaving the dashboard.

4. Active Orders List

Displays all bookings that are awaiting customer pickup.

Each booking card displays:

Booking ID
Customer Name
Fish Name
Booked Quantity
Booking Time

Example:

PF-00125

Stevan

Fish : Rohu

Quantity : 2 Kg

11:42 AM

The list is automatically sorted by booking time, with the earliest pending bookings displayed first.

Selecting any booking opens its detailed information.

Booking Details Panel

Booking details are displayed as a side panel on desktop or a bottom sheet on mobile, allowing workers to stay within the Active Orders Dashboard.

The worker does not navigate to another page.

The panel displays:

Customer Information
Customer Name
Registered Mobile Number
Booking ID
Booking Information
Fish Name
Booked Quantity
Booking Date
Booking Time
Payment Verification

Displays the payment status for confirmation.

Example:

Payment Status

Verified ✓

or

Covered by Subscription ✓

This information is displayed only for verification.

Workers do not collect or modify payments.

Primary Action
[ Complete Order ]

This is the only operational action available within the booking details.

Order Completion

When the worker selects Complete Order, the system displays a confirmation dialog.

Example:

Complete this order?

This action will finalize the booking and invalidate the customer's QR Ticket.

[ Cancel ]

[ Complete Order ]

After confirmation:

The booking is marked as completed.
The booking is removed from the Active Orders list.
The Completed Orders counter is updated.
The booking becomes available in the Completed Orders module.
The customer receives a booking completion notification.

The worker remains on the dashboard, ready to process the next customer.

Search & QR Behavior

Both booking retrieval methods follow the same operational flow.

                 Retrieve Booking

                /                 \

          Search              Scan QR

                \                 /

             Open Booking Details

                      │

                      ▼

             Complete Order

Regardless of the retrieval method, the same booking information is displayed and the same completion process is followed.

Empty State

If no active bookings are available:

No Active Orders

All customer bookings have been completed.
Error State

If no matching booking is found:

No booking found.

Please verify the Booking ID, Customer Name, or Mobile Number.

If booking information cannot be loaded:

Unable to retrieve booking details.

Please try again.
User Actions

Workers can:

View today's operational summary.
Search bookings manually.
Retrieve bookings by QR scan.
Open booking details.
Complete customer orders.

Workers cannot:

Edit booking information.
Modify payments.
Change customer details.
Update subscriptions.
Manage inventory.

These functions are handled by their respective modules.

Data Requirements

The dashboard requires:

Order Summary
Today's Orders Count
Pending Orders Count
Completed Orders Count
Active Orders
Booking ID
Customer Name
Mobile Number
Fish Name
Quantity
Booking Time
Booking Details
Booking Information
Customer Information
Payment Verification Status



Recommendation

The Active Orders Dashboard should function as a live operational workspace rather than a collection of separate screens.

Workers should never leave this interface during normal store operations.

Every task—from retrieving a booking using search or QR, reviewing booking details, and completing the order—should happen within the same dashboard using a side panel (desktop) or bottom sheet (mobile).

This approach eliminates unnecessary navigation, reduces training time for new workers, and significantly improves operational efficiency during busy business hours. By keeping all actions centralized in one workspace, the Worker Portal remains simple, fast, and aligned with the real-world workflow of a retail store.

I think this is now PRD quality. It doesn't repeat previously documented business rules, it documents only the UI and interactions unique to WP-01, and it accurately reflects the workflow you've designed for the client. This is the style I'd continue using for the rest of the Worker Portal and Admin Portal to keep the entire document consistent and easy for developers or AI coding agents to follow.











2.9.13 WP-02 — Completed Orders
Screen Information
Property	Description
Screen ID	WP-02
Screen Name	Completed Orders
Parent Interface	Worker Portal
Primary User	Store Worker
Purpose

The Completed Orders module provides workers with access to all successfully completed customer orders.

It serves as a historical record of fulfilled bookings, allowing workers to review previous transactions without affecting operational data.

This module is entirely read-only and is intended for verification, customer inquiries, and operational reference.

Business Objective

Provide workers with quick access to completed bookings while maintaining the integrity of historical records.

Workers should be able to:

Verify completed customer orders.
Search previous bookings.
Filter orders by time period.
View complete booking details.

No operational actions are performed from this module.

Interface Layout
Desktop
+--------------------------------------------------------------+

Today | Yesterday | Weekly | Monthly | Custom Range

---------------------------------------------------------------

Search Completed Orders...

---------------------------------------------------------------

Completed Orders

---------------------------------------------------------------

PF-00125

Stevan

Rohu

2 Kg

Completed • 12:18 PM                         >

---------------------------------------------------------------

PF-00124

Rahul

Katla

3 Kg

Completed • 11:54 AM                         >

---------------------------------------------------------------

PF-00123

Kiran

Tilapia

1 Kg

Completed • 10:43 AM                         >

---------------------------------------------------------------
Mobile
Time Filters

↓

Search

↓

Completed Orders List

↓

Order Details (Bottom Sheet)

The layout follows the same interaction pattern as WP-01 to keep the user experience consistent.

Dashboard Components
1. Time Filters

Workers can quickly filter completed orders based on predefined time ranges.

Available filters:

Today

Yesterday

This Week

This Month

Custom Date Range

Only one filter is active at a time.

Changing the filter reloads the completed order list.

2. Search

Workers can search completed orders using:

Booking ID
Customer Name
Registered Mobile Number

Example:

Search Completed Orders...

______________________________

Search updates the list instantly.

3. Completed Orders List

Displays all completed bookings matching the selected filter.

Each order card contains:

Booking ID
Customer Name
Fish Name
Quantity
Completion Date
Completion Time

Example

PF-00125

Stevan

Fish : Rohu

Quantity : 2 Kg

Completed

12:18 PM

The newest completed orders appear first.

Order Details Panel

Selecting a completed order opens a side panel (desktop) or bottom sheet (mobile).

The panel displays the complete booking information.

Customer Information

Displays:

Customer Name
Mobile Number
Booking ID
Fish Information

Displays:

Fish Name
Quantity
Booking Date
Completion Date
Completion Time
Payment Information

Displays the payment summary for reference.

Example

Payment Status

Verified

Covered by Subscription

2 Kg

Paid via Razorpay

₹160

Workers cannot edit or update payment information.

QR Information

Displays the booking QR status.

Example

QR Status

Already Used

This booking has been completed.

No QR image or regeneration option is available.

Booking Status

Displays

Completed

This status is read-only.

User Actions

Workers can:

Filter completed orders.
Search completed orders.
View booking details.
Verify payment status.
Verify completion details.

Workers cannot:

Reopen completed orders.
Complete orders again.
Edit customer information.
Modify payment details.
Generate new QR codes.
Delete completed bookings.
Data Requirements

The module requires:

Completed Orders
Booking ID
Customer Name
Mobile Number
Fish Name
Quantity
Booking Date
Completion Date
Completion Time
Booking Status
Payment
Payment Status
Subscription Usage Summary
Razorpay Payment Reference (Internal)
Empty State

If no completed orders exist for the selected period:

No Completed Orders Found

Try selecting another date range.
Error State

If completed orders cannot be loaded:

Unable to retrieve completed orders.

Please try again.
Navigation

Workers can navigate to:

Active Orders Dashboard
Worker Profile

Opening an order displays its details within the same module using the details panel.







2.9.14 WP-03 — Worker Profile
Screen Information
Property	Description
Screen ID	WP-03
Screen Name	Worker Profile
Parent Interface	Worker Portal
Primary User	Store Worker
Purpose

The Worker Profile provides authenticated workers with their account information and assigned workplace details.

This module acts as the worker's identity page within the PondFish ecosystem and provides access to basic account information and session management.

Unlike the Customer Profile, this screen is intentionally lightweight and operationally focused.

Business Objective

Provide workers with access to their personal account information while keeping operational functionality separate.

Workers should be able to verify:

Their registered identity.
Assigned role.
Assigned store.
Contact information.
Account status.
Interface Layout
Desktop
--------------------------------------------------------

Profile Header

↓

Worker Information

↓

Store Information

↓

Account Information

↓

Logout

--------------------------------------------------------
Mobile
Worker Profile

↓

Worker Information

↓

Store Information

↓

Logout

The layout follows the same clean card-based structure used throughout the Worker Portal.

Components
1. Profile Header

Displays the worker's identity.

Information displayed:

Worker Name
Worker ID
Assigned Role

Example

Ramesh Kumar

Worker ID

WK-1008

Role

Store Worker

Future versions may include a profile photo, but it is not required for the MVP.

2. Worker Information

Displays the worker's registered information.

Fields:

Full Name
Registered Mobile Number
Employee ID
Role

Example

Name

Ramesh Kumar

Mobile

+91 XXXXX XXXXX

Employee ID

WK-1008

Role

Store Worker

This information is read-only.

Worker details can only be modified by the Admin Portal.

3. Store Information

Displays the assigned workplace.

Example

Store

PondFish Store

Location

Hyderabad

Status

Active

This helps workers confirm they are operating under the correct store account.

4. Account Information

Displays basic account details.

Fields:

Account Status
Last Login
Application Version

Example

Account Status

Active

Last Login

08 Aug 2026

09:12 AM

These fields are informational only.

5. Logout

Primary Action

[ Logout ]

Selecting Logout displays a confirmation dialog.

Example

Are you sure you want to logout?

[ Cancel ]

[ Logout ]

After confirmation:

The current session is terminated.
Worker authentication tokens are cleared.
The application redirects to the Worker Login screen.
User Actions

Workers can:

View account information.
View assigned store details.
Logout.

Workers cannot:

Edit personal information.
Change mobile number.
Change assigned store.
Modify account permissions.
Change role.

All account management is handled by the Admin Portal.

Data Requirements

The Worker Profile requires:

Worker Information
Worker ID
Full Name
Mobile Number
Role
Store Information
Store Name
Store Location
Worker Status
Account Information
Account Status
Last Login
Application Version
Empty State

The Worker Profile has no empty state.

Every authenticated worker must have a valid profile.

Error State

If profile information cannot be loaded:

Unable to load worker profile.

Please try again.

If logout fails:

Unable to logout.

Please try again.
Navigation

Workers can navigate to:

Active Orders Dashboard
Completed Orders

After logout:

Worker Login












2.9.15 Worker Portal Summary

The Worker Portal specification is now complete.

Unlike the Customer Portal, which focuses on customer engagement and booking creation, the Worker Portal is designed exclusively for operational efficiency within the store.

Worker Journey
Worker Login
      │
      ▼
Active Orders Dashboard
      │
      ├──────────────┐
      │              │
      ▼              ▼
Search Booking    Scan QR
      │              │
      └──────┬───────┘
             ▼
     Booking Details
             ▼
      Prepare Fish
             ▼
     Hand Over Fish
             ▼
     Complete Order
             ▼
Booking Moved to Completed Orders
Worker Portal Navigation
Worker Portal

├── WP-01 Active Orders Dashboard
│
├── WP-02 Completed Orders
│
└── WP-03 Worker Profile
Worker Portal Responsibilities

The Worker Portal is responsible for:

Retrieving active bookings.
Searching bookings manually.
Scanning booking QR codes.
Displaying booking information.
Completing customer orders.
Viewing completed order history.
Managing worker sessions.
Worker Portal Integrations
Module	Purpose
Booking Engine	Retrieve and update booking information
Customer Portal	Synchronize booking completion status
Notification Engine	Send booking completion notifications
Admin Portal	Update operational dashboards and reports
Worker Portal Boundaries

The Worker Portal does not:

Create customer bookings.
Accept or process payments.
Manage subscriptions.
Modify inventory.
Publish live truck tracking.
Manage CRM.
Configure system settings.

Its responsibility begins when a customer arrives to collect a booking and ends when the order has been successfully handed over.






2.10 Admin Portal Interface Specification
2.10.1 Overview

The Admin Portal is the Business Control Center of the PondFish Digital Ecosystem.

It provides business administrators with a centralized platform to manage daily operations, inventory, customer subscriptions, bookings, workers, live delivery tracking, business communications, website content, and operational analytics.

Unlike the Customer Portal, which focuses on customer interaction, or the Worker Portal, which focuses on order fulfillment, the Admin Portal oversees and coordinates every business process across the platform.

All operational modules communicate with or receive instructions from the Admin Portal, making it the central management interface for the entire ecosystem.

2.10.2 Responsibilities

The Admin Portal is responsible for managing:

Business Operations
Fish Inventory
Live Truck Tracking
Customer Bookings
Subscription Plans
Workers
Customer CRM
Business Communication
Customer Notifications
Landing Website Content
Promotional Banners
Business Information
Business Monitoring
Dashboard
Reports
Analytics
Audit Logs
Business Configuration
Business Hours
Contact Information
Application Configuration
2.10.3 Interface Boundaries

The Admin Portal does not directly perform customer-facing operations.

It does not:

Book fish for customers.
Scan QR codes.
Complete worker tasks.
Process Razorpay transactions manually.
Authenticate customers.

Instead, it supervises and configures the systems that perform these operations.

2.10.4 Operational Structure

The Admin Portal is organized according to business operations rather than technical modules.

Admin Portal

├── Dashboard
│
├── Operations
│   ├── Fish Inventory
│   ├── Live Truck Tracking
│   ├── Bookings
│
├── Customer Management
│   ├── Customers (CRM)
│   ├── Subscription Plans
│
├── Staff Management
│   └── Workers
│
├── Business Management
│   ├── Notifications
│   ├── Website Content
│   ├── Business Settings
│
└── Reports
    ├── Analytics
    ├── Exports
    └── Audit Logs

This structure reflects the actual workflow of the business and allows future modules to be added without restructuring the navigation.

2.10.5 Operational Flow

The Admin Portal coordinates the complete business lifecycle.

Organic Farm

↓

Truck Starts

↓

Admin Publishes Live Delivery

↓

Customers Receive Notification

↓

Truck Arrives

↓

Inventory Updated

↓

Customers Book Fish

↓

Workers Complete Orders

↓

Reports & Analytics Updated

This operational flow serves as the backbone of the PondFish ecosystem and connects every interface within the platform.

2.10.6 Portal Integrations

The Admin Portal communicates with:

Module	Purpose
Customer Portal	Inventory, subscriptions, notifications, CRM
Worker Portal	Active bookings and worker management
Booking Engine	Booking monitoring and administration
Subscription Engine	Subscription plans and customer credits
Inventory Module	Fish stock management
Notification Engine	Customer communication
OneLap GPS	Live truck tracking
Razorpay	Payment verification and recharge records
Firebase Cloud Messaging	Push notification delivery
Landing Website	Business content and promotional updates
2.10.7 Navigation Structure

The Admin Portal uses a persistent left-side navigation on desktop and a collapsible navigation drawer on tablets.

Dashboard

Operations
   • Fish Inventory
   • Live Truck

Bookings

Customers

Subscriptions

Workers

Notifications

Website Content

Reports

Business Settings

Each module is accessible directly without nested navigation beyond one level, reducing unnecessary clicks during daily operations.

2.10.8 Design Philosophy

The Admin Portal is designed around business management, not software management.

Every module represents a real business activity performed by the store owner or manager.

The interface should prioritize:

Operational visibility.
Minimal navigation.
Real-time business information.
Clear data presentation.
Fast access to frequently used functions.

The design should allow administrators to manage the business efficiently without requiring technical knowledge.

2.10.9 Module Hierarchy

The Admin Portal consists of the following primary modules.

AP-01  Dashboard

AP-02  Fish Inventory

AP-03  Live Truck Tracking

AP-04  Bookings

AP-05  Customers (CRM)

AP-06  Subscription Management

AP-07  Worker Management

AP-08  Notifications

AP-09  Website Content

AP-10  Reports & Analytics

AP-11  Business Settings

AP-12  Audit Logs

Each module has a single responsibility, preventing overlap and maintaining a clean architecture.

2.10.10 Design Principle

The Admin Portal is the operational command center of the PondFish platform.

Every module should answer one business question:

Dashboard → What is happening right now?
Inventory → What fish are available?
Live Truck → Where is today's delivery?
Bookings → What orders are pending or completed?
Customers → Who are our customers and how are they using the service?
Subscriptions → How are subscription plans performing?
Workers → Who is handling today's operations?
Notifications → What messages have been sent or scheduled?
Website Content → What information is visible to customers?
Reports → How is the business performing?
Business Settings → How is the business configured?
Audit Logs → What administrative actions have been performed?

This principle ensures every module has a clear purpose and avoids duplicated functionality.









2.10.11 AP-01 — Admin Dashboard
Screen Information
Property	Description
Screen ID	AP-01
Screen Name	Admin Dashboard
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Admin Dashboard serves as the operational command center of the PondFish Digital Ecosystem.

It provides a consolidated, real-time overview of the business, allowing administrators to monitor daily operations, identify pending actions, and quickly navigate to operational modules that require attention.

Rather than acting as a reporting page, the dashboard functions as a business monitoring interface, presenting only the most relevant operational information needed to manage the store efficiently.

Business Objective

Provide administrators with immediate visibility into the current state of the business by presenting operational summaries, business alerts, and quick access to frequently used modules.

The dashboard should help administrators answer critical operational questions without navigating through multiple sections of the platform.

Interface Layout
+--------------------------------------------------------------------+

Good Morning, Admin

Today's Business Overview

---------------------------------------------------------------------

Business Summary Cards

---------------------------------------------------------------------

Today's Operations

---------------------------------------------------------------------

Business Alerts & Attention Required

---------------------------------------------------------------------

Sales & Subscription Overview

---------------------------------------------------------------------

Quick Actions

---------------------------------------------------------------------

Recent Business Activity

---------------------------------------------------------------------


The dashboard is organized according to operational priority, ensuring that the most important business information is always visible first.

Dashboard Components
1. Business Summary Cards

The top section provides a quick overview of today's business performance.

Displayed Information

Today's Bookings

Today's Revenue

Pending Orders

Completed Orders

Active Customers

Subscription Recharges

Live Delivery Status

Available Fish Types

Each card displays the current value and updates automatically as business activities occur.

Selecting a summary card redirects the administrator to its corresponding management module.

Example:

Pending Orders → Bookings
Available Fish Types → Fish Inventory
Live Delivery → Live Truck Tracking
2. Today's Operations

This section summarizes the operational status of the current business day.

Displayed Information

Total Fish Available
Total Quantity Available
Active Delivery Status
Workers Currently Active
Business Hours
Orders Waiting for Pickup

This section provides administrators with a live operational snapshot without requiring detailed navigation.

3. Business Alerts & Attention Required

This section highlights operational events that require administrator attention.

Examples include:

⚠ 5 bookings will expire within the next 6 hours.

⚠ Rohu stock is below the minimum availability threshold.

🚚 Live delivery is currently active.

📢 3 scheduled notifications will be published today.

⚠ 2 pending subscription recharges require manual approval.

Only actionable items are displayed in this section.

Resolved alerts are removed automatically.

Selecting an alert redirects the administrator to the corresponding module.

4. Sales & Subscription Overview

Displays visual summaries of business performance.

Charts displayed:

Daily Revenue

Displays daily revenue trends.

Monthly Revenue

Displays monthly business revenue.

Subscription Revenue

Displays revenue generated through subscription purchases and recharges.

Each chart supports filtering by:

Today
This Week
This Month
Custom Date Range

Selecting a chart redirects the administrator to the Reports module for detailed analysis.

5. Quick Actions

Provides shortcuts to frequently used administrative tasks.

Available Actions

Publish Live Delivery

Update Fish Inventory

Create Notification

Add New Fish

Create Worker

View Today's Bookings

These actions reduce navigation and allow administrators to perform common tasks directly from the dashboard.

6. Recent Business Activity

Displays a chronological timeline of significant business events.

Examples

Inventory updated by Admin

10 minutes ago

------------------------------------------------

Live delivery published

25 minutes ago

------------------------------------------------

Worker completed Booking PF-001258

32 minutes ago

------------------------------------------------

Subscription recharged

1 hour ago

------------------------------------------------

Customer booked 2 Kg Rohu

1 hour ago

This activity feed provides administrators with immediate visibility into ongoing business operations.

Dashboard Behavior

The dashboard updates automatically whenever business events occur.

Examples include:

New booking created.
Order completed.
Inventory updated.
Live delivery published.
Subscription recharged.
Worker completes an order.
Business notification sent.

Administrators do not need to refresh the dashboard manually.

Navigation

The dashboard acts as the central navigation hub of the Admin Portal.

Every summary card, alert, chart, and quick action redirects to its dedicated management module.

No operational changes are performed directly from the dashboard except through the provided quick actions.

Empty State

If no business activity exists for the selected period:

No business activity available.

Operational data will appear as the business begins processing customers.
Error State

If dashboard information cannot be retrieved:

Unable to load dashboard information.

Please try again.
Data Requirements

The dashboard requires aggregated information from multiple platform modules.

Operational Data
Today's Bookings
Pending Orders
Completed Orders
Active Workers
Live Delivery Status
Fish Inventory Summary
Financial Data
Today's Revenue
Subscription Revenue
Recharge Summary
Customer Data
Active Customers
Subscription Statistics
System Data
Recent Business Activity
Active Alerts
Scheduled Notifications




Dashboard Design Recommendation

The Admin Dashboard should prioritize awareness over management.

Its purpose is not to replace dedicated modules such as Inventory, Bookings, CRM, or Reports, but to give administrators a clear understanding of the current state of the business and guide them toward areas that require attention.

For this reason, the dashboard should emphasize:

Operational Health through live business metrics.
Actionable Alerts instead of passive notifications.
Quick Actions for frequently performed administrative tasks.
Business Trends through concise charts rather than detailed reports.
Recent Activity to provide transparency into ongoing operations.

Detailed editing, configuration, and management should always remain within their respective modules. By keeping the dashboard focused on visibility and decision-making, it remains clean, responsive, and valuable as the first screen administrators interact with every day.





SProjectX Design Recommendation

The Admin Dashboard should be designed specifically for the client's current business operations, which consist of a single store, single warehouse, and single delivery vehicle.

The interface should remain clean, focused, and optimized for managing one business location without introducing unnecessary features for multi-store or franchise management.

The dashboard should prioritize:

Business Health by displaying today's operational metrics.
Actionable Alerts that require immediate administrator attention.
Quick Actions for frequently performed daily operations.
Business Trends through concise revenue and booking charts.
Recent Activity to provide a real-time operational timeline.

All detailed management tasks should remain within their dedicated modules, allowing the dashboard to function as a true operational command center rather than a management interface.

SProjectX Architecture Recommendation

Although the MVP is designed exclusively for a single-store operation, the internal architecture should remain modular.

This does not mean exposing future features such as multi-store support or franchise management in the user interface. Instead, it means developing independent modules for Inventory, Bookings, Notifications, CRM, Reports, and Business Settings so that future enhancements can be introduced without restructuring the application.

For the MVP, the administrator should experience a streamlined dashboard focused entirely on managing one business location. If the business expands in the future, new capabilities can be integrated into the existing architecture with minimal changes to the overall system design.













2.10.12 AP-02 — Fish Inventory Management
Screen Information
Property	Description
Screen ID	AP-02
Screen Name	Fish Inventory Management
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Fish Inventory Management module allows the administrator to manage all fish available for sale within the PondFish ecosystem.

It serves as the central inventory control system where administrators can maintain the master fish catalog, update daily available quantities, publish inventory for customer bookings, manage pricing, and control the availability of individual fish.

This module ensures that customers always view accurate and up-to-date inventory before placing bookings.

Business Objective

Provide a centralized interface for managing fish inventory while ensuring accurate stock availability across the Customer Portal, Worker Portal, and Booking Engine.

The module should allow administrators to efficiently update inventory without requiring technical knowledge.

Interface Layout
------------------------------------------------------------

Inventory Summary

------------------------------------------------------------

Search Fish

Category Filter

Availability Filter

------------------------------------------------------------

Fish Inventory List

------------------------------------------------------------

Inventory Details Panel

------------------------------------------------------------


The interface follows the same list-and-details pattern used throughout the Admin Portal to maintain consistency.

Dashboard Components
1. Inventory Summary

The top section displays an overview of today's inventory.

Displayed Information

Total Fish Types
Total Available Quantity (Kg)
Available Fish
Unavailable Fish

Example

Total Fish Types

18

Available

15

Unavailable

3

Total Stock

214 Kg

Selecting any summary card applies the corresponding filter to the inventory list.

2. Search & Filters

Administrators can quickly locate fish using:

Search
Fish Name
Filters
Available
Unavailable
Freshwater
Saltwater
Shellfish

Filters can be combined to narrow results.

3. Fish Inventory List

The inventory list displays every fish available in the master catalog.

Each inventory card displays:

Fish Image
Fish Name
Category
Available Quantity
Selling Price
Availability Status

Example

Rohu

Freshwater

Available

12 Kg

₹320/Kg

Selecting a fish opens its detailed information panel.

Inventory Details Panel

The details panel allows administrators to manage an individual fish.

General Information

Displays:

Fish Name
Category
Description
Farm / Origin
Image

These fields can be edited whenever required.

Inventory Information

Administrators can update:

Available Quantity (Kg)
Selling Price
Availability Status

Example

Available Quantity

12 Kg

Selling Price

₹320/Kg

Status

Available

All updates take effect immediately after saving.

Availability Management

The administrator can manually control whether a fish is visible for booking.

Available options:

Available
Unavailable

The system also automatically marks a fish as Unavailable when its remaining quantity falls to 0.5 Kg or below, preventing customers from booking impractically small quantities.

The administrator may manually change the status if operationally required.

Add New Fish

Administrators can expand the master catalog by adding new fish species.

Required Information:

Fish Name
Category
Description
Origin / Farm
Image
Default Selling Price

Newly added fish become part of the master catalog and can be stocked whenever inventory becomes available.

Update Daily Quantity

At the beginning of each business day—or whenever new stock arrives—the administrator updates the available quantity for each fish.

Example

Rohu

18 Kg

↓

Update

25 Kg

This quantity becomes the available stock for customer bookings.

Remove Fish

If a fish should no longer be offered, the administrator can remove it from today's inventory.

This action:

Removes the fish from customer listings.
Prevents future bookings.
Does not delete historical booking records.

The fish remains in the master catalog and can be reactivated later.

User Actions

Administrators can:

Search fish.
Filter inventory.
Add new fish.
Edit fish information.
Update available quantities.
Update prices.
Change availability.
Remove fish from today's inventory.

Administrators cannot modify historical booking records from this module.

Navigation

The Inventory module connects with:

Live Truck Tracking
Bookings
Dashboard

Changes made here are reflected automatically across customer-facing modules.

Empty State

If no fish exist in the inventory:

No Fish Available

Add your first fish to begin managing inventory.
Error State

If inventory cannot be loaded:

Unable to retrieve inventory.

Please try again.

If an update fails:

Unable to save inventory changes.

Please try again.
Data Requirements
Fish Information
Fish ID
Fish Name
Category
Description
Origin
Image
Inventory Information
Available Quantity
Selling Price
Availability Status
SProjectX Design Recommendation

The Fish Inventory module should distinguish between the Master Fish Catalog and Daily Inventory.

The Master Fish Catalog stores permanent fish information such as name, category, image, description, and origin. These details rarely change and form the foundation of the product catalog.

The Daily Inventory stores operational information such as available quantity, selling price, and availability status. These values are updated regularly as new stock arrives or inventory changes throughout the day.

Separating these two concepts keeps the system organized, avoids duplicate data entry, and makes inventory management significantly easier. Administrators update only the operational details each day while maintaining a single source of truth for each fish in the catalog.












2.10.13 AP-03 — Live Truck Tracking & Delivery Session
Screen Information
Property	Description
Screen ID	AP-03
Screen Name	Live Truck Tracking & Delivery Session
Parent Interface	Admin Portal
Primary User	Business Administrator
Current Vehicles	One delivery truck
Purpose

The Live Truck Tracking module allows the administrator to monitor the delivery truck from the moment its GPS tracker becomes active and manage the customer-facing delivery session.

The module has two separate visibility levels:

Admin Tracking — the administrator can see the truck's live location whenever the tracker reports that the vehicle is active.
Customer Live Delivery — customers see the live journey only after the administrator publishes the delivery session.

This separation allows the administrator to monitor the delivery privately before deciding when to inform customers.

1. Delivery Session

Each trip from the farm to the PondFish store is represented as a delivery session.

A delivery session contains:

Origin / Farm Location
Destination / PondFish Store
Fish being transported
Quantity of each fish
Departure time
Live location
Estimated arrival information
Arrival time
Delivery record

The administrator creates the delivery information before publishing the journey to customers.

2. Live Truck Status

The truck's GPS tracking is available to the administrator independently of customer publication.

When the truck's tracker becomes active:

Truck Engine / Tracker Active
        ↓
GPS Location Available
        ↓
Admin Can View Live Location

The administrator can therefore monitor the truck even before customers are notified.

The Admin Portal displays:

Current truck location
Starting location
Destination
Journey progress
Distance remaining
Estimated arrival time
Tracking status
3. Delivery Information

Before publishing the delivery, the administrator enters the information associated with the journey.

Origin

The administrator selects the farm/origin location.

Destination

The destination is the PondFish warehouse/store location.

Fish List

The administrator specifies what is being transported.

Example:

Rohu        — 12 Kg
Pamplet     — 22 Kg
Katla       — 18 Kg
Tilapia     — 15 Kg

The administrator can edit this information even after the delivery has been published if the original information needs correction.

4. Publish Live Delivery

Once the administrator is satisfied with the delivery information, they can select:

[ Publish Live Delivery ]

This changes the customer-facing state of the delivery.

Customers then receive a push notification through the application.

The notification communicates that the fish delivery is currently on its way.

5. Customer Live Tracking

After publication, customers can access the live delivery information from the Customer Portal.

The customer-facing experience displays:

Fish Delivery On The Way

Farm
   ↓
🚚 Live Truck
   ↓
PondFish Store

Estimated Arrival

32 minutes

The truck position updates according to the available GPS data.

Customers can also see the fish information that the administrator associated with the delivery.

6. Delivery Information Updates

The administrator can modify the published delivery information while the truck is still travelling.

For example, if the administrator originally entered:

Rohu — 12 Kg

but later realizes the correct quantity is:

Rohu — 14 Kg

the administrator can update the delivery session.

The updated information is reflected in the customer-facing delivery information.

This allows mistakes in the original delivery description to be corrected without stopping the live tracking session.

7. Arrival Detection

When the truck reaches the configured destination, the tracking system detects that the truck has arrived.

The system then automatically ends the customer-facing live tracking after the configured 5-minute arrival period.

The customer receives an arrival notification such as:

Fish Has Arrived

Today's fish delivery has reached the PondFish store.

Available Fish:
Rohu
Pamplet
Katla
Tilapia

The customer can then open the fish section and see the updated availability.

8. Automatic Inventory Update

After the delivery reaches the destination and the arrival process completes, the inventory is automatically updated using the quantities recorded in the delivery session.

Example:

Delivery

Rohu       12 Kg
Pamplet    22 Kg
Katla      18 Kg

↓

Fish Inventory

Rohu       +12 Kg
Pamplet    +22 Kg
Katla      +18 Kg

This connects the delivery session directly with the Fish Inventory module without requiring the administrator to manually enter the same quantities again.

9. Delivery History

Every completed delivery session is retained in the Admin Portal.

The historical record contains:

Delivery ID
Origin
Destination
Fish transported
Quantity transported
Departure time
Arrival time
Tracking information
Delivery completion information

Example:

Delivery #DL-00042

From:
Organic Farm — Hyderabad

To:
PondFish Store

Departure:
06:20 AM

Arrival:
08:14 AM

Fish:
Rohu — 12 Kg
Pamplet — 22 Kg
Katla — 18 Kg

Status:
Completed

Historical delivery records are read-only after completion.

10. Delivery Session Interface

The main screen should be divided into three areas.

+-------------------------------------------------------------+

Delivery Status

Truck: Active
Tracking: Live
Customer Sharing: Published

--------------------------------------------------------------

                LIVE MAP

       🚚
       Current Truck Location

Farm ---------------------- Store

--------------------------------------------------------------

Delivery Information

Origin
Destination

Fish List
Quantity

--------------------------------------------------------------

[ Edit Delivery ]

[ Publish to Customers ]

--------------------------------------------------------------

The available action changes according to the delivery's current state.

For example, before publication:

[ Publish Live Delivery ]

After publication:

[ Delivery Published ]
11. Delivery States

The delivery session uses a small set of operational states.

Preparing
   ↓
Truck Active
   ↓
Published
   ↓
Arrived
   ↓
Completed

The Admin Tracking remains available while the GPS tracker is active, while customer visibility is controlled separately through the publication state.

12. Error Handling

If GPS information temporarily becomes unavailable:

GPS Signal Unavailable

Last known location:
08:12 AM

Waiting for tracker connection...

The system should retain the last known location rather than displaying an incorrect position.

If the delivery information cannot be published:

Unable to publish delivery information.

Please verify the delivery details and try again.
13. User Actions

The administrator can:

View the truck's live location.
View delivery progress.
Create a delivery session.
Select origin and destination.
Add fish and quantities.
Edit delivery information while the journey is active.
Publish the delivery to customers.
View delivery history.

The administrator does not manually update inventory from this screen after arrival. The delivery quantities are used by the system to update inventory automatically.

14. Integration With Other Modules

The Delivery Session connects several existing modules:

OneLap GPS
     │
     ▼
Live Truck Tracking
     │
     ├──────────────► Customer Notifications
     │
     ├──────────────► Customer Live Tracking
     │
     └──────────────► Delivery History
                          │
                          ▼
                    Fish Inventory

This keeps the delivery process connected without duplicating the same information in multiple places.

SProjectX Design Recommendation

The most important design decision for this module is to keep GPS tracking and customer publication separate.

The administrator should always have visibility of the truck when the tracker is active, while customers only receive the delivery journey after the administrator selects Publish Live Delivery.

This gives the business complete operational control without forcing the administrator to expose unfinished or incorrect delivery information to customers.

The delivery session also acts as the single source of truth for that journey. Fish quantities entered for the delivery are reused for customer notifications, arrival information, delivery history, and the automatic inventory update instead of requiring the same information to be entered repeatedly. This is especially important for this project because we are deliberately avoiding duplicated workflows and manual data entry.

















2.10.14 AP-04 — Booking Management
Screen Information
Property	Description
Screen ID	AP-04
Screen Name	Booking Management
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Booking Management module provides the administrator with a complete view of customer bookings across the PondFish platform.

It allows the administrator to monitor bookings, search for specific orders, review booking details, and handle exceptional situations such as cancellations or quantity changes when the originally booked fish is no longer available.

This module is the administrative view of the booking system. It does not replace the customer booking process or the worker fulfillment process.

1. Booking Overview

The top of the page provides a summary of booking activity.

Total Bookings

Pending

Completed

Cancelled

These counts can be viewed for the selected period.

The default view displays the current day's bookings.

2. Booking Filters

Administrators can filter bookings by:

Pending
Completed
Cancelled
Date

The administrator can also search for a specific booking.

3. Booking Search

The search function supports:

Booking ID
Customer Name
Customer Mobile Number
Fish Name

Example:

Search Booking...

Booking ID / Customer / Phone / Fish

Search results update without requiring a separate search page.

4. Booking List

Each booking is displayed as a row or card containing the information required for quick identification.

Example:

PF-001258

Stevan

Rohu

2 Kg

08 Aug 2026

Pending

The administrator can select a booking to open its complete details.

5. Booking Details

The details panel displays the complete administrative record of the booking.

Customer
Customer Name
Mobile Number
Customer ID
Fish
Fish Name
Booked Quantity
Price
Booking Date
Booking Time
Subscription
Subscription Type
Subscription Credit Used
Quantity covered by subscription
Additional Payment

If the booking required payment beyond the customer's subscription allowance:

Additional Quantity
Additional Amount
Razorpay Payment Status
QR
QR Ticket Status
QR Generation Information
Fulfillment
Booking Status
Worker who completed the order
Completion Date
Completion Time

The administrator can therefore trace a booking from creation through completion without needing to open another module.

6. Booking Status

The Booking Management interface displays the operational status of each booking.

The primary statuses are:

Pending

Completed

Cancelled

An additional Expired status is used when a booking reaches its 48-hour validity period without being completed.

These statuses are displayed according to the booking's actual lifecycle and are not manually changed simply for reporting purposes.

7. Booking Cancellation

The administrator can cancel a booking that has not yet been completed when there is a legitimate operational reason, such as the booked fish becoming unavailable.

The cancellation action is available only for eligible active bookings.

Before cancellation, the administrator receives a confirmation prompt:

Cancel Booking?

This booking has not been completed.

The applicable subscription credit will be restored.

[ Cancel ]

[ Confirm Cancellation ]

Once confirmed, the booking is marked as Cancelled and the applicable refundable value is returned to the customer's Subscription Credit according to the established refund rules.

The cancelled booking remains in the booking history for administrative records.

8. Booking Quantity Adjustment

If the originally booked fish is unavailable or the available quantity has changed, the administrator may adjust the booked quantity when necessary and with the customer's permission.

Example:

Booked Quantity

2.00 Kg

Updated Quantity

1.50 Kg

Customer Permission

Confirmed

[ Save Changes ]

The updated quantity becomes part of the booking record.

Any resulting subscription or payment calculation is handled according to the existing booking and payment logic rather than being manually calculated inside the booking list.

9. Completed Booking Tracking

For completed bookings, the administrator can identify which worker handled the order.

Example:

Booking

PF-001258

Customer

Stevan

Fish

Rohu — 2 Kg

Completed By

Worker: WK-1008

Completed At

12:18 PM

This provides traceability if a customer reports an issue, such as receiving a different fish or quantity from what was booked.

The administrator can search the Booking ID and identify the worker responsible for completing the transaction.

10. Booking History

Completed and cancelled bookings remain available in the system.

The administrator can review historical records using the date filter.

Examples:

Today

Yesterday

This Week

This Month

Custom Date Range

This allows the administrator to investigate previous transactions without altering them.

11. Read-Only Historical Records

Once a booking is completed or cancelled, its historical transaction information should not be freely editable.

The administrator can view the record but should not modify information that would change the historical transaction.

This protects the accuracy of operational records and audit history.

12. Empty State

If no bookings match the selected filters:

No Bookings Found

There are no bookings matching the selected filters.
13. Error State

If booking information cannot be retrieved:

Unable to load bookings.

Please try again.
14. Data Requirements

The Booking Management module uses:

Booking
Booking ID
Booking Date
Booking Time
Status
Expiry Time
Customer
Customer ID
Name
Mobile Number
Fish
Fish ID
Fish Name
Quantity
Price
Subscription
Subscription Type
Subscription Credit Used
Covered Quantity
Payment
Payment Status
Additional Amount
Razorpay Reference
Fulfillment
Worker ID
Completion Time
Completion Status
QR
QR Status
QR Generation Reference
SProjectX Design Recommendation

The Booking Management module should be designed primarily as a search and monitoring workspace, not as another place where the administrator performs the entire booking workflow.

The Customer Portal creates the booking, the Worker Portal fulfills it, and the Booking Management module provides the administrator with centralized visibility and controlled intervention when something goes wrong.

This separation is important for avoiding duplicated workflows. The Admin Portal should only provide administrative actions that are genuinely required—such as cancellation or an approved quantity adjustment—while normal booking creation and fulfillment remain within their respective interfaces.

This keeps the system's responsibilities clear:

Customer
   ↓
Creates Booking
   ↓
Booking Engine
   ↓
Worker
   ↓
Fulfills Booking
   ↓
Admin
   ↓
Monitors / Intervenes When Required

















2.10.15 AP-05 — Customer Management (CRM)
Screen Information
Property	Description
Screen ID	AP-05
Screen Name	Customer Management (CRM)
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Customer Management module provides the administrator with a centralized view of every registered PondFish customer.

It combines the customer's basic account information with their subscription activity, booking history, purchase quantity, and revenue contribution, allowing the administrator to understand the complete relationship between the customer and the business from one place.

This module is intended for customer management and historical visibility. Booking operations remain within AP-04, while subscription plan management remains within AP-06.

1. Customer Overview

The top of the CRM displays a summary of the current customer base.

Total Customers

Active Customers

Subscribed Customers

Inactive Customers

These figures provide the administrator with an immediate overview of the customer base.

2. Customer Search

The administrator can search for customers using:

Customer Name
Mobile Number
Customer ID

Example:

Search Customer...

Name / Phone / Customer ID

Search results update dynamically.

3. Customer Filters

The administrator can filter customers according to their account or subscription status.

Available filters:

All Customers

Active

Inactive

Blocked

Type 1 Subscribers

Type 2 Subscribers

No Active Subscription

These filters allow the administrator to quickly identify specific customer groups without creating separate customer lists.

4. Customer List

Each customer record displays the information required for quick identification.

Example:

PF-100284

Stevan

+91 XXXXX XXXXX

Type 1

Active

18 Bookings

Selecting a customer opens the complete customer record.

5. Customer Details

The customer details view is the central part of the CRM.

It combines the customer's identity, current membership, historical activity, and financial information.

Personal Information

Displays:

Customer ID
Full Name
Mobile Number
Age
Area
Registration Date

The administrator can edit the customer's name and mobile number when required.

Account Status

Displays the current account state:

Active
Blocked

or

Inactive

The administrator can block a customer when necessary.

A customer account may also be deactivated when it has remained unused for an extended period, such as one or two years.

Deactivation does not delete the customer's historical records.

6. Current Subscription

The customer's current subscription information is displayed within the customer record.

Information includes:

Current Subscription Plan
Subscription Status
Subscription Credit
Weekly Quantity Allowance
Remaining Weekly Quantity
Subscription Start Date
Subscription Recharge Information

Example:

Current Plan

Type 1

Subscription Credit

₹1,420

Weekly Allowance

2 Kg

Remaining This Week

0.8 Kg

If the customer has no active subscription:

No Active Subscription

The administrator can navigate to the Subscription Management module for subscription-specific operations.

7. Subscription History

The CRM provides a historical record of the customer's subscriptions.

The administrator can see:

Previous subscription plans
Subscription purchase dates
Recharge history
Subscription credit usage
Subscription completion
Subscription cancellation or expiration information

This allows the administrator to understand how the customer has used the subscription system over time.

8. Booking History

The customer's booking history is available directly from the customer record.

It includes:

Booking ID
Fish
Quantity
Booking Date
Booking Status
Payment Information
Completion Information

Example:

PF-001258

Rohu

2 Kg

08 Aug 2026

Completed

The administrator can open a booking to view its complete record.

Detailed booking management remains within AP-04.

9. Customer Purchase Summary

The CRM calculates customer-level purchasing statistics.

Displayed information includes:

Total Bookings

Total Fish Purchased

Total Subscription Purchases

Lifetime Spending

Last Booking Date

Example:

Total Bookings

18

Total Fish Purchased

36.5 Kg

Subscription Purchases

5

Lifetime Spending

₹12,840

Last Booking

08 Aug 2026

These values are calculated from the customer's historical transactions rather than manually entered by the administrator.

10. Customer Revenue Contribution

The administrator can see how much revenue the customer has generated for the business.

The calculation includes the customer's recorded subscription purchases and applicable booking payments.

This allows the administrator to understand the customer's overall financial contribution without manually reviewing every transaction.

11. Customer Account Actions

The administrator can perform controlled account-level actions.

Edit Customer

Allowed fields:

Name
Mobile Number
Block Customer

The administrator can block a customer when there is a legitimate business reason.

A confirmation is required before blocking.

Block Customer?

This customer will no longer be able to use the platform.

[ Cancel ]

[ Block Customer ]
Deactivate Customer

The administrator can deactivate accounts that are no longer being used.

Deactivation preserves historical information and prevents normal account activity without deleting the customer's records.

12. No Customer Notes

The CRM will not include customer-specific notes, labels, or VIP classifications.

All customers are managed under the same standard business process.

This keeps the CRM focused on factual customer information and transaction history rather than subjective customer classifications.

13. Customer Data Protection

Customer records should only be accessible to authorized administrators.

The CRM should not expose unnecessary customer information outside the Admin Portal.

Customer information displayed in the interface should be limited to what is required for business management and operational support.

14. Empty State

If no customers match the selected search or filter:

No Customers Found

Try changing your search or filter.

If the platform has no registered customers:

No Customers Yet

Registered customers will appear here.
15. Error State

If customer information cannot be retrieved:

Unable to load customer information.

Please try again.

If a customer update fails:

Unable to save customer changes.

Please try again.
16. Data Requirements
Customer
Customer ID
Name
Mobile Number
Age
Area
Registration Date
Account Status
Subscription
Current Plan
Subscription Status
Subscription Credit
Weekly Allowance
Subscription History
Booking
Booking History
Fish Purchased
Quantity
Booking Status
Booking Dates
Financial
Subscription Purchases
Additional Payments
Lifetime Spending
Activity
Total Bookings
Total Fish Purchased
Last Booking Date
SProjectX Design Recommendation

The CRM should function as a 360-degree customer record, rather than becoming another independent booking or subscription management system.

When the administrator opens a customer, they should be able to understand the customer's complete relationship with PondFish from one place:

Customer
   │
   ├── Personal Information
   │
   ├── Current Subscription
   │
   ├── Subscription History
   │
   ├── Booking History
   │
   ├── Fish Purchased
   │
   └── Lifetime Revenue

The important distinction is that the CRM displays and connects this information, while dedicated modules remain responsible for actually managing bookings and subscriptions.

This prevents duplicated functionality while giving the administrator a complete customer picture when investigating an issue, answering a customer query, or reviewing business activity

















2.10.16 AP-06 — Subscription Management
Screen Information
Property	Description
Screen ID	AP-06
Screen Name	Subscription Management
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Subscription Management module allows the administrator to manage the subscription plans offered by PondFish and monitor how customers are using those plans.

The module is designed around quantity-based weekly subscriptions, not a fixed weekly monetary allowance.

The current plans are:

Plan	Subscription Price	Weekly Fish Quantity
Type 1	₹2,000	2 Kg
Type 2	₹6,000	3 Kg

Customers can choose any available fish within their weekly quantity allowance. If their selected quantity exceeds the allowance, the additional quantity is paid through Razorpay.

1. Subscription Overview

The top of the module provides an overview of the subscription business.

Displayed information:

Active Subscriptions

Type 1 Subscribers

Type 2 Subscribers

Subscriptions Completed

Total Subscription Revenue

These figures help the administrator understand current subscription activity without opening individual customer records.

2. Subscription Plan Management

The administrator can view all subscription plans currently configured in the system.

Example:

------------------------------------------------------

Type 1

₹2,000

Weekly Quantity
2 Kg

Status
Active

------------------------------------------------------

Type 2

₹6,000

Weekly Quantity
3 Kg

Status
Active

------------------------------------------------------

The plan structure is stored independently from individual customer subscriptions.

This allows new plans to be introduced in the future without changing the existing subscription architecture.

3. Create Subscription Plan

The administrator can create additional subscription plans when the business introduces new offerings.

Plan information includes:

Plan Name
Subscription Price
Weekly Quantity
Plan Description
Status

Example:

Create Subscription

Plan Name
________________

Price
₹ _____________

Weekly Quantity
_____ Kg

Description
________________

Status
Active

[ Save Plan ]

The system validates the plan information before making it available to customers.

4. Edit Subscription Plan

The administrator can modify configurable plan information when required.

Possible editable information includes:

Plan Name
Subscription Price
Weekly Quantity
Description
Active/Inactive Status

Changes to a plan should not overwrite historical subscription records.

Existing customer subscriptions retain the plan information that applied when they were created.

5. Customer Subscription Records

The administrator can view customers currently using subscriptions.

Each record displays:

Customer Name
Customer ID
Subscription Type
Subscription Credit
Weekly Quantity
Remaining Weekly Quantity
Subscription Status

Example:

PF-100284

Stevan

Type 1

Credit: ₹1,420

Weekly Limit: 2 Kg

Remaining: 0.8 Kg

Active

Selecting a customer opens the subscription details.

6. Subscription Details

The administrator can view the complete subscription record for an individual customer.

Information includes:

Plan
Plan Name
Subscription Price
Weekly Quantity
Current Usage
Current Subscription Credit
Weekly Quantity Used
Weekly Quantity Remaining
Current Weekly Cycle
Account History
Subscription Start Date
Recharge History
Previous Subscription Cycles
Subscription Completion

This provides the administrator with a complete view of the customer's subscription usage without duplicating the customer's CRM record.

7. Weekly Subscription Cycle

Each customer's subscription operates according to the existing seven-day rotation.

The system records the customer's weekly usage based on the customer's subscription cycle.

Example:

Subscription

Type 1

Weekly Allowance

2 Kg

Used

1.2 Kg

Remaining

0.8 Kg

The weekly quantity is independent of the fish type selected by the customer.

A customer may use the allowance for any available fish.

8. Subscription Credit

Subscription Credit represents the customer's available monetary value associated with their active subscription.

The administrator can view the current credit balance.

Example:

Subscription Credit

₹1,420

When the customer's subscription credit is exhausted, the subscription becomes unavailable for further subscription-covered purchases until the customer obtains another subscription/recharge according to the business process.

The weekly quantity allowance does not continue independently after the subscription credit reaches zero.

9. Manual Credit Adjustment

The administrator can manually add or deduct Subscription Credit when required.

This is intended for exceptional situations such as:

Manual customer top-up.
Technical correction.
Approved adjustment.
Booking cancellation or expiry credit restoration.

Example:

Current Credit

₹1,420

Adjustment

+ ₹500

Reason

Manual Customer Top-up

New Credit

₹1,920

[ Confirm Adjustment ]

A reason should be recorded for every manual adjustment.

10. Manual Customer Recharge

Customers may sometimes give money physically to the business and request that their Subscription Credit be topped up.

The administrator can record this manually.

Example:

Customer

Stevan

Amount Received

₹2,000

Payment Method

Cash

Action

Add to Subscription Credit

[ Confirm Recharge ]

The transaction is recorded in the customer's subscription history and audit history.

11. Subscription Cancellation

The administrator can manage a customer's subscription when an operational issue requires intervention.

Any applicable refundable amount is returned to the customer's Subscription Credit according to the established business rules.

The historical subscription record remains available for reference.

12. Subscription History

The administrator can view historical subscription activity.

Records include:

Customer
Subscription Plan
Purchase Date
Subscription Price
Weekly Quantity
Credit Usage
Recharge Activity
Completion / Expiration
Adjustments

The history is retained for CRM and reporting purposes.

13. Subscription Revenue

The module provides subscription-related financial information for administrative monitoring.

The administrator can view:

Subscription Revenue
Type 1 Revenue
Type 2 Revenue
Recharge Amounts
Subscription Transactions

Detailed financial reporting remains available through the Reports module.

14. Plan Availability

Administrators can deactivate a plan when it is no longer offered.

Deactivating a plan:

Removes it from new customer subscription selection.
Does not delete historical subscription records.
Does not automatically alter existing customer subscription records.

This allows the business to introduce or retire plans without damaging historical data.

15. Empty State

If no subscription plans exist:

No Subscription Plans

Create a subscription plan to begin offering subscriptions to customers.

If no customers currently have subscriptions:

No Active Subscriptions

Customers with active subscriptions will appear here.
16. Error State

If subscription information cannot be loaded:

Unable to load subscription information.

Please try again.

If a plan or credit update fails:

Unable to save subscription changes.

No changes were made to the customer's subscription.
17. Data Requirements
Subscription Plan
Plan ID
Plan Name
Price
Weekly Quantity
Description
Status
Customer Subscription
Customer ID
Plan ID
Subscription Status
Subscription Start Date
Subscription Credit
Weekly Quantity
Weekly Usage
Remaining Quantity
Transactions
Recharge Amount
Credit Adjustment
Adjustment Reason
Transaction Date
Payment Method
Reference
SProjectX Design Recommendation

The Subscription Management module should clearly separate Subscription Plans from Customer Subscriptions.

Subscription Management

├── Plans
│   ├── Type 1
│   ├── Type 2
│   └── Future Plans
│
└── Customer Subscriptions
    ├── Active
    ├── Completed
    └── History

This separation is important because a plan is a business product, while a customer subscription is an individual customer's instance of that product.

For example, changing the Type 1 plan in the future should not rewrite the historical records of customers who previously purchased the old version of Type 1.

This gives the system flexibility for future subscription plans while keeping the current MVP simple and focused on the two existing plans.





















2.10.17 AP-07 — Worker Management
Screen Information
Property	Description
Screen ID	AP-07
Screen Name	Worker Management
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Worker Management module allows the administrator to create and manage the staff accounts used to access the Worker Portal.

It also provides visibility into each worker's completed orders so the administrator can identify which worker handled a particular booking when investigating operational issues.

The module is intentionally simple because the current business uses a single store and all workers have the same operational permissions.

1. Worker Overview

The top section provides a summary of the current workforce.

Total Workers

Active Workers

Disabled Workers

Orders Completed Today

These figures provide a quick view of the current staff and their activity.

2. Worker Search

The administrator can search workers using:

Worker Name
Worker ID
Mobile Number

Example:

Search Worker...

Name / Worker ID / Phone
3. Worker Filters

Workers can be filtered by account status:

All

Active

Disabled

No complex role-based filtering is required because the current system uses a single worker role.

4. Worker List

Each worker record displays:

Worker ID
Name
Mobile Number
Account Status
Orders Completed

Example:

WK-1008

Ramesh Kumar

+91 XXXXX XXXXX

Active

Today: 18 Orders

Selecting a worker opens the worker details panel.

5. Create Worker Account

Only the administrator can create Worker Portal accounts.

The administrator enters:

Worker Name
Mobile Number
Employee ID
Account Status

Example:

Create Worker

Name
________________

Mobile Number
________________

Employee ID
________________

Status

Active

[ Create Worker ]

After creation, the worker can authenticate through the Worker Portal using the configured authentication mechanism.

6. Worker Details

The administrator can view the complete worker record.

Personal Information
Worker Name
Worker ID
Mobile Number
Employee ID
Account Information
Account Status
Account Creation Date
Last Login
Operational Information
Total Orders Completed
Today's Orders
Monthly Orders
Recent Completed Orders

The worker's role is displayed as:

Store Worker

There is no requirement for multiple worker roles or permission levels in the current system.

7. Worker Account Editing

The administrator can update worker information when required.

Editable information includes:

Worker Name
Mobile Number
Employee ID

The administrator can also change the worker's account status.

8. Disable Worker

When a worker stops working at the store, the administrator can disable the worker account.

Example:

Disable Worker?

This worker will no longer be able to access the Worker Portal.

Existing completed-order records will remain available.

[ Cancel ]

[ Disable Worker ]

Disabling the account does not delete the worker's historical records.

This is important because previously completed bookings must continue to identify which worker handled them.

9. Worker Performance

The administrator can review worker activity.

The performance section displays:

Orders Completed Today

18

Orders Completed This Month

326

Total Orders Completed

1,248

The administrator can also open the worker's completed-order history.

10. Worker Order History

The administrator can see the bookings completed by a specific worker.

Example:

PF-001258

Stevan

Rohu

2 Kg

Completed by Ramesh

12:18 PM

This provides traceability when a customer reports an issue.

For example, if a customer claims they received a different fish from the one they booked, the administrator can search the booking and identify the worker responsible for completing that order.

The administrator can then investigate the original booking information and completion record.

11. Historical Worker Records

When a worker is disabled:

Their account becomes inactive.
They cannot access the Worker Portal.
Their completed orders remain stored.
Their historical order records continue to identify them.

The administrator must not delete a worker's historical operational records simply because the worker is no longer employed.

12. Empty State

If no workers have been created:

No Workers Added

Create a worker account to allow staff to access the Worker Portal.

[ Add Worker ]

If a worker has no completed orders:

No Completed Orders

This worker has not completed any customer bookings yet.
13. Error State

If worker information cannot be loaded:

Unable to load worker information.

Please try again.

If worker creation or editing fails:

Unable to save worker information.

Please try again.
14. Data Requirements
Worker
Worker ID
Name
Mobile Number
Employee ID
Account Status
Creation Date
Last Login
Performance
Orders Completed Today
Monthly Orders
Total Orders
Order History
Booking ID
Customer
Fish
Quantity
Completion Time
Worker ID
SProjectX Design Recommendation

The Worker Management module should remain role-simple but history-rich.

There is no need to introduce a complicated permission system because the current business has one store and all workers perform the same operational tasks.

The important capability is account control and traceability:

Admin Creates Worker
        ↓
Worker Uses Worker Portal
        ↓
Worker Completes Orders
        ↓
Completed Booking Records Worker
        ↓
Admin Can Trace Order Back to Worker

This gives the business accountability without adding unnecessary role-management complexity.

Worker performance should also remain informational rather than becoming a complicated employee-management system. The administrator needs to know how many orders a worker handled and which orders they handled, particularly when investigating customer complaints or fulfillment mistakes. That is the useful business requirement for the current MVP.

AP-07 Boundary

The Worker Management module does not manage:

Customer accounts.
Worker payroll.
Attendance.
Employee leave.
Multiple worker roles.
Performance ratings.
HR records.

Its responsibility is limited to Worker Portal access, staff information, and operational order traceability.










2.10.18 AP-08 — Notifications Management
Screen Information
Property	Description
Screen ID	AP-08
Screen Name	Notifications Management
Parent Interface	Admin Portal
Primary User	Business Administrator
Notification Service	Firebase Cloud Messaging
Purpose

The Notifications Management module allows the administrator to communicate directly with customers through application push notifications.

It supports both manual notifications created by the administrator and scheduled notifications that should be delivered at a future time.

The module also provides a history of notifications sent through the system so the administrator can verify what communication was issued and to whom.

1. Notification Overview

The top of the page provides a summary of notification activity.

Total Sent

Scheduled

Delivered

Failed

These values provide the administrator with a quick understanding of recent notification activity.

2. Create Notification

The administrator can create a notification directly from the Notifications Management page.

The creation interface contains:

Notification Title

Short heading displayed to the customer.

Example:

Fish Has Arrived
Notification Message

The main information shown to the customer.

Example:

Today's fresh fish delivery has arrived at the PondFish store.
Recipient Group

The administrator chooses who should receive the notification.

Available groups:

Everyone
Subscription Customers
Type 1 Customers
Type 2 Customers
Individual Customer
3. Individual Customer Notification

When Individual Customer is selected, the administrator can search for the customer using:

Customer Name
Mobile Number
Customer ID

Example:

Select Customer

Search customer...

Stevan
+91 XXXXX XXXXX

The selected customer becomes the only recipient.

4. Notification Scheduling

The administrator can choose whether the notification should be sent immediately or at a future time.

Send Immediately
● Send Now

[ Send Notification ]

The notification is sent after confirmation.

Schedule
○ Schedule

Date
08 Aug 2026

Time
06:00 PM

[ Schedule Notification ]

The notification is stored as a scheduled notification and is automatically sent at the configured time.

5. Notification Confirmation

Before sending a notification, the administrator receives a preview.

Example:

Notification Preview

--------------------------------

Fish Has Arrived

Today's fresh fish delivery has
arrived at the PondFish store.

--------------------------------

Recipients

Type 1 Customers

--------------------------------

[ Cancel ]

[ Send Notification ]

This provides the administrator with an opportunity to verify the message and recipient group before sending it.

6. Notification History

The administrator can view previously sent and scheduled notifications.

Each notification record displays:

Notification Title
Recipient Group
Created Date
Sent/Scheduled Date
Status
Recipient Count

Example:

Fish Has Arrived

Everyone

08 Aug 2026
08:15 AM

Delivered

486 Recipients

Selecting a notification opens its details.

7. Notification Details

The details panel displays:

Message
Title
Message Content
Audience
Recipient Group
Recipient Count
Timing
Created At
Scheduled At
Sent At
Delivery
Delivered Count
Failed Count
Notification Status

This provides an administrative record of the communication.

8. Scheduled Notifications

Scheduled notifications are displayed separately from completed notifications.

Example:

Upcoming Notifications

--------------------------------

Weekend Subscription Reminder

Type 1 Customers

Today — 06:00 PM

Scheduled

--------------------------------

Fresh Fish Update

Everyone

Tomorrow — 08:00 AM

Scheduled

The administrator can open a scheduled notification to review its details.

9. Notification Status

The system uses notification delivery states such as:

Scheduled
   ↓
Processing
   ↓
Sent
   ↓
Delivered

If delivery fails for a recipient, the delivery record should retain the failure information.

This allows the administrator to distinguish between a notification that was successfully processed and one where some deliveries were unsuccessful.

10. Automatic Notifications

The Notifications Management module also works alongside system-generated notifications.

These notifications are triggered by existing platform events and do not require the administrator to manually create them.

Examples include:

Live delivery published.
Fish delivery arrived.
Booking confirmation.
Booking completion.
Booking expiry.
Booking cancellation.
Subscription-related updates.

The administrator manages manual and scheduled communication from AP-08, while event-triggered notifications originate from their respective business workflows.

This prevents the notification module from duplicating the logic of the Booking, Delivery, and Subscription modules.

11. Delivery Notifications

When the administrator publishes a live delivery, the customer-facing delivery notification is generated according to the established delivery workflow.

The notification communicates that the fish delivery is currently travelling to the store.

When the delivery arrives, customers receive the arrival notification.

These events are automatically connected to the delivery session and do not require the administrator to manually recreate them from AP-08.

12. Notification Search & Filters

The administrator can search notification history using:

Notification Title
Recipient Group
Date

Filters include:

All

Sent

Scheduled

Failed

This allows the administrator to locate previous communications quickly.

13. Notification Actions

The administrator can:

Create notifications.
Select recipient groups.
Send notifications immediately.
Schedule notifications.
View notification history.
Search notification records.
Review delivery information.

For scheduled notifications, the administrator can manage the scheduled record before it is sent.

14. Empty States
No Notification History
No Notifications Yet

Sent notifications will appear here.
No Scheduled Notifications
No Scheduled Notifications

Future notifications will appear here.
15. Error States

If a notification cannot be created:

Unable to create notification.

Please verify the notification details and try again.

If delivery processing fails:

Notification delivery could not be completed.

Please try again later.
16. Data Requirements
Notification
Notification ID
Title
Message
Recipient Type
Recipient Count
Created At
Scheduled At
Sent At
Status
Delivery
Delivered Count
Failed Count
Delivery Result
Individual Recipient

When applicable:

Customer ID
Customer Name
Mobile Number
SProjectX Design Recommendation

The Notifications Management module should act as the communication control center, but it should not become responsible for the business events that trigger automatic notifications.

The distinction should remain clear:

Business Event
      │
      ├── Booking Created
      ├── Booking Completed
      ├── Booking Expired
      ├── Delivery Published
      └── Delivery Arrived
              │
              ▼
      Notification Engine
              │
              ▼
       Firebase Cloud Messaging
              │
              ▼
          Customer App

AP-08 is responsible for manual and scheduled communication, while the individual business modules remain responsible for triggering their own automatic notifications.

This prevents duplicated logic and ensures that a business event is defined only once within the platform.

For the MVP, notifications should remain focused on customer communication through Firebase Cloud Messaging. There is no need to introduce email campaigns, marketing automation, customer segmentation engines, or complex notification workflows that are outside the client's current requirements.
















2.10.19 AP-09 — Website Content Management
Screen Information
Property	Description
Screen ID	AP-09
Screen Name	Website Content Management
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Website Content Management module allows the administrator to manage the customer-facing content of the PondFish landing website without requiring developer involvement for routine content changes.

The module is limited to the content areas the client has specifically identified as requiring administrative control.

It does not function as a general-purpose CMS.

1. Content Management Overview

The administrator can manage the following website sections:

Website Content

├── Hero Section
├── About Us
├── Contact Information
├── Promotional Banners
└── Subscription Advertisements

Each section has its own editing interface.

2. Hero Section

The Hero Section controls the primary visual and introductory content displayed at the top of the landing website.

The administrator can manage:

Hero Image
Main Heading
Supporting Text
Primary Call-to-Action
Call-to-Action destination

Example:

Hero Section

[ Current Hero Image ]

Main Heading
Fresh Fish. Direct From Trusted Farms.

Supporting Text
Freshly sourced fish delivered to your local PondFish store.

Button Text
View Available Fish

[ Save Changes ]

The administrator can replace the hero image when a new promotional campaign or seasonal presentation is required.

3. About Us

The administrator can update the business introduction displayed on the landing website.

Editable information:

Section Heading
About Us Content
Supporting Image, if applicable

Example:

About Us

Heading
About PondFish

Content
____________________________

____________________________

[ Save Changes ]

The section should support formatted text while keeping the editing interface simple.

4. Contact Information

The administrator can manage the business contact information displayed publicly.

Information includes:

Business Contact Number
Business Email, if applicable
Store Address
Other approved contact information

The contact information should remain consistent with the Business Settings module where applicable.

The system should avoid maintaining two independent sources for the same business information.

5. Promotional Banners

The administrator can create and manage promotional banners displayed on the landing website.

A banner may contain:

Banner Image
Title
Supporting Text
Button Text
Button Destination
Display Status

Example:

Promotional Banner

[ Banner Image ]

Title
Fresh Fish Available Today

Description
Check today's available fish before booking.

Button
Book Now

Status
Active

[ Save Banner ]
6. Promotional Banner Management

The administrator can:

Add a new promotional banner.
Edit an existing banner.
Activate a banner.
Deactivate a banner.
Replace the banner image.
Update banner text.

Deactivating a banner removes it from the public website without deleting its historical configuration.

This allows previously used promotional content to be reused later.

7. Subscription Advertisements

The administrator can manage promotional content explaining the available subscription plans.

The section can display:

Subscription Heading
Description
Type 1 Information
Type 2 Information
Call-to-Action
Promotional Image, if required

Example:

Subscription Promotion

Heading
Choose Your PondFish Subscription

Type 1
₹2,000
2 Kg Weekly Allowance

Type 2
₹6,000
3 Kg Weekly Allowance

Button
View Subscriptions

The displayed plan information should be connected to the subscription plan data rather than manually maintained as separate pricing information wherever possible.

This prevents the website from displaying outdated subscription prices or quantities after an administrator updates a plan.

8. Content Preview

Before publishing changes, the administrator should be able to preview the updated content.

Example:

[ Preview ]

[ Save Changes ]

The preview allows the administrator to verify how the content will appear on the public website before making it visible to customers.

9. Publishing Changes

After editing content, the administrator confirms the update.

[ Save & Publish ]

Once published, the updated content becomes available on the landing website.

The administrator should receive a confirmation after successful publication.

Content published successfully.
10. Content History

Important content changes should be recorded in the platform's audit system.

For example:

Hero Banner Updated

Changed by:
Admin

Date:
08 Aug 2026

Time:
02:18 PM

The Website Content module itself does not need a separate complex version-management system for the MVP.

The existing Audit Logs module will maintain the administrative history.

11. Content Validation

The system should validate required fields before allowing publication.

Examples:

Hero image must use an accepted image format.
Required headings cannot be empty.
Promotional banners must contain the required content.
Invalid image uploads should be rejected.
Subscription promotional information must correspond to an active subscription plan.

This prevents incomplete or broken content from appearing publicly.

12. Empty States

If no promotional banners exist:

No Promotional Banners

Create a promotional banner to display promotional content on the website.

[ Add Banner ]

Other sections always have their basic configuration available and therefore do not require separate empty states.

13. Error States

If content cannot be saved:

Unable to save website content.

Please check the information and try again.

If an image upload fails:

Unable to upload image.

Please select another image and try again.
14. Data Requirements
Hero
Hero Image
Heading
Supporting Text
CTA Text
CTA Destination
About
Heading
Content
Image
Contact
Contact Number
Email
Address
Promotional Banner
Banner ID
Image
Title
Description
CTA
Status
Subscription Promotion
Heading
Description
Subscription Plan Reference
CTA
SProjectX Design Recommendation

The Website Content module should remain small and purpose-built rather than becoming a complete CMS.

The client only needs control over specific customer-facing information:

Hero
 ↓
About
 ↓
Contact
 ↓
Promotions
 ↓
Subscriptions

There is no need in the current MVP for features such as:

Blog management
Page builder
Drag-and-drop layouts
SEO page builder
Custom HTML editing
Navigation management
Multi-language content
Complex content versioning

This keeps the Admin Portal focused on the client's actual requirements and prevents the website management module from becoming unnecessarily complicated.

Important consistency rule

Where website information originates from an existing system module, the website should reference that data instead of maintaining a duplicate copy.

For example, subscription prices and weekly quantities should come from AP-06 Subscription Management rather than being manually entered again in AP-09.

Likewise, business contact information should have a single authoritative source through Business Settings.

This follows the same principle we've maintained throughout the PRD: one source of truth, no duplicated business data, and no duplicated workflows.




















2.10.20 AP-10 — Reports & Analytics
Screen Information
Property	Description
Screen ID	AP-10
Screen Name	Reports & Analytics
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Reports & Analytics module provides the administrator with historical business information that is useful for understanding sales, bookings, subscriptions, customers, fish quantities, and worker activity.

Unlike the Admin Dashboard, which focuses on current operational status, AP-10 focuses on historical analysis and reporting.

The administrator can select a date range, review relevant business metrics, and export the resulting data in Excel or CSV format.

1. Reports Overview

The top section provides the main reporting categories.

Reports

├── Revenue
├── Bookings
├── Subscriptions
├── Fish Sales
├── Customers
└── Workers

Selecting a category loads the relevant report without requiring a separate page for every report type.

2. Date Range

All reports use a common date filtering system.

Available options:

Today

Yesterday

This Week

This Month

Custom Date Range

For custom reporting, the administrator can select:

From: DD/MM/YYYY

To: DD/MM/YYYY

[ Apply ]

The selected date range applies to the currently viewed report.

3. Revenue Report

The Revenue Report provides an overview of business revenue during the selected period.

Displayed metrics include:

Total Revenue
Subscription Revenue
Additional Booking Payments
Recharge Amounts

Example:

Revenue

Total Revenue
₹2,84,500

Subscription Revenue
₹1,80,000

Additional Payments
₹84,500

Recharge Amount
₹20,000

The report should also display revenue trends visually.

4. Revenue Chart

The administrator can view revenue over time.

For example:

Monthly Revenue

₹
│
│       ╭──╮
│   ╭───╯  ╰──╮
│───╯         ╰────
│
└────────────────────
 Jan Feb Mar Apr May

The chart can represent:

Daily revenue
Weekly revenue
Monthly revenue

depending on the selected reporting period.

5. Booking Report

The Booking Report provides historical information about customer bookings.

Displayed metrics include:

Total Bookings
Pending Bookings
Completed Bookings
Cancelled Bookings
Expired Bookings

Example:

Booking Summary

Total       1,284
Completed   1,102
Pending        82
Cancelled      61
Expired        39

The administrator can also view booking trends over the selected period.

6. Fish Sales Report

The Fish Sales Report shows the quantity of fish booked and completed during the selected period.

Information includes:

Fish Name
Total Quantity Booked
Total Quantity Completed
Number of Bookings

Example:

Fish Performance

Rohu

Booked
182 Kg

Completed
174 Kg

Bookings
86

The administrator can compare different fish types to understand which fish are most frequently purchased.

7. Subscription Report

The Subscription Report provides information about subscription activity.

Displayed information includes:

Total Active Subscriptions
Type 1 Subscriptions
Type 2 Subscriptions
Subscription Revenue
Recharge Amounts
Completed Subscriptions

Example:

Subscription Performance

Type 1

Active: 82
Revenue: ₹1,64,000

Type 2

Active: 34
Revenue: ₹2,04,000

The administrator can use this report to understand how the two plans are performing.

8. Customer Report

The Customer Report provides aggregated customer activity.

Information includes:

New Customers
Active Customers
Customers with Subscriptions
Total Customer Bookings
Total Quantity Purchased
Customer Revenue

The report is intended for business analysis rather than individual customer management.

Individual customer information remains available in AP-05 Customer Management.

9. Worker Report

The Worker Report provides operational performance information.

Displayed information includes:

Worker Name
Orders Completed
Orders Completed Today
Monthly Orders
Total Orders

Example:

Worker Performance

Ramesh

Today
18

This Month
326

Total
1,248

The administrator can use this information to understand order-handling activity and investigate operational records.

Detailed worker account management remains within AP-07 Worker Management.

10. Report Tables

Charts provide high-level visual analysis, while tables provide the underlying information.

Example:

---------------------------------------------------------
Fish       Quantity      Bookings       Revenue
---------------------------------------------------------
Rohu       182 Kg        86             ₹58,240
Katla      143 Kg        61             ₹46,720
Pamplet    128 Kg        54             ₹72,640
Tilapia    106 Kg        49             ₹31,800
---------------------------------------------------------

Tables should support sorting where useful.

11. Export

Administrators can export report data in:

Excel (.xlsx)
CSV (.csv)

Example:

[ Export Excel ]

[ Export CSV ]

The exported file should respect the currently selected:

Report category
Date range
Filters

This ensures that the downloaded information corresponds to what the administrator is currently reviewing.

12. Export Data

Exported reports should contain structured data suitable for further business analysis.

For example, a Fish Sales export may contain:

Fish Name
Date
Quantity
Bookings
Revenue

A Revenue export may contain:

Date
Subscription Revenue
Additional Payment
Recharge
Total Revenue

The exact columns depend on the selected report.

13. Report Filters

Where applicable, reports can be filtered by:

Date
Fish
Subscription Type
Booking Status
Worker

Filters should only appear when relevant to the selected report.

This prevents the reporting interface from becoming unnecessarily complicated.

14. Report Data Accuracy

Reports should use the same underlying records used by the operational modules.

For example:

Bookings
   ↓
Booking Records
   ↓
Reports

Subscriptions
   ↓
Subscription Records
   ↓
Reports

Fish Inventory
   ↓
Inventory Records
   ↓
Reports

Reports should not maintain separate manually entered datasets.

This ensures that the information shown in AP-10 remains consistent with the rest of the platform.

15. Empty State

If there is no data for the selected period:

No Data Available

There is no business activity for the selected date range.
16. Error State

If report data cannot be loaded:

Unable to load report data.

Please try again.

If an export cannot be generated:

Unable to generate the report.

Please try again.
17. Data Requirements
Revenue
Date
Subscription Revenue
Additional Payments
Recharge Amount
Total Revenue
Bookings
Booking ID
Date
Status
Fish
Quantity
Customer
Revenue
Fish
Fish Name
Quantity
Booking Count
Completed Quantity
Revenue
Subscriptions
Plan
Active Subscriptions
Subscription Revenue
Recharge Amount
Subscription Status
Customers
Customer Count
Booking Count
Quantity Purchased
Revenue
Workers
Worker
Orders Completed
Date
Booking IDs
SProjectX Design Recommendation

The Reports & Analytics module should remain a business reporting system, not another operational management interface.

The distinction should remain clear:

Admin Dashboard
      ↓
"What is happening now?"

Reports & Analytics
      ↓
"What happened over time?"

The Dashboard provides immediate operational awareness, while AP-10 provides historical analysis and downloadable records.

We should also avoid adding unnecessary AI analytics or predictive features here. You have already decided that AI demand forecasting, personalized recommendations, and predictive inventory alerts are not part of the current solution, so AP-10 should remain focused on reliable historical data and straightforward business reporting.

The most important principle is that reports should be generated from existing platform data rather than maintaining another reporting database or manually entered information. This keeps the numbers consistent across the Admin Dashboard, CRM, Booking Management, Subscription Management, and Reports.

For the MVP, Excel and CSV export are sufficient. There is no need to introduce PDF reporting unless the client later identifies a specific business requirement for it.





















2.10.21 AP-11 — Business Settings
Screen Information
Property	Description
Screen ID	AP-11
Screen Name	Business Settings
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Business Settings module allows the administrator to maintain the core business information and operational configuration used throughout the PondFish platform.

The module is intentionally limited to settings that the business administrator needs to control. Technical infrastructure, application deployment, database configuration, API credentials, backups, and developer-level system settings remain outside the Admin Portal.

1. Business Information

The administrator can maintain the primary information representing the PondFish business.

Information includes:

Business Name
Contact Number
Business Email, if applicable
Store Address
Warehouse/Store Location

Example:

Business Information

Business Name
PondFish

Contact Number
+91 XXXXX XXXXX

Email
business@example.com

Store Address
________________________

[ Save Changes ]

These details can be used by the landing website and other customer-facing areas where applicable.

2. Business Hours

The administrator can configure the regular operating hours of the store.

The configuration includes:

Opening Time
Closing Time

Example:

Business Hours

Opening Time

07:00 AM

Closing Time

09:00 PM

[ Save Changes ]

The configured business hours are used to communicate the store's operating schedule to customers.

Important Booking Rule

Business hours do not control the 48-hour booking expiry.

A customer may book fish outside business hours and collect the booking when the store is operating.

The booking remains valid according to the established 48-hour validity period.

3. Store Location

The administrator can maintain the store's operational location.

Information includes:

Store Address
Map Location
Latitude
Longitude

The location is used by the platform where the store destination is required, particularly for the delivery tracking system.

The destination configured here can be used as the default destination for delivery sessions rather than requiring the administrator to enter the same store location repeatedly.

4. Contact Information

The administrator can maintain the contact information displayed to customers.

This may include:

Contact Number
Business Email
Store Address

The same information can be referenced by the Landing Website and customer-facing contact sections.

The system should maintain a single source of truth for these business details rather than storing separate copies in multiple modules.

5. Business Status

The administrator can view the current operational state of the business.

Example:

Business Status

OPEN

07:00 AM — 09:00 PM

Outside configured operating hours:

Business Status

CLOSED

Opens at 07:00 AM

This information can be displayed to customers on the appropriate customer-facing interfaces.

The business status does not invalidate or cancel existing bookings.

6. Settings Validation

Before saving changes, the system validates the information entered by the administrator.

Examples:

Opening time must be valid.
Closing time must be valid.
Contact number must follow the accepted format.
Required business information cannot be empty.
Store location must contain valid location information.

If the information is invalid, the administrator receives an appropriate validation message instead of saving incorrect configuration.

7. Save Changes

Settings are saved explicitly by the administrator.

[ Save Changes ]

After successful saving:

Business settings updated successfully.

Important setting changes should also be recorded in the platform's Audit Logs.

8. Settings Used Across the Platform

Business Settings acts as the authoritative source for common business information.

For example:

Business Settings
       │
       ├── Landing Website
       │
       ├── Customer Portal
       │
       ├── Delivery Destination
       │
       └── Business Information

This prevents administrators from having to update the same business information in multiple places.

9. Error State

If settings cannot be loaded:

Unable to load business settings.

Please try again.

If changes cannot be saved:

Unable to save business settings.

No changes were made.
10. Data Requirements
Business
Business Name
Contact Number
Email
Store Address
Operating Hours
Opening Time
Closing Time
Location
Address
Latitude
Longitude
Status
Current Business Status
SProjectX Design Recommendation

The Business Settings module should remain small and centralized.

Its purpose is to manage information that represents the business itself, not to become a general system configuration panel.

The most important architectural principle is:

One business setting should have one authoritative source.

For example, the store address should not be separately entered in the Landing Website, Delivery module, and Customer Portal.

Instead:

Business Settings
       ↓
Store Address
       ↓
Landing Website
       ↓
Customer Information
       ↓
Delivery Destination

This reduces duplicated data and prevents inconsistencies.

Technical configuration such as API keys, Firebase configuration, Razorpay credentials, database settings, server configuration, backups, and deployment controls should remain with the development team and should not be exposed through the Admin Portal.

The current MVP only requires the administrator to manage the single PondFish store's business information, operating hours, contact details, and location. Multi-store or franchise settings are intentionally outside the current scope.























2.10.22 AP-12 — Audit Logs
Screen Information
Property	Description
Screen ID	AP-12
Screen Name	Audit Logs
Parent Interface	Admin Portal
Primary User	Business Administrator
Purpose

The Audit Logs module provides a permanent record of important administrative actions performed within the PondFish platform.

Its purpose is traceability. When an important business record is changed, the system should retain information about what was changed, when it was changed, and which administrator performed the action.

The Audit Log is a historical record and should not be used as an operational editing interface.

1. Audit Log Overview

The top of the page provides a simple summary of administrative activity.

Total Actions

Today

This Week

This Month

These values represent recorded administrative actions within the selected period.

2. Audit Log List

Each audit record is displayed in a chronological list.

Example:

08 Aug 2026 • 02:18 PM

Admin

Updated Fish Inventory

Rohu quantity changed
12 Kg → 18 Kg

------------------------------------------------

08 Aug 2026 • 01:42 PM

Admin

Published Live Delivery

Delivery ID: DL-00042

------------------------------------------------

08 Aug 2026 • 12:30 PM

Admin

Created Worker

Worker ID: WK-1008

The newest actions appear first.

3. Audit Log Information

Each record should contain the following information:

Audit Log ID
Date
Time
Administrator
Action
Module
Affected Record
Previous Value, when applicable
New Value, when applicable
Action Result

This creates a clear historical record without requiring the administrator to investigate multiple modules.

4. Tracked Administrative Actions

The system should record important changes such as:

Inventory
Fish added
Fish information edited
Quantity changed
Fish removed
Availability changed
Price changed
Delivery
Delivery session created
Delivery information edited
Live delivery published
Delivery completed
Bookings
Booking cancelled
Booking quantity adjusted
Administrative booking changes
Customers
Customer information edited
Customer blocked
Customer deactivated
Subscriptions
Subscription plan created
Subscription plan edited
Subscription plan deactivated
Subscription Credit manually added
Subscription Credit manually deducted
Manual customer recharge
Administrative subscription changes
Workers
Worker created
Worker information edited
Worker disabled
Notifications
Notification created
Notification scheduled
Notification sent
Website Content
Hero content updated
About Us content updated
Promotional banner changed
Subscription advertisement changed
Business Settings
Contact information changed
Business hours changed
Store information changed
Store location changed
5. Audit Search

The administrator can search the audit history.

Search can be performed using:

Audit Log ID
Administrator
Action
Affected Record

Example:

Search Audit Logs...

Admin / Action / Record ID
6. Audit Filters

The administrator can filter records by:

Module
All

Inventory

Delivery

Bookings

Customers

Subscriptions

Workers

Notifications

Website

Business Settings
Action

Examples:

Created
Updated
Deleted/Removed
Cancelled
Disabled
Published
Adjusted
Date
Today

Yesterday

This Week

This Month

Custom Date Range

Filters can be combined to narrow the results.

7. Audit Details

Selecting an audit record opens a read-only details panel.

Example:

Audit Log

------------------------------------------------

Action

Inventory Updated

------------------------------------------------

Performed By

Admin

------------------------------------------------

Date

08 Aug 2026

Time

02:18 PM

------------------------------------------------

Record

Fish: Rohu

------------------------------------------------

Previous Quantity

12 Kg

------------------------------------------------

New Quantity

18 Kg

------------------------------------------------

Result

Successful

The administrator cannot modify the audit record.

8. Before & After Values

For actions involving data changes, the audit record should preserve the relevant previous and new values.

Example:

Field

Available Quantity

Before

12 Kg

After

18 Kg

This is particularly useful for:

Inventory changes
Subscription Credit adjustments
Fish price changes
Customer information changes
Business setting changes
9. Administrative Traceability

For actions affecting important records, the audit log should maintain the relationship between the administrator and the affected record.

Example:

Admin
  ↓
Updated Inventory
  ↓
Fish ID: FISH-001
  ↓
Rohu
  ↓
12 Kg → 18 Kg

This allows the business owner to determine exactly which administrator performed an action if a discrepancy is discovered later.

10. Read-Only Nature

Audit records are permanently read-only from the Admin Portal.

Administrators cannot:

Edit audit records.
Change timestamps.
Change the recorded administrator.
Modify previous values.
Delete audit records from the interface.

This protects the reliability of the historical record.

11. Empty State

If no audit records exist:

No Audit Activity

Administrative actions will appear here as they occur.
12. Error State

If audit records cannot be loaded:

Unable to load audit logs.

Please try again.

If the audit details cannot be retrieved:

Unable to retrieve audit details.

Please try again.
13. Data Requirements

Each audit record should contain:

Audit ID

Admin ID

Admin Name

Action

Module

Entity Type

Entity ID

Previous Value

New Value

Timestamp

Result

Only relevant fields need to be populated for each action.

For example, an action that creates a worker will not have a previous value, while an inventory quantity update will contain both previous and new values.

SProjectX Design Recommendation

The Audit Logs module should remain simple, immutable, and focused on accountability.

It should not become another reporting system or duplicate the history already displayed in Booking, Subscription, Customer, or Worker modules.

Instead, those modules answer:

"What happened to this business record?"

while Audit Logs answer:

"Who made the administrative change?"

For example:

Fish Inventory
     ↓
Rohu = 18 Kg

Audit Log
     ↓
Admin changed Rohu
12 Kg → 18 Kg
08 Aug 2026, 02:18 PM

This distinction keeps the architecture clean while giving the business owner a reliable administrative trail.

For the MVP, there is no need for advanced compliance tooling, automated log exports, or complex audit-management features. The important requirement is that significant administrative actions are automatically recorded and remain tamper-resistant and read-only.

Admin Portal — Section 2 Completion

With AP-12, we have now completed the entire Admin Portal interface blueprint:

AP-01  Admin Dashboard                 ✅
AP-02  Fish Inventory                  ✅
AP-03  Live Truck / Delivery Session   ✅
AP-04  Booking Management              ✅
AP-05  Customer CRM                    ✅
AP-06  Subscription Management         ✅
AP-07  Worker Management               ✅
AP-08  Notifications                   ✅
AP-09  Website Content                 ✅
AP-10  Reports & Analytics             ✅
AP-11  Business Settings               ✅
AP-12  Audit Logs                      ✅

So Section 2 — UI Blueprint is now complete.
























SECTION 3 — SYSTEM-LEVEL WORKFLOWS
3.1 Purpose of This Section

This section defines the complete operational workflows of the PondFish platform across the:

Landing Website
Customer Portal
Worker Portal
Admin Portal
Booking Engine
Subscription Engine
Inventory System
Payment Gateway
QR Ticket System
OneLap GPS Tracking
Firebase Notifications
CRM
Reporting
Audit Logging

The purpose is to establish one consistent source of truth for how information moves through the platform.

3.2 Overall PondFish Ecosystem

The complete system can be understood as five connected operational layers.

                    PONDFISH ECOSYSTEM

                         ADMIN
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    Inventory          Delivery           Business
    Management         Tracking           Management
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                           ▼
                    CUSTOMER PORTAL
                           │
                 Fish Discovery & Booking
                           │
                           ▼
                 BOOKING / PAYMENT ENGINE
                           │
              ┌────────────┴────────────┐
              │                         │
       Subscription Credit          Razorpay
              │                         │
              └────────────┬────────────┘
                           │
                           ▼
                       QR TICKET
                           │
                           ▼
                    WORKER PORTAL
                           │
                           ▼
                    ORDER COMPLETION
                           │
              ┌────────────┼────────────┐
              │            │            │
             CRM        Reports       Audit
3.3 Core Business Lifecycle

The overall business process follows this sequence:

Organic Farm
     ↓
Fish Loaded Into Truck
     ↓
Truck GPS Becomes Active
     ↓
Admin Monitors Live Location
     ↓
Admin Creates Delivery Session
     ↓
Admin Publishes Delivery
     ↓
Customers Receive Notification
     ↓
Customers View Live Delivery
     ↓
Truck Arrives At Store
     ↓
Delivery Session Completes
     ↓
Inventory Automatically Updated
     ↓
Customers Receive Fish-Arrival Notification
     ↓
Customer Selects Fish
     ↓
Customer Creates Booking
     ↓
Subscription / Razorpay Calculation
     ↓
Payment Completed
     ↓
QR Ticket Generated
     ↓
Inventory Reserved
     ↓
Worker Retrieves Booking
     ↓
Fish Prepared
     ↓
Order Completed
     ↓
QR Invalidated
     ↓
Customer History Updated
     ↓
CRM Updated
     ↓
Reports Updated
     ↓
Audit Record Created

This is the master business workflow for the platform.

Each individual workflow below will explain one part of this lifecycle in detail.

3.4 System-Wide Principles

The following principles apply across all workflows.

1. One Source of Truth

Important business information must originate from one authoritative system.

For example:

Fish information → Fish Catalog
Available quantity → Inventory
Subscription plans → Subscription Management
Customer identity → Customer Account
Booking → Booking Engine
Delivery → Delivery Session
Business information → Business Settings

Other modules consume this information rather than creating duplicate copies.

2. Inventory Is Booking-Aware

Inventory availability must reflect customer bookings.

When a booking is successfully created, the relevant quantity is reserved so another customer cannot book the same available quantity.

Inventory should therefore distinguish between the quantity physically available and the quantity already reserved through bookings.

3. Worker Completion Does Not Create Inventory Changes

The Worker Portal is responsible for fulfillment.

It does not create the inventory reservation.

Inventory availability is established during the delivery/inventory process and affected by successful customer bookings.

Therefore:

Fish Arrives
   ↓
Inventory Updated
   ↓
Customer Books
   ↓
Quantity Reserved
   ↓
Worker Completes
   ↓
No New Inventory Reservation

This avoids duplicating inventory logic.

4. QR Is a Booking Credential

The QR code represents the customer's valid booking ticket.

It is generated after successful booking creation and payment processing where applicable.

The QR can be retrieved by:

Customer
Worker through scanning

After the order is completed, the QR becomes invalid and cannot be reused.

5. 48-Hour Booking Validity

A booking remains valid for 48 hours from its creation time.

The validity period is independent of store opening and closing hours.

Therefore:

Booking Created
       ↓
48-Hour Validity
       ↓
Customer Collects
       OR
Booking Expires

Business hours only describe when the store operates and do not determine booking expiration.

6. Subscription Quantity Is Fish Quantity

Subscription plans provide a weekly fish quantity allowance.

Current plans:

Type 1
₹2,000
2 Kg / Week

Type 2
₹6,000
3 Kg / Week

The customer can choose any available fish within the applicable weekly quantity.

If the customer requires more than their applicable subscription coverage, the additional amount is handled through Razorpay.

7. Subscription Credit

The platform consistently uses the term:

Subscription Credit

It represents the customer's available monetary credit associated with their subscription.

When applicable:

Subscription Credit
       +
Razorpay Additional Payment
       ↓
Booking Payment

The system records both components separately.

3.5 Major System Workflows

The remainder of Section 3 will be organized into these workflows:

SW-01 — Customer Registration & Authentication

How a new customer enters the ecosystem.

SW-02 — Fish Delivery & Live Tracking

Farm → truck → store → customer notification → inventory.

SW-03 — Inventory Availability

How incoming fish become available for customer booking and how availability changes.

SW-04 — Customer Booking

Fish selection → quantity → subscription calculation → payment → booking → QR.

SW-05 — Subscription Booking

How Type 1 and Type 2 customers use their weekly allowance.

SW-06 — Non-Subscription Booking

How customers without an active subscription pay directly through Razorpay.

SW-07 — Extra Quantity Payment

How quantity exceeding subscription coverage is handled.

SW-08 — Worker Order Fulfillment

Search/QR → booking details → fish preparation → completion.

SW-09 — Booking Expiration

What happens when a booking reaches 48 hours without completion.

SW-10 — Booking Cancellation

Admin cancellation and restoration of applicable customer credit.

SW-11 — Customer Notifications

How system events generate notifications.

SW-12 — CRM & Customer History

How customer activity becomes part of the CRM.

SW-13 — Reporting

How operational transactions become reportable business data.

SW-14 — Audit Trail

How important administrative actions are recorded.

3.6 Workflow Documentation Rule

For every workflow we document, we will use the same structure:

Workflow Purpose
      ↓
Trigger
      ↓
Actors
      ↓
Input
      ↓
Processing
      ↓
Decision Points
      ↓
System Actions
      ↓
Output
      ↓
Failure / Exception Handling
      ↓
Records Created or Updated

This will make Section 3 useful not only for the client and developers, but also for anyone who needs to understand the platform later.

And importantly, we won't repeat the UI descriptions from Section 2. If a workflow says "customer selects a fish," we explain the system operation behind that action rather than rewriting the Fish Discovery screen.

3.7 Workflow Dependency Map

The workflows are connected as follows:

SW-01
Registration
    │
    ▼
Customer Account
    │
    ├───────────────────────┐
    │                       │
    ▼                       ▼
SW-02                    SW-05
Delivery                 Subscription
    │                       │
    ▼                       │
SW-03                       │
Inventory                   │
    │                       │
    └───────────┬───────────┘
                ▼
             SW-04
             Booking
                │
       ┌────────┴────────┐
       │                 │
       ▼                 ▼
   SW-05/06          SW-07
Subscription       Extra Payment
       │                 │
       └────────┬────────┘
                ▼
             QR Ticket
                │
                ▼
             SW-08
       Worker Fulfillment
                │
       ┌────────┼────────┐
       │        │        │
       ▼        ▼        ▼
     CRM     Reports    Audit
       │
       ▼
 Notifications

This dependency map will be the reference structure for the detailed workflows that follow.
















3.8 SW-01 — Customer Registration & Authentication
Workflow Purpose

SW-01 defines how a person creates and accesses a PondFish customer account.

The workflow uses mobile-number authentication with OTP verification through Firebase Authentication. There is no password-based login and therefore no forgot-password workflow.

The registration process collects the minimum customer information required by the PondFish platform:

Mobile Number
OTP
Name
Age
Area

Once registration is completed, the customer account becomes available across the Customer Portal, Booking System, Subscription System, CRM, and notification system.

Trigger

The workflow starts when a new user selects Create Account / Register from the Customer Portal.

An existing customer starts the authentication flow when they enter their registered mobile number to access their account.

Actors
Actor	Responsibility
Customer	Provides mobile number and registration information
Customer Portal	Provides registration/login interface
Firebase Authentication	Handles OTP authentication
Firebase Cloud Messaging	Supports customer notification delivery after account setup
Customer Database	Stores the customer's business profile
CRM	Maintains the customer's business record
1. New Customer Registration

The new customer selects:

Create Account

The system displays the mobile-number registration form.

Mobile Number

+91 __________________

[ Send OTP ]

The customer enters their mobile number and requests an OTP.

2. OTP Generation & Verification

The mobile number is sent to Firebase Authentication.

Firebase sends the verification OTP to the customer's mobile number.

The customer enters the received OTP.

Enter OTP

_ _ _ _ _ _

[ Verify ]

The system validates the OTP through Firebase Authentication.

Successful Verification

If the OTP is valid, the registration process continues.

Invalid OTP

If the OTP is incorrect:

Invalid OTP

Please enter the correct verification code.

The customer can retry the verification process.

The system should enforce Firebase's authentication/security limits rather than implementing a separate custom OTP security mechanism.

3. Registration Information

After successful mobile verification, the customer is asked to provide their account information.

Required fields:

Name

____________________

Age

____________________

Area

____________________

[ Create Account ]

The verified mobile number is associated with the new account automatically.

The customer does not need to enter the mobile number again.

4. Account Creation

After the customer submits the required information, the system validates the information.

If valid:

Mobile Verified
       ↓
Registration Information Validated
       ↓
Customer Account Created

The system creates the customer record and associates the Firebase-authenticated identity with the internal customer ID.

5. Customer Record

The newly created customer record contains:

Identity
Customer ID
Firebase Authentication UID
Mobile Number
Personal Information
Name
Age
Area
Account Information
Registration Date
Account Status
Authentication Status

The initial account status is:

Active
6. Initial Customer State

A newly registered customer does not automatically receive a subscription.

The customer starts as a normal registered customer.

New Customer

Subscription
No Active Subscription

Booking
Available

Account
Active

If the customer wants to use a subscription, they can select one later through the Customer Portal.

If they do not have a subscription, they can still book fish by paying through the configured payment gateway.

7. Existing Customer Login

When an existing customer returns to the platform, they enter their registered mobile number.

Mobile Number

+91 __________________

[ Continue ]

Firebase sends an OTP to the registered number.

The customer verifies the OTP.

OTP Verified

↓

Firebase Authentication

↓

Customer Account Retrieved

↓

Customer Portal

No password is required.

8. Account Retrieval

After successful authentication, the system uses the authenticated Firebase identity to locate the corresponding customer record.

Firebase UID
      ↓
Customer Record
      ↓
Customer ID
      ↓
Customer Profile

The customer is then granted access to their existing account and associated information.

This includes their:

Profile
Subscription information
Subscription Credit
Booking history
Active bookings
Notifications
Fish activity
9. Blocked Customer

If the customer's account has been blocked by the administrator, successful Firebase authentication alone must not provide normal Customer Portal access.

The system checks the internal account status after authentication.

OTP Verified
      ↓
Account Status Check
      ↓
Blocked
      ↓
Access Denied

The customer receives an appropriate message explaining that the account is currently unavailable.

The system must not delete the customer's historical records when the account is blocked.

10. Deactivated Customer

A deactivated customer account is treated differently from a blocked account at the business-record level.

The customer's historical:

Bookings
Subscriptions
Payments
Activity

remain preserved for CRM and reporting purposes.

The account cannot be used as a normal active customer account until it is reactivated through the appropriate administrative process.

11. Authentication Session

After successful OTP verification, Firebase Authentication maintains the customer's authenticated session.

The Customer Portal uses this authenticated identity when requesting protected customer information.

Customer-specific data must always be associated with the authenticated customer rather than relying on a customer-provided ID.

For example, a customer must not be able to change a request from:

Customer A

to:

Customer B

and retrieve another customer's booking or Subscription Credit.

12. Registration Completion

After successful account creation, the customer is taken to the Customer Portal.

The normal journey becomes:

Register
   ↓
Enter Mobile Number
   ↓
OTP Verification
   ↓
Enter Name + Age + Area
   ↓
Create Account
   ↓
Customer ID Created
   ↓
Customer Portal

For an existing customer:

Mobile Number
   ↓
OTP
   ↓
Firebase Authentication
   ↓
Account Retrieved
   ↓
Customer Portal
13. Failure & Exception Handling
Mobile Number Already Registered

If a new customer attempts to register using an existing mobile number:

This mobile number is already registered.

Please log in using OTP.

The system should not create a duplicate customer account.

Invalid Registration Information

If required registration information is missing or invalid:

Please complete all required fields.

The account is not created until the information is valid.

Firebase Authentication Failure

If Firebase authentication cannot be completed:

Unable to verify your mobile number.

Please try again.
Customer Record Creation Failure

If OTP verification succeeds but the internal customer record cannot be created:

Your mobile number has been verified, but we could not complete your account setup.

Please try again.

The system must handle this carefully so that a partially created account does not result in duplicate customer records.

14. Records Created / Updated
New Registration

Creates:

Customer ID
Firebase UID association
Mobile Number
Name
Age
Area
Registration Date
Account Status
Existing Login

Updates where appropriate:

Authentication/session information
Last login information

No new customer record is created.

15. System Dependencies
Customer
   ↓
Customer Portal
   ↓
Firebase Authentication
   ↓
OTP Verification
   ↓
Customer Database
   ↓
CRM
   ↓
Customer Portal Access

Firebase is responsible for identity authentication.

The PondFish database remains responsible for business/customer information.

This distinction is important:

Firebase verifies that the person controls the mobile number; PondFish determines what customer account and business information that authenticated person is allowed to access.

SProjectX Recommendation

The authentication architecture should keep authentication identity and business identity separate but linked.

Firebase Authentication should handle:

Mobile number verification
OTP
Authentication session
Firebase UID

The PondFish application database should handle:

Customer ID
Name
Age
Area
Subscription
Subscription Credit
Bookings
Customer status
CRM history

The relationship should therefore be:

Firebase UID
      │
      │ 1 : 1
      ▼
PondFish Customer ID
      │
      ├── Profile
      ├── Subscription
      ├── Subscription Credit
      ├── Bookings
      ├── Notifications
      └── CRM History

This keeps authentication secure while allowing the PondFish business system to evolve independently of Firebase.

SW-01 is therefore limited to customer identity creation and authentication. Subscription purchase, booking, payment, notification, and CRM workflows remain in their respective system workflows rather than being duplicated here.

















3.9 SW-02 — Fish Delivery & Live Tracking
Workflow Purpose

SW-02 defines the complete process for moving fish from the organic farm to the PondFish store and making the delivery information available to the administrator and customers.

This workflow connects:

Organic Farm
Delivery Truck
OneLap GPS Tracker
Admin Portal
Delivery Session
Customer Notifications
Customer Live Tracking
Fish Inventory

The critical distinction is that truck tracking and customer visibility are separate.

The administrator can see the truck's live location as soon as the truck's GPS tracker becomes active. Customers only receive the live delivery information after the administrator explicitly publishes the delivery.

1. Workflow Trigger

The workflow begins when the delivery truck starts its journey from the organic farm toward the PondFish store.

The truck is currently the only delivery vehicle in the system.

The journey begins with:

Fish Prepared at Farm
        ↓
Fish Loaded Into Truck
        ↓
Truck Starts
        ↓
OneLap Tracker Active
2. Actors
Actor/System	Responsibility
Business Administrator	Creates and publishes delivery information
Delivery Truck	Transports fish
OneLap GPS Tracker	Provides vehicle location
Admin Portal	Monitors the truck and manages the delivery session
Customer Portal/App	Displays published delivery information
Firebase Cloud Messaging	Delivers customer notifications
Inventory System	Receives the delivered fish quantities
3. Delivery Session Creation

Before or when the truck begins its journey, the administrator creates the delivery session.

The administrator provides:

Origin

The organic farm location.

Destination

The PondFish store/warehouse location.

Fish Information

The administrator enters the fish expected to arrive.

Example:

Delivery:

Origin:
Organic Farm

Destination:
PondFish Store

Fish:

Rohu       — 12 Kg
Pamplet    — 22 Kg
Katla      — 18 Kg
Tilapia    — 15 Kg

These quantities represent the information associated with the delivery.

4. Truck GPS Activation

When the truck starts and the OneLap GPS tracker becomes active, the system begins receiving location information.

Truck Active
      ↓
OneLap GPS
      ↓
Location Data
      ↓
PondFish Backend
      ↓
Admin Portal

The administrator can now see the truck's current location.

This happens independently of customer publication.

5. Admin Live Tracking

As GPS information is received, the Admin Portal displays the current truck position.

The administrator can see:

Current location
Origin
Destination
Journey progress
Distance remaining
Estimated arrival information
Tracking status

The administrator does not need to publish the delivery for this information to be visible internally.

6. Customer Visibility Before Publication

Before the administrator selects Publish Live Delivery, customers do not receive the truck's live location.

Therefore:

GPS Active
     │
     ├──► Admin: LIVE
     │
     └──► Customer: NOT VISIBLE

This allows the administrator to verify the delivery information before exposing it to customers.

7. Administrator Publishes Delivery

When the administrator is ready to inform customers, they select:

Publish Live Delivery

The system changes the customer-facing delivery state.

Private Tracking
      ↓
Admin Publishes
      ↓
Customer Live Delivery

At this point, the customer-facing live tracking becomes available.

8. Customer Notification

Immediately after publication, the system sends a push notification to customers through Firebase Cloud Messaging.

The notification informs customers that the fish delivery is currently travelling to the store.

Example:

🐟 Fish Delivery On The Way

Today's fish delivery has started from the farm.

Track the live delivery to see when it reaches the store.

The customer can open the notification and access the live delivery information.

9. Customer Live Delivery

Once published, customers can see the delivery journey from the farm to the PondFish store.

The customer-facing information includes:

Starting location
Destination
Current truck position
Estimated arrival
Fish included in the delivery

Conceptually:

Organic Farm
     ●
     │
     │
     🚚  ← Live Truck
     │
     │
     ●
PondFish Store

ETA: 35 minutes

The customer's view uses the latest available GPS information.

10. Delivery Information Changes

The administrator can edit the fish information while the truck is already travelling.

This is intentionally supported because the administrator may:

Forget to add a fish.
Enter an incorrect quantity.
Need to correct delivery information.
Receive updated information from the farm.

Example:

Original:

Rohu — 12 Kg

Updated:

Rohu — 14 Kg

The administrator saves the correction.

The updated delivery information becomes the current delivery-session information.

11. GPS Tracking Continuity

The GPS tracking continues while the truck is travelling.

The system should not stop tracking merely because:

The administrator edits fish information.
Customers receive a notification.
Customers open/close the live tracking screen.
The delivery information changes.

The truck remains the source of the live location information.

12. Destination Detection

The destination is the PondFish store/warehouse location configured for the business.

When the truck reaches the destination, the system detects arrival based on the configured location/geofence logic and GPS information.

Conceptually:

Truck Moving
     ↓
Approaching Store
     ↓
Destination Reached
     ↓
Arrival Detected
13. Arrival Processing

After arrival is detected, the system enters the arrival handling period.

The existing requirement is:

After the truck reaches the destination, customer live location sharing automatically stops after 5 minutes.

Therefore:

Truck Reaches Store
       ↓
Arrival Detected
       ↓
5-Minute Arrival Period
       ↓
Customer Live Tracking Stops

The administrator retains the delivery record and tracking history.

14. Customer Arrival Notification

After the delivery reaches the store, customers receive an automatic notification.

Example:

🐟 Fish Has Arrived

Today's fish delivery has arrived at the PondFish store.

The available fish can now be viewed and booked.

The notification directs customers toward the current fish availability.

15. Inventory Update

After the delivery arrival process completes, the fish quantities associated with the delivery session are used to update the inventory.

Example:

Delivery Session

Rohu       12 Kg
Pamplet    22 Kg
Katla      18 Kg

↓

Inventory

Rohu       +12 Kg
Pamplet    +22 Kg
Katla      +18 Kg

The system performs this automatically.

The administrator does not need to manually enter the same delivery quantities again into Fish Inventory.

16. Inventory Quantity Correction

The delivery quantity can sometimes differ from what was initially recorded.

For example:

Expected:

Rohu — 12 Kg

Actual:

Rohu — 14 Kg

Because the administrator can edit the delivery information before arrival processing completes, the final delivery-session quantity is used for the inventory update.

This ensures the inventory receives the latest approved delivery information.

17. Delivery Completion

After arrival processing and inventory update:

Delivery Arrived
       ↓
Customer Tracking Stopped
       ↓
Arrival Notification Sent
       ↓
Inventory Updated
       ↓
Delivery Session Completed

The delivery becomes part of the permanent delivery history.

18. Delivery History

The completed delivery record retains:

Delivery ID
Origin
Destination
Fish types
Final quantities
Departure time
Arrival time
Tracking information
Publication time
Completion time

Example:

Delivery ID: DL-00042

From:
Organic Farm

To:
PondFish Store

Departure:
06:20 AM

Arrival:
08:14 AM

Fish:
Rohu — 14 Kg
Pamplet — 22 Kg
Katla — 18 Kg

Status:
Completed

This historical record is used later by Admin Reports and Audit Logs.

19. Complete SW-02 Flow
Fish Loaded at Farm
        ↓
Truck Starts
        ↓
OneLap GPS Becomes Active
        ↓
Admin Receives Live Location
        ↓
Admin Creates / Confirms Delivery Session
        ↓
Admin Adds Fish + Quantities
        ↓
Admin Monitors Journey
        ↓
Admin Publishes Live Delivery
        ↓
Firebase Notification
        ↓
Customers See Live Truck
        ↓
Admin Can Still Edit Delivery Information
        ↓
Truck Reaches Store
        ↓
Arrival Detected
        ↓
5-Minute Arrival Period
        ↓
Customer Live Tracking Stops
        ↓
Customer Arrival Notification
        ↓
Inventory Automatically Updated
        ↓
Delivery Session Completed
        ↓
Delivery History Stored
20. Exception Handling
GPS Temporarily Unavailable

If OneLap temporarily stops providing location data:

GPS Connection Lost
        ↓
Retain Last Known Location
        ↓
Wait for New GPS Data

The system should not invent a new location.

The customer/admin interface should clearly indicate that the location is temporarily unavailable or showing the last known location.

Incorrect Fish Information

If the administrator notices an incorrect fish or quantity while the truck is travelling:

Admin Edits Delivery
        ↓
Updated Delivery Session
        ↓
Customer View Updated

The final approved information is used during inventory processing.

Truck Does Not Reach Destination

If the truck remains active but does not reach the configured destination, the delivery session remains active.

The administrator can continue monitoring the vehicle.

The system must not mark the delivery as completed simply because a certain amount of time has passed.

GPS Becomes Inactive Before Arrival

If the tracker stops reporting before arrival, the system retains the delivery session and the last known location.

The administrator can investigate the tracking issue.

The delivery should not automatically be marked as completed unless the destination/arrival condition has actually been satisfied.

21. Records Created / Updated

SW-02 creates or updates:

Delivery Session
Delivery ID
Origin
Destination
Fish
Quantity
Departure
Publication
Arrival
Completion
GPS Tracking
Location updates
Last known location
Tracking state
Journey information
Customer Notifications
Delivery published notification
Delivery arrived notification
Inventory
Delivered fish quantity
Available stock
Audit

Important administrative actions such as:

Delivery creation
Delivery edits
Publication
Other administrative changes

are recorded in the audit system.

SProjectX Recommendation

The most important architectural decision in SW-02 is to treat the Delivery Session as the central record for an individual farm-to-store journey.

Instead of separately storing:

Truck Information
Fish Information
Customer Notification
Inventory Arrival

as disconnected processes, they all reference the same delivery session.

                DELIVERY SESSION
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼
     GPS            Fish List       Destination
       │               │               │
       └───────────────┼───────────────┘
                       │
            ┌──────────┴──────────┐
            ▼                     ▼
      Customer Tracking       Inventory
            │
            ▼
      Notifications

This gives us a clean single source of truth for every delivery.

And one rule should remain fixed throughout the rest of the PRD:

GPS tracking begins from the truck's active tracker state for the Admin Portal; customer live tracking begins only after Admin publishes the delivery.

That distinction is important and will be reused whenever we document the notification, inventory, and customer workflows.














3.10 SW-03 — Fish Inventory & Availability Workflow
Workflow Purpose

SW-03 defines how fish inventory enters the PondFish system, how available quantities are maintained, how customer bookings affect availability, and how fish become unavailable.

This workflow connects:

Delivery Session
Fish Master Catalog
Admin Inventory Management
Customer Fish Listing
Booking System
Subscription Booking
Non-Subscription Booking
Inventory History

The key principle is that inventory quantity is maintained in kilograms, and customers can only book fish against the quantity currently available for booking.

1. Workflow Trigger

Inventory is primarily created or increased when a delivery reaches the PondFish store and the delivery session completes its arrival process.

Inventory can also be manually adjusted by the administrator when the physical quantity differs from the recorded quantity.

The overall flow is:

Delivery Arrives
      ↓
Delivery Session Completed
      ↓
Inventory Quantity Updated
      ↓
Fish Becomes Available
      ↓
Customer Can Book
2. Actors
Actor/System	Responsibility
Administrator	Maintains fish catalog and adjusts inventory
Delivery Session	Provides incoming fish and quantities
Inventory System	Maintains current stock
Customer Portal	Displays available/unavailable fish
Booking Engine	Reserves quantity when a booking is created
Subscription Engine	Determines subscription-covered quantity
Worker Portal	Fulfills bookings but does not independently manage inventory
3. Fish Master Catalog

PondFish maintains a master list of fish in the system.

The catalog contains permanent fish information such as:

Fish ID
Fish Name
Fish Category
Description
Fish Image
Origin
Default Price

Example:

Rohu

Fish ID: FISH-001

Category: Freshwater

Price: ₹320/Kg

The master catalog exists independently of today's available stock.

A fish does not need to be recreated every time new stock arrives.

4. New Fish

If the business introduces a fish that does not already exist in the catalog, the administrator can add it through Fish Inventory Management.

Admin Adds Fish
      ↓
Fish Master Catalog
      ↓
Fish Available for Inventory

Once added, the fish can receive inventory when the business obtains stock.

5. Delivery Adds Inventory

When SW-02 completes a delivery, the final quantities associated with that delivery are added to the inventory.

Example:

Delivery

Rohu       14 Kg
Pamplet    22 Kg
Katla      18 Kg

↓

Inventory

Rohu       +14 Kg
Pamplet    +22 Kg
Katla      +18 Kg

The administrator does not need to manually re-enter these quantities.

This prevents duplicate data entry between the Delivery and Inventory modules.

6. Inventory Quantity

Inventory is maintained using kilograms (Kg).

For every fish, the system maintains the current quantity available for booking.

Example:

Rohu

Available:
14 Kg

Pamplet

Available:
22 Kg

Katla

Available:
18 Kg

The quantity displayed to customers is based on the current bookable inventory.

7. Customer Availability

The Customer Portal receives fish availability from the inventory system.

A fish is displayed as:

Available

When sufficient quantity exists for booking.

Example:

Rohu

Available

12.5 Kg
Unavailable

When the remaining quantity reaches 0.5 Kg or below.

Example:

Rohu

Unavailable

This prevents customers from booking impractically small remaining quantities.

8. Administrator Manual Quantity Adjustment

The administrator can manually change the recorded quantity.

This is required because physical fish weight can sometimes differ from the originally recorded quantity.

Example:

Recorded

Rohu — 12 Kg

Actual

Rohu — 13.5 Kg

Admin Update

13.5 Kg

The new quantity becomes the current inventory quantity.

The adjustment is recorded in the Audit Log.

9. Removing Fish Quantity

Fish quantity may also decrease for reasons other than customer bookings.

For example:

Fish may die.
Physical stock may be damaged.
The measured quantity may be incorrect.
Some stock may become unsuitable for sale.

The administrator can remove the affected quantity.

Example:

Rohu

Current Quantity:
12 Kg

Remove:
1 Kg

Reason:
Fish Stock Loss

New Quantity:
11 Kg

The quantity adjustment is recorded for administrative traceability.

10. Booking Reservation

When a customer successfully creates a booking, the requested fish quantity is reserved against available inventory.

Example:

Before Booking

Rohu
12 Kg Available

Customer books:

2 Kg

System updates:

Rohu

10 Kg Remaining
2 Kg Reserved

The reserved quantity cannot be booked again by another customer.

This is important for preventing overselling.

11. Inventory and Subscription

The inventory system does not need to know whether the customer is Type 1, Type 2, or a normal customer when determining physical availability.

Inventory only needs to know:

How much fish is currently available for booking?

The Subscription Engine independently determines how the customer's booking is financially handled.

Therefore:

Customer Requests 2 Kg
        │
        ├──► Inventory
        │      Check 2 Kg Available
        │
        └──► Subscription Engine
               Determine Coverage

This keeps inventory logic independent from payment logic.

12. Booking Quantity Validation

Before a booking is confirmed, the system checks whether sufficient fish remains.

Example:

Available

5 Kg

Customer Requests

3 Kg

Result

Available

The booking can continue.

If:

Available

1 Kg

Customer Requests

3 Kg

Result

Insufficient Quantity

the booking cannot be confirmed for 3 Kg.

The customer must reduce the requested quantity or choose another available fish.

13. Concurrent Booking Protection

The system must prevent two customers from successfully booking the same remaining quantity at the same time.

Example:

Available:
2 Kg

Customer A requests:
2 Kg

Customer B requests:
2 Kg

Only one booking can successfully reserve the available 2 Kg.

The second booking must receive an availability response rather than creating an invalid reservation.

This validation must occur at the backend/database level rather than relying only on what the customer sees on the frontend.

14. When All Stock Is Booked

If all available stock has been reserved through bookings, the fish becomes unavailable for new bookings.

Example:

Rohu

Physical Available:
12 Kg

Reserved:
12 Kg

Bookable:
0 Kg

Status:
Unavailable

Customers should see the fish as unavailable.

15. Booking Cancellation

If an active booking is cancelled and the reserved quantity is returned according to the cancellation rules, that quantity becomes available for another customer.

Example:

Before Cancellation

Available:
2 Kg

Reserved:
10 Kg

Customer cancellation returns:

2 Kg

Inventory becomes:

Available:
4 Kg

Reserved:
8 Kg

The returned quantity can therefore become bookable again.

The exact customer credit/refund handling is defined separately in the booking/payment workflows.

16. Booking Expiry

A booking that remains incomplete for 48 hours expires according to the booking lifecycle.

When an expired booking releases its reserved fish quantity:

Booking Expires
      ↓
Reservation Released
      ↓
Quantity Returns to Bookable Inventory

The fish can then become available for other customers.

The applicable customer financial treatment is handled by the booking/payment workflow and is not duplicated here.

17. Worker Completion

When the worker completes a booking, the booking reservation has already been created.

Therefore, the Worker Portal does not independently deduct inventory again.

The worker's responsibility is fulfillment:

Booking Reserved
      ↓
Worker Retrieves Booking
      ↓
Fish Prepared
      ↓
Order Completed

No second inventory deduction should occur during worker completion.

This prevents double deduction.

18. Physical Quantity Differences

Because fish are weighed before cutting and may include:

Head
Fins
Intestines

the final prepared weight may sometimes differ from the quantity originally booked.

If the actual quantity is higher and additional payment is required, the worker handles the additional payment according to the established booking workflow.

The additional amount is recorded against the booking.

This does not mean the worker independently changes the inventory system.

19. Inventory History

Inventory changes should be traceable.

The system should retain records of significant quantity changes such as:

Delivery Added

+14 Kg

-----------------

Customer Booking

-2 Kg Reserved

-----------------

Admin Adjustment

-1 Kg

Reason:
Fish Stock Loss

-----------------

Booking Expired

+2 Kg Released

This provides a clear explanation of how the current quantity was reached.

20. Complete SW-03 Flow
Fish Exists in Master Catalog
             ↓
Delivery Arrives
             ↓
Delivery Session Completes
             ↓
Inventory Increased
             ↓
Fish Becomes Bookable
             ↓
Customer Views Availability
             ↓
Customer Requests Quantity
             ↓
Backend Checks Available Quantity
             ↓
Quantity Reserved
             ↓
Booking Created
             ↓
Remaining Bookable Quantity Updated
             ↓
Fish Becomes Unavailable
if ≤ 0.5 Kg

Additional paths:

Admin Quantity Adjustment
          ↓
Inventory Updated
Booking Cancelled / Expired
          ↓
Reservation Released
          ↓
Inventory Becomes Bookable Again
21. Records Created / Updated
Fish Master Catalog
Fish ID
Name
Category
Description
Image
Origin
Price
Inventory
Fish ID
Available Quantity
Reserved Quantity
Bookable Quantity
Availability Status
Inventory Transactions
Transaction ID
Fish
Quantity Change
Transaction Type
Date/Time
Reference
Booking

The booking references the reserved fish quantity.

SProjectX Recommendation

The inventory architecture should use three distinct concepts:

Physical Stock
      ↓
Reserved Stock
      ↓
Bookable Stock

For example:

Physical Stock     = 20 Kg
Reserved Stock     = 7 Kg
Bookable Stock     = 13 Kg

This is much safer than simply maintaining one quantity value.

It allows the system to distinguish between fish that physically exists in the store and fish that is already committed to customers through active bookings.

The core calculation is:

Bookable Stock = Physical Stock − Reserved Stock

When a booking is created, the system increases the reserved quantity.

When a booking is cancelled or expires, the reservation is released.

When the order is completed, the reservation is finalized and should not be deducted again by the Worker Portal.

This model will be particularly important when we define SW-04 Customer Booking, because SW-04 will consume the inventory availability established here and connect it with the customer's selected quantity, subscription coverage, Razorpay payment, and QR ticket.














3.11 SW-04 — Customer Fish Booking Workflow
Workflow Purpose

SW-04 defines the complete process a customer follows to book fish through the PondFish Customer Portal.

This is the primary transaction workflow connecting:

Customer Account
Fish Inventory
Fish Selection
Quantity Selection
Subscription Engine
Subscription Credit
Razorpay
Booking Engine
QR Ticket
Customer Notifications
Customer Booking History

The workflow supports both subscription and non-subscription customers.

The important rule is:

Having no active subscription does not prevent a customer from booking fish. A non-subscription customer pays the full booking amount through Razorpay.

For subscription customers, the system determines how much of the booking is covered by the customer's subscription allowance/credit and whether an additional Razorpay payment is required.

1. Workflow Trigger

The workflow begins when an authenticated customer selects a fish from the available fish list and chooses Buy / Book.

Customer Login
      ↓
Fish Section
      ↓
Select Fish
      ↓
Select Quantity
      ↓
Checkout
2. Actors
Actor/System	Responsibility
Customer	Selects fish and quantity and confirms booking
Customer Portal	Provides the booking interface
Inventory System	Validates available quantity and reserves stock
Subscription Engine	Determines subscription eligibility and coverage
Subscription Credit	Provides applicable customer credit
Razorpay	Processes additional/full payment
Booking Engine	Creates and manages the booking
QR System	Generates the booking QR ticket
Firebase	Sends booking notifications
CRM	Records customer booking activity
3. Fish Selection

The customer opens the Fish section of the Customer Portal.

The system displays fish based on the current inventory.

Example:

Rohu

Available
12 Kg

₹320/Kg

[ Buy ]

Unavailable fish cannot be booked.

The customer selects a fish.

4. Quantity Selection

The customer chooses how much fish they want.

The quantity is measured in kilograms.

Example:

Rohu

Quantity

[-]  2.0 Kg  [+]

Available:
12 Kg

[ Continue ]

The customer can increase or decrease the requested quantity within the available inventory.

The system must validate the quantity against the current bookable inventory.

5. Subscription Status Check

When the customer proceeds toward checkout, the system checks whether the customer has an active subscription.

There are two possible paths:

Customer
   ↓
Subscription Check
   │
   ├── Active Subscription
   │
   └── No Active Subscription

The booking process continues in both cases.

6. Subscription Customer

If the customer has an active Type 1 or Type 2 subscription, the system retrieves:

Subscription Type
Weekly Quantity Allowance
Quantity Already Used
Remaining Weekly Quantity
Subscription Credit

Current plans:

Type 1
₹2,000
2 Kg / Week

Type 2
₹6,000
3 Kg / Week

The customer can select any available fish within the applicable quantity allowance.

The fish type does not change the customer's weekly quantity entitlement.

7. Weekly Quantity Check

The system determines how much of the requested quantity can be covered by the customer's remaining subscription allowance.

Example:

Type 1 Customer

Weekly Allowance:
2 Kg

Already Used:
0.5 Kg

Remaining:
1.5 Kg

Customer requests:

2 Kg

The system determines:

Subscription Coverage = 1.5 Kg

Additional Quantity = 0.5 Kg

The additional quantity requires the applicable additional payment calculation.

8. Subscription Credit Calculation

The system determines the monetary value applicable to the subscription-covered portion of the booking using the current fish pricing.

Example:

Fish:
Rohu

Price:
₹320/Kg

Subscription-covered quantity:
1.5 Kg

Subscription value:
₹480

The applicable amount is deducted from the customer's Subscription Credit.

The customer does not manually perform this deduction.

9. Additional Quantity

If the requested quantity exceeds the customer's remaining weekly subscription quantity, the excess quantity is not covered by the weekly allowance.

Example:

Requested:
2 Kg

Subscription Coverage:
1.5 Kg

Extra:
0.5 Kg

The extra amount is calculated using the applicable fish price.

0.5 Kg × ₹320
=
₹160

The ₹160 must be paid through Razorpay before the booking is confirmed.

10. Full Subscription-Covered Booking

If the customer's requested quantity is completely covered by the remaining subscription allowance:

Requested:
1 Kg

Subscription Coverage:
1 Kg

Additional Payment:
₹0

No Razorpay payment is required for that booking.

The system proceeds directly toward booking confirmation after validating the subscription credit and inventory.

11. Non-Subscription Customer

A customer without an active subscription can still book fish.

The system calculates the full booking value.

Example:

Rohu

Quantity:
2 Kg

Price:
₹320/Kg

Total:
₹640

The entire ₹640 is processed through Razorpay.

Customer
   ↓
Razorpay
   ↓
₹640 Payment
   ↓
Successful
   ↓
Booking Created

No Subscription Credit is involved.

12. Checkout Calculation

Before payment or booking confirmation, the customer sees a complete order summary.

For a subscription customer:

Booking Summary

Fish
Rohu

Quantity
2 Kg

Subscription Coverage
1.5 Kg

Subscription Credit
₹480

Additional Payment
₹160

Total Booking Value
₹640

Pay Now
₹160

For a non-subscription customer:

Booking Summary

Fish
Rohu

Quantity
2 Kg

Total
₹640

Pay Now
₹640

The system must clearly show the customer what is being covered and what must be paid.

13. Razorpay Payment

When additional payment is required, the customer proceeds to Razorpay.

The payment amount is generated by the backend based on the final booking calculation.

The frontend must not be trusted to determine the final payable amount.

Booking Calculation
      ↓
Backend Validates Amount
      ↓
Razorpay Order
      ↓
Customer Payment
      ↓
Razorpay Result
14. Successful Payment

If Razorpay confirms the required payment successfully:

Payment Successful
       ↓
Booking Confirmed
       ↓
Inventory Reservation
       ↓
Subscription Credit Updated
       ↓
QR Generated

The booking is only considered successfully confirmed after the required payment has been verified.

15. Subscription Credit Update

For subscription-covered bookings, the applicable Subscription Credit is deducted as part of the successful booking transaction.

Example:

Before

Subscription Credit:
₹2,000

Booking Deduction:
₹480

After

Subscription Credit:
₹1,520

The customer's subscription usage is also updated.

Example:

Weekly Allowance:
2 Kg

Used Before:
0.5 Kg

Booked:
1.5 Kg

Remaining:
0 Kg

The system records both the financial credit change and the weekly quantity usage.

16. Inventory Reservation

After the booking has successfully passed its required payment validation, the requested fish quantity is reserved.

Example:

Before

Physical Stock:
12 Kg

Reserved:
2 Kg

Bookable:
10 Kg

After another 2 Kg booking:

Physical Stock:
12 Kg

Reserved:
4 Kg

Bookable:
8 Kg

The inventory reservation prevents another customer from booking the same quantity.

17. Booking Creation

The Booking Engine creates a unique booking record.

Example:

Booking ID

PF-001258

Customer

Customer ID: PF-100284

Fish

Rohu

Quantity

2 Kg

Created

08 Aug 2026

The booking also stores the applicable:

Subscription information
Subscription-covered amount
Additional payment
Razorpay reference, when applicable
Booking creation time
Expiry time
18. 48-Hour Booking Expiry

Every successfully created booking receives an expiry time 48 hours after booking creation.

Example:

Booking Created

08 Aug
10:00 AM

Expires

10 Aug
10:00 AM

The expiry is calculated from the booking creation timestamp.

It is not based on:

Business closing time
Business opening time
Midnight
The next business day

This allows customers to book at night and collect the fish the following day.

19. QR Ticket Generation

After successful booking creation, the system generates the customer's booking QR.

The QR is associated with the booking and contains a secure reference to the booking record.

Conceptually:

Booking Confirmed
      ↓
QR Generated
      ↓
Customer Booking Ticket

The QR should not expose sensitive customer or payment information directly.

20. Customer Booking Confirmation

Immediately after successful booking, the customer receives the booking confirmation.

The ticket contains information such as:

Booking ID
Fish
Quantity
Booking date/time
Expiry date/time
Payment information
QR code
Booking status

Example:

BOOKING CONFIRMED

Booking ID:
PF-001258

Rohu
2 Kg

Booked:
08 Aug 2026

Valid Until:
10 Aug 2026

QR
[ ███████████ ]
21. Customer Notification

After successful booking, the system sends a booking confirmation notification.

Example:

Booking Confirmed

Your booking PF-001258 for 2 Kg Rohu
has been successfully created.

Valid for 48 hours.

The notification is linked to the customer's booking.

22. Customer Booking History

The booking is immediately added to the customer's account history.

The customer can later view:

Booking ID
Fish
Quantity
Booking date
Payment information
Booking status
QR ticket
Completion information
23. CRM Update

The successful booking contributes to the customer's CRM activity.

The system updates the relevant customer-level information, such as:

Total bookings
Total quantity purchased/booked
Booking history
Customer activity

The CRM does not create a separate booking record.

It references the existing booking.

24. Payment Failure

If Razorpay payment fails:

Payment Failed
      ↓
Booking Not Confirmed
      ↓
No QR Generated
      ↓
No Final Inventory Reservation

The customer can retry the payment where the booking/payment session permits.

The system must ensure that a failed payment does not create a falsely confirmed booking.

25. Payment Cancellation

If the customer closes or cancels the payment process before successful payment:

Payment Cancelled
      ↓
Booking Not Confirmed

The customer can restart the booking process if the fish remains available.

26. Inventory Becomes Unavailable During Checkout

The fish availability may change while the customer is completing checkout.

Example:

Customer Sees:

5 Kg Available

        ↓

Another Customer Books

        ↓

Only 1 Kg Remains

If the first customer attempts to book 3 Kg, the backend must revalidate availability.

The booking cannot be confirmed unless the requested quantity is still available.

The customer receives:

The selected quantity is no longer available.

Please update your quantity and try again.

This validation occurs at the backend level immediately before final booking confirmation.

27. Duplicate Payment Protection

The system must prevent a customer from accidentally creating multiple bookings because of:

Double-clicking the payment button.
Refreshing the payment page.
Returning from Razorpay multiple times.
Network delays.
Repeated payment callbacks.

The backend should use a unique payment/order reference and idempotent processing.

A successfully processed payment must not create multiple bookings.

28. Complete SW-04 Flow
Subscription Customer — Fully Covered
Customer Selects Fish
        ↓
Selects Quantity
        ↓
Inventory Validation
        ↓
Subscription Check
        ↓
Weekly Quantity Validation
        ↓
Subscription Credit Calculation
        ↓
No Additional Payment
        ↓
Booking Confirmed
        ↓
Inventory Reserved
        ↓
Subscription Credit Updated
        ↓
QR Generated
        ↓
Customer Notified
        ↓
Booking Added to History
Subscription Customer — Extra Quantity
Customer Selects Fish
        ↓
Selects Quantity
        ↓
Subscription Coverage Calculated
        ↓
Covered Quantity
+
Extra Quantity
        ↓
Subscription Credit Calculation
        ↓
Extra Amount Calculated
        ↓
Razorpay
        ↓
Payment Successful
        ↓
Booking Confirmed
        ↓
Inventory Reserved
        ↓
Subscription Updated
        ↓
QR Generated
        ↓
Customer Notified
Non-Subscription Customer
Customer Selects Fish
        ↓
Selects Quantity
        ↓
Inventory Validation
        ↓
No Active Subscription
        ↓
Full Amount Calculated
        ↓
Razorpay
        ↓
Payment Successful
        ↓
Booking Confirmed
        ↓
Inventory Reserved
        ↓
QR Generated
        ↓
Customer Notified
29. Records Created / Updated

A successful booking creates or updates:

Booking
Booking ID
Customer ID
Fish ID
Quantity
Price
Booking Time
Expiry Time
Status
Subscription

When applicable:

Weekly quantity used
Remaining weekly quantity
Subscription Credit
Subscription transaction
Payment

When applicable:

Razorpay Order ID
Razorpay Payment ID
Amount
Payment Status
Inventory
Reserved Quantity
Bookable Quantity
Inventory Transaction
QR
Booking QR reference
QR status
Customer
Booking history
Customer activity
Notification
Booking confirmation notification
30. SProjectX Recommendation

The most important architectural rule for SW-04 is:

The backend must perform the final booking calculation and inventory validation immediately before confirming the booking.

The frontend may display:

2 Kg available
₹640 total
₹160 to pay

but those values must be recalculated and verified by the backend before the booking becomes permanent.

The final transaction should conceptually behave as one controlled operation:

                 CUSTOMER BOOKING
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      Inventory   Subscription   Payment
      Validation    Calculation   Validation
          │            │            │
          └────────────┼────────────┘
                       ▼
                Booking Confirmed
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Reserve       QR Ticket    Notification
       Quantity

This is especially important because PondFish has limited physical fish inventory. We cannot allow a situation where payment succeeds but the fish has already been booked by somebody else, or where two customers successfully reserve the same quantity.

Also, the Worker Portal must not be part of the booking-creation transaction. The worker only becomes involved after the booking and QR ticket already exist.

That keeps the responsibilities clean:

Customer → books and pays → system creates booking → Worker → fulfills booking.
	