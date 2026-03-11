# Gharpayy CRM – Lead Conversion System (LCS)

A **Lead Management CRM MVP** built for the **Gharpayy assignment** to capture leads, assign ownership, manage the sales pipeline, schedule visits, and provide analytics.

The system demonstrates how Gharpayy can centralize customer inquiries coming from multiple channels such as **WhatsApp, website forms, social media, and phone calls**.

---

## Live Demo

Frontend (CRM Dashboard)

https://gharpaaycrm.netlify.app/

Backend API

https://gharpayy-crm-backend.onrender.com/

GitHub Repository

https://github.com/Kartikmanth19/Gharpaay-CRM

---

## Project Overview

Currently Gharpayy handles leads manually through shared WhatsApp communication, which creates several operational challenges:

- Leads are not centrally captured  
- Ownership of leads is unclear  
- Multiple agents respond to the same lead  
- Leads get marked as seen but remain unanswered  
- Follow-ups are inconsistent  
- Visit scheduling is unstructured  
- Historical leads are difficult to reuse  

This CRM system solves these problems by providing a **centralized lead management platform**.

---

## Implemented MVP Features

### 1. Lead Capture

Leads are captured automatically through APIs and simulated webhooks.

Example sources supported:

- Website forms  
- WhatsApp messages  
- Social media inquiries  
- Lead forms (Tally / Google Forms)

Each lead automatically generates a **Lead Profile** containing:

- Name  
- Phone number  
- Lead source  
- Timestamp  
- Assigned agent  
- Lead status  

Manual data entry is not required.

---

### 2. Automatic Lead Assignment

The system assigns leads using **workload balancing logic**.

Agents available:


Aman
Neha
Rohit


When a new lead is created:

1. The system checks how many active leads each agent has.
2. The lead is assigned to the agent with the **lowest workload**.

This ensures fair distribution.

---

### 3. Lead Pipeline

The CRM implements the required pipeline stages:


New Lead
Contacted
Requirement Collected
Property Suggested
Visit Scheduled
Visit Completed
Booked
Lost


Agents can update lead stages directly from the CRM dashboard.

This provides visibility into the **entire conversion funnel**.

---

### 4. Visit Scheduling

Agents can schedule property visits for leads.

Visit information includes:

- Property name  
- Visit date and time  
- Visit outcome  

When a visit is scheduled:

- Lead status automatically changes to **Visit Scheduled**

After the visit, the agent can mark the outcome.

---

### 5. Follow-up Reminder

A background job monitors inactive leads.

Logic:

If a lead has no activity for **24 hours**, it triggers a reminder.

Currently reminders are logged, but this can be extended to:

- Email notifications  
- WhatsApp notifications  
- Slack alerts

---

### 6. Dashboard Analytics

The dashboard provides quick insights into the lead funnel.

Metrics displayed:

- Total leads received  
- Leads in each pipeline stage  
- Visits scheduled  
- Bookings confirmed  

This helps management track **conversion performance**.

---

## System Architecture

The application follows a modern **full-stack architecture**.


Frontend (React + Tailwind)
│
│ REST API
▼
Backend (Node.js + Express)
│
│ Mongoose ODM
▼
Database (MongoDB Atlas)


Deployment architecture:


Frontend → Netlify
Backend → Render
Database → MongoDB Atlas


---

## Database Design

### Lead Collection

Lead
├ name
├ phone
├ source
├ assignedAgent
├ status
├ property
├ visitDate
├ visitOutcome
├ lastActivity
└ createdAt


### Activity Collection

Tracks lead activity such as:

- Lead created  
- Status changed  
- Agent reassigned  
- Visit scheduled  

This enables future features like **lead timelines and analytics**.

---

## Tech Stack

Frontend

- React
- Tailwind CSS
- Axios

Backend

- Node.js
- Express.js

Database

- MongoDB Atlas
- Mongoose ODM

Deployment

- Netlify – frontend hosting
- Render – backend hosting

Tools

- Git
- GitHub
- Postman

---

## API Endpoints

### Lead APIs

```
GET /api/leads
```
```
POST /api/leads
```
```
PUT /api/leads/:id
```
```
PUT /api/leads/agent/:id
```


### Visit APIs

```
POST /api/visits
```
```
PUT /api/visits/:id/outcome
```

### Dashboard API

```
GET /api/dashboard
```

### Webhook APIs

```
POST /api/tally-webhook
```

```
POST /api/whatsapp-webhook
```

---

## Installation (Local Setup)

Clone repository

```
git clone https://github.com/Kartikmanth19/Gharpaay-CRM.git
```

Backend setup

```
cd backend
```
```
npm install
```
```
npm run dev
```

Frontend setup

```
cd frontend
```
```
npm install
```
```
npm run dev
```

---

## Scalability Considerations

If deployed in production, the system could scale using:

### Message Queues

Webhook events can be processed via:

- RabbitMQ  
- Kafka  
- AWS SQS  

### Microservices Architecture

Services could be split into:

- Lead Service  
- Assignment Service  
- Notification Service  
- Analytics Service  

### Caching

Redis could be used to cache dashboard analytics and reduce database load.

### Horizontal Scaling

The backend can scale using:

- Docker containers  
- Kubernetes  
- Load balancers  

### Real-time Updates

WebSockets could enable real-time lead updates for agents.

---

## Future Improvements

Possible enhancements beyond MVP:

- WhatsApp Business API integration  
- Automated reassignment if agent inactive  
- Lead activity timeline  
- Agent performance leaderboard  
- Calendar integration for visits  
- Email and SMS reminders  

---

## Author

Kartik Rajesh Manthanwar

Email  
kartik.manth19@gmail.com

Phone  
+91 7843091233
