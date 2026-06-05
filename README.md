# DevOps Demo

A simple Node.js application demonstrating a complete CI/CD pipeline.

## Features
- **GET /** — Returns Hello World with server time
- **GET /counter** — Visitor counter
- **GET /greet?name=NAME** — Personalized greeting
- **GET /health** — Health check endpoint

## Pipeline
| Trigger | Action |
|---------|--------|
| Push/PR to any branch | Run tests |
| Merge to main | Build & push Docker image to GitHub Container Registry |
| After image push | Update Kubernetes manifests with release tag |

## Tech Stack
- Node.js + Express
- Jest + Supertest (testing)
- Docker (containerization)
- GitHub Actions (CI/CD)
- Kubernetes (deployment manifests ready)