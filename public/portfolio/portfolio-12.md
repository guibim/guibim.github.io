# BIMZCDE — Common Data Environment for AEC/BIM

> Vendor-neutral CDE platform for Architecture, Engineering and Construction teams.

## Overview

BIMZCDE is a proprietary Common Data Environment (CDE) built from the ground up for AEC teams working with BIM processes. It eliminates dependency on expensive proprietary platforms by providing a full-featured, open-standards CDE that runs on any infrastructure.

The platform is designed around ISO 19650 workflows and supports the complete information management cycle — from model upload and coordination to issue tracking, validation, and formal approval.

## Key Features

- **IFC Model Management** — upload, version, and organize IFC models with metadata and discipline tagging
- **3D Browser Viewer** — visualize IFC models directly in the browser using Three.js and IfcOpenShell, no plugins required
- **BCF 3.0 Issue Tracking** — create, assign, and resolve coordination issues linked directly to model elements
- **IDS Validation** — validate IFC files against Information Delivery Specifications automatically
- **ISO 19650 Approval Workflow** — structured review and approval states (Work In Progress → Shared → Published → Archived)
- **Zero Lock-in** — open standards throughout; models and data can be exported at any time

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + TypeScript |
| Backend | FastAPI (Python) |
| IFC Processing | IfcOpenShell |
| 3D Rendering | Three.js + IFC.js |
| Database | PostgreSQL |
| Containerization | Docker |
| Standards | IFC 4.x · BCF 3.0 · IDS · ISO 19650 |

## Status

**In Development** — core IFC management and viewer in active development. Available for licensing to AEC firms, BIM managers, and platform resellers.

## Contact

Interested in licensing or integration? → [guilhermebim016@gmail.com](mailto:guilhermebim016@gmail.com)
