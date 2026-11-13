# Victor Dias Gonçalves

**Security & Platform Engineer** · São Paulo, Brazil
[victordg.dev.br](https://victordg.dev.br) · [LinkedIn](https://www.linkedin.com/in/victord-goncalves/) · [Résumé](https://victordg.dev.br/cv) · [invariantsec.org](https://invariantsec.org)

I build backend systems in Python/FastAPI and run the Linux, Kubernetes and CI/CD infrastructure underneath them, with security designed in from the first commit. Background in SOC, security automation and AWS assessments. Founder of **Invariant Security**.

---

## Invariant Security: main project

**CIS Benchmark assessment for Linux hosts and Docker containers.** Point it at an IP or CIDR range: it discovers and classifies hosts, runs ~200 CIS checks over SSH or `docker exec`, and returns PASS/FAIL per control **with the evidence behind each result**, exportable as a PDF report. It runs as SaaS and as an on-prem appliance (`.deb` + systemd) that reports usage to a central licensing service, which only ever receives HMAC-hashed host identifiers, never assessment data.

I designed, built and operate the whole thing: code, pipelines and the cluster it runs on.

```mermaid
flowchart LR
    U[Browser] --> CF[Cloudflare] --> NX[nginx edge]
    NX --> FE[frontend<br/>React SPA]
    NX --> API[api<br/>FastAPI control plane]
    API --> PG[(PostgreSQL 16)]
    API -->|bearer per service| AS[assessment<br/>CIS engine]
    API -->|bearer per service| DI[discovery<br/>socket fingerprinting]
    API -->|bearer per service| IN[ingestion<br/>CIS PDF → controls]
    AS -->|SSH / docker exec| T[Target hosts<br/>& containers]
    DI -->|TCP / banners / TLS| T
    APL[On-prem appliance] -->|signed license sync| LIC[licensing<br/>FastAPI + Postgres]
    C[[contracts<br/>versioned Pydantic models]] -.-> API & AS & DI & IN & LIC
```

| Layer | Stack |
|---|---|
| Services | Python 3.11, FastAPI, Pydantic, psycopg 3, Alembic, Paramiko, httpx, ReportLab |
| Frontend | React 19, Vite, Vitest, Testing Library |
| Licensing | FastAPI, SQLAlchemy 2, Ed25519-signed license certificates, append-only usage events |
| CI/CD | GitHub Actions → images on GHCR, deployed by digest; feature → `dev` (auto-deploys staging) → `main` (gated, manual) |
| Platform | k3s, Terraform (kubernetes + helm providers, remote state), sealed-secrets, default-deny NetworkPolicies |
| Observability | VictoriaMetrics, Loki, Grafana, Alloy, kube-state-metrics |
| Ops | Encrypted, immutable off-site backups; nginx + Cloudflare at the edge; `.deb` packaging with systemd |

**Engineering choices I care about**

- **Test the real boundary.** Integration tests run against real PostgreSQL, real SSH targets and Debian/Ubuntu fixture containers, not mocks.
- **Contracts first.** A shared contracts library, consumed by tag only; release candidates (`-rcN`) in staging, and promotion is blocked while any `-rc` pin remains.
- **A gate before every promotion.** Contract → migration → tests → integration → staging smoke → regression → security review → tag.
- **Safe deploys.** Migrations run before the container swap, so a failed migration leaves the old version serving; rollback to the previous image is one step.
- **Least privilege between services.** One token per service, and services refuse to start without it (fail-closed).
- **Supply chain hygiene.** Locked dependencies, images and Helm charts pinned by digest/version, checksum-verified cluster install.
- **Privacy by design.** LGPD records of processing written from the actual code and infrastructure.

Public repos: [assessment](https://github.com/Invariant-Security/invariant_assessment) · [discovery](https://github.com/Invariant-Security/invariant_discovery) · [ingestion](https://github.com/Invariant-Security/invariant_ingestion) · [contracts](https://github.com/Invariant-Security/invariant_contracts) · [packaging](https://github.com/Invariant-Security/invariant_packaging). The api, frontend and licensing services are private.

---

## Other projects

**[Capataz](https://github.com/VictorDG00/Capataz)**: multi-agent DevSecOps orchestrator. An architect agent plans, a worker agent executes, and an inspector runs SAST (Bandit) before anything is pushed. *Python · LangGraph · FastAPI · Docker*

**[Amanuense](https://github.com/ForjaDosDias/Amanuense2)**: turns Brazilian financial regulation PDFs (Central Bank / Pix) into a navigable knowledge graph with an LLM extraction pipeline. *Python · FastAPI · PostgreSQL · Alembic · D3.js · pytest*

<!-- sevicodezap: add after the public-readiness fixes (Phase 4) -->
<!-- infra showcase: add when the sanitized repo is published (Phase 5) -->

---

## Toolbox

```
Platform     Linux · k3s/Kubernetes · Terraform · Docker · LXD · nginx · systemd · Cloudflare
Security     CIS Benchmarks · Linux hardening · iptables/nftables · UFW · SAST · incident response
Backend      Python · FastAPI · Pydantic · PostgreSQL · SQLAlchemy · Alembic · Go · Node.js
Delivery     GitHub Actions · GHCR · pytest · Vitest · Ruff · mypy
Observability VictoriaMetrics · Loki · Grafana
```

## Background

- **Invariant Security**, Founder & Security/Platform Engineer *(2026 – present)*
- **Dfense Security**, Systems Analyst: security automation (Python/Shell) integrating CyberArk, Gigamon and Netskope; AWS assessments *(2022 – 2023)*
- **T-Systems**, SOC L1 intern: incident monitoring, LGPD and crypto controls *(2022)*
- **FIAP**, Cyber Defense (1st place at CTF NEXT 2022 and the Banco Carrefour challenge) · **ENIAC**, Systems Analysis & Development
- Cisco CyberOps Associate · AWS Certified Cloud Practitioner
