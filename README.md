<p align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="readme/hero-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="readme/hero-light.svg">
  <img src="readme/hero-dark.svg" alt="Victor Dias Gonçalves, Security &amp; Platform Engineer. Animated terminal running a CIS assessment with Invariant." width="100%">
</picture>
</p>

<p align="center">
<a href="https://victordg.dev.br">victordg.dev.br</a> &nbsp;·&nbsp;
<a href="https://victordg.dev.br/cv">Résumé</a> &nbsp;·&nbsp;
<a href="https://www.linkedin.com/in/victord-goncalves/">LinkedIn</a> &nbsp;·&nbsp;
<a href="https://invariantsec.org">invariantsec.org</a>
</p>

I build backend systems in Python/FastAPI and run the Linux, Kubernetes and CI/CD infrastructure underneath them, with security designed in from the first commit. Background in SOC, security automation and AWS assessments.

## Invariant Security
<sub><code>MAIN PROJECT · OWN PRODUCT</code></sub>

**CIS Benchmark assessment for Linux hosts and Docker containers.** Point it at an IP or CIDR range: it discovers and classifies hosts, runs ~200 CIS checks over SSH or `docker exec`, and returns PASS/FAIL per control **with the evidence behind each result**, exportable as a PDF report. It runs as SaaS and as an on-prem appliance (`.deb` + systemd) that reports usage to a central licensing service, which only ever receives HMAC-hashed host identifiers, never assessment data.

I designed, built and operate the whole thing: code, pipelines and the cluster it runs on.

<p align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="readme/architecture-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="readme/architecture-light.svg">
  <img src="readme/architecture-dark.svg" alt="Invariant Security architecture: React frontend → FastAPI control plane → PostgreSQL; the API calls assessment, ingestion and discovery with one token per service; on-prem appliance syncs signed licenses with the licensing service." width="100%">
</picture>
</p>

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

## Other work
<sub><code>SIDE PROJECTS</code></sub>

**[k3s-platform](https://github.com/VictorDG00/k3s-platform)**: sanitized reference of the single-node k3s platform behind my projects: checksum-verified bootstrap, sealed-secrets, default-deny NetworkPolicies, VictoriaMetrics/Loki/Grafana, and encrypted, immutable off-site backups with a restore runbook. *Terraform · k3s · Helm*

**[Capataz](https://github.com/VictorDG00/Capataz)**: multi-agent DevSecOps orchestrator. Architect, developer and integrator agents work in a LangGraph loop; a non-LLM validator gates every sprint with pytest and Bandit (SAST) before opening a PR. LLM provider is configurable per role. *Python · LangGraph · FastAPI*

**[Amanuense](https://github.com/ForjaDosDias/Amanuense2)**: turns Brazilian financial regulation PDFs (Central Bank / Pix) into a navigable knowledge graph with an LLM extraction pipeline. *Python · FastAPI · PostgreSQL · Alembic · D3.js · pytest*

## Stack

<sub><code>PLATFORM</code></sub><br>
<img src="https://img.shields.io/badge/Linux-151614?style=flat-square&logo=linux&logoColor=d3be93" alt="Linux"> <img src="https://img.shields.io/badge/k3s-151614?style=flat-square&logo=k3s&logoColor=d3be93" alt="k3s"> <img src="https://img.shields.io/badge/Kubernetes-151614?style=flat-square&logo=kubernetes&logoColor=d3be93" alt="Kubernetes"> <img src="https://img.shields.io/badge/Terraform-151614?style=flat-square&logo=terraform&logoColor=d3be93" alt="Terraform"> <img src="https://img.shields.io/badge/Docker-151614?style=flat-square&logo=docker&logoColor=d3be93" alt="Docker"> <img src="https://img.shields.io/badge/nginx-151614?style=flat-square&logo=nginx&logoColor=d3be93" alt="nginx"> <img src="https://img.shields.io/badge/systemd-151614?style=flat-square" alt="systemd"> <img src="https://img.shields.io/badge/Cloudflare-151614?style=flat-square&logo=cloudflare&logoColor=d3be93" alt="Cloudflare">

<sub><code>SECURITY</code></sub><br>
<img src="https://img.shields.io/badge/CIS%20Benchmarks-151614?style=flat-square" alt="CIS Benchmarks"> <img src="https://img.shields.io/badge/Linux%20hardening-151614?style=flat-square" alt="Linux hardening"> <img src="https://img.shields.io/badge/nftables%20/%20UFW-151614?style=flat-square" alt="nftables / UFW"> <img src="https://img.shields.io/badge/SAST%20%C2%B7%20Bandit-151614?style=flat-square" alt="SAST · Bandit"> <img src="https://img.shields.io/badge/gitleaks-151614?style=flat-square" alt="gitleaks"> <img src="https://img.shields.io/badge/sealed--secrets-151614?style=flat-square" alt="sealed-secrets"> <img src="https://img.shields.io/badge/Incident%20response-151614?style=flat-square" alt="Incident response">

<sub><code>BACKEND</code></sub><br>
<img src="https://img.shields.io/badge/Python-151614?style=flat-square&logo=python&logoColor=d3be93" alt="Python"> <img src="https://img.shields.io/badge/FastAPI-151614?style=flat-square&logo=fastapi&logoColor=d3be93" alt="FastAPI"> <img src="https://img.shields.io/badge/Pydantic-151614?style=flat-square&logo=pydantic&logoColor=d3be93" alt="Pydantic"> <img src="https://img.shields.io/badge/PostgreSQL-151614?style=flat-square&logo=postgresql&logoColor=d3be93" alt="PostgreSQL"> <img src="https://img.shields.io/badge/SQLAlchemy-151614?style=flat-square&logo=sqlalchemy&logoColor=d3be93" alt="SQLAlchemy"> <img src="https://img.shields.io/badge/Alembic-151614?style=flat-square" alt="Alembic"> <img src="https://img.shields.io/badge/React-151614?style=flat-square&logo=react&logoColor=d3be93" alt="React"> <img src="https://img.shields.io/badge/Go-151614?style=flat-square&logo=go&logoColor=d3be93" alt="Go">

<sub><code>DELIVERY</code></sub><br>
<img src="https://img.shields.io/badge/GitHub%20Actions-151614?style=flat-square&logo=githubactions&logoColor=d3be93" alt="GitHub Actions"> <img src="https://img.shields.io/badge/GHCR-151614?style=flat-square&logo=github&logoColor=d3be93" alt="GHCR"> <img src="https://img.shields.io/badge/pytest-151614?style=flat-square&logo=pytest&logoColor=d3be93" alt="pytest"> <img src="https://img.shields.io/badge/Vitest-151614?style=flat-square&logo=vitest&logoColor=d3be93" alt="Vitest"> <img src="https://img.shields.io/badge/Ruff-151614?style=flat-square&logo=ruff&logoColor=d3be93" alt="Ruff"> <img src="https://img.shields.io/badge/mypy-151614?style=flat-square" alt="mypy">

<sub><code>OBSERVABILITY</code></sub><br>
<img src="https://img.shields.io/badge/VictoriaMetrics-151614?style=flat-square&logo=victoriametrics&logoColor=d3be93" alt="VictoriaMetrics"> <img src="https://img.shields.io/badge/Grafana-151614?style=flat-square&logo=grafana&logoColor=d3be93" alt="Grafana"> <img src="https://img.shields.io/badge/Loki-151614?style=flat-square" alt="Loki"> <img src="https://img.shields.io/badge/Alloy-151614?style=flat-square" alt="Alloy">

## Background

- **Invariant Security**, Founder & Security/Platform Engineer *(2026 – present)*
- **Dfense Security**, Systems Analyst: security automation (Python/Shell) integrating CyberArk, Gigamon and Netskope; AWS assessments *(2022 – 2023)*
- **T-Systems**, SOC L1 intern: incident monitoring, LGPD and crypto controls *(2022)*
- **FIAP**, Cyber Defense (1st place at CTF NEXT 2022 and the Banco Carrefour challenge) · **ENIAC**, Systems Analysis & Development
- Cisco CyberOps Associate · AWS Certified Cloud Practitioner

<p align="right"><sub>Same content as <a href="https://victordg.dev.br">victordg.dev.br</a> · updated Nov 2026</sub></p>
