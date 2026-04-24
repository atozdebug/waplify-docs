---
title: API Docs — Templates Restructure & Campaigns Endpoints
tags: [api, docs, templates, campaigns]
---

Expanded API reference with full **Templates** and **Campaigns** sections, plus a refreshed LLM reference.

<!-- truncate -->

## Templates — now a full section

The single `templates.md` page has been replaced with a structured section covering the complete template lifecycle:

- **[Create Template](/api/templates/create-template)** — submit a standard template (text, media, buttons) for approval
- **[Create Carousel Template](/api/templates/create-carousel-template)** — media-card carousels (2–10 cards, MARKETING category)
- **[List Templates](/api/templates/list-templates)** — fetch templates available on your account
- **[Sync Templates](/api/templates/sync-templates)** — pull the latest template state from Meta

## Campaigns — new API section

Send and track WhatsApp campaigns directly via the API:

- **[Create Campaign](/api/campaigns/create-campaign)** — create a draft or scheduled campaign from a list of phone numbers (auto-upserts contacts, up to 10,000 recipients per call)
- **[Send Campaign](/api/campaigns/send-campaign)** — dispatch a draft campaign asynchronously; track per-message delivery via webhooks
- **[Campaign Stats](/api/campaigns/campaign-stats)** — aggregate stats covering sent, delivered, read, clicked, failed, and replied

## Other updates

- **LLM Reference** expanded with the new templates and campaigns endpoints for AI-assisted integrations
- **Send Template Message** — corrected the templates listing endpoint reference
- **Overview** now links directly into Templates and Campaigns sections
- **API sidebar** reorganized to match the new structure
