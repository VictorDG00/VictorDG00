# Victor Dias Gonçalves

**AI Engineer | DevSecOps**  
São Paulo, SP · [LinkedIn](https://www.linkedin.com/in/victord-goncalves/) · [victord.goncalves@outlook.com](mailto:victord.goncalves@outlook.com)

---

Engenheiro de IA com background em segurança da informação. Construo produtos e automações com LLMs — da arquitetura ao deploy. Tenho dois projetos em produção que mostram como penso: sistemas que resolvem problemas reais, com segurança integrada desde o início, não como afterthought.

---

## Projetos

### [Luis Gama](https://github.com/Victordg00/wordaddin)
Add-in para Microsoft Word que analisa documentos jurídicos via LLM.

**Stack:** Python · FastAPI · DeepSeek API · JavaScript · Docker · Fly.io · GitHub Actions

- Provider Pattern com fallback automático entre LLMs
- Sistema de billing com planos Trial/Paid/Admin e integração com gateway de pagamento via webhooks
- LGPD compliance by design — conteúdo dos documentos nunca é persistido, apenas hash SHA-256
- CI/CD completo: testes automáticos a cada push + deploy automatizado no Fly.io
- Testes unitários com pytest cobrindo providers, billing e autenticação

---

### [Capataz](https://github.com/Victordg00/Capataz)
Orquestrador multi-agente para pipeline DevSecOps autônomo.

**Stack:** Python · LangGraph · FastAPI · Docker

- Agentes com papéis específicos: Arquiteto (Claude) planeja, Operário (Gemini) executa, Inspetor valida com SAST antes de qualquer push
- Shift left security integrado — segurança como requisito arquitetural, não checklist final
- Estado persistente entre execuções via LangGraph com thread_id
- Audit log automático de cada turno do pipeline (ACTLOG.md)
- Docker isolado para execução sem vazamento de segredos de ambiente

---

## Stack

```
IA & LLMs       LangGraph · LangChain · RAG · Multi-agent · Provider Pattern · DeepSeek · OpenAI
Backend         Python · FastAPI · JavaScript · Node.js · REST APIs · Shell Script
DevSecOps       Docker · GitHub Actions · CI/CD · Shift left security · CyberArk · Netskope
Cloud           AWS · GCP · Fly.io · Digital Ocean
Banco de dados  PostgreSQL · SQLite · SQLAlchemy · Prisma · Bancos vetoriais (ChromaDB)
```

---

## Experiência

**Dfense Security** — Analista de Desenvolvimento de Sistemas *(Dez/2022 – Dez/2023)*  
Automação de processos com Python e Shell Script em ambientes enterprise. Integração de plataformas de segurança (Gigamon, Netskope, CyberArk) via APIs. Assessments em AWS e análise de vulnerabilidades automatizada. Clientes: Bradesco, Cielo, Comgas, AeC.

**T-Systems Brasil** — Estagiário em Segurança da Informação SOC N1 *(Abr/2022 – Nov/2022)*  
Monitoramento e resposta a incidentes. Assessments em AWS. Validação de compliance (LGPD, criptografia).

**Flipside** — Estagiário em TI *(Out/2021 – Mar/2022)*  
Desenvolvimento de bots em Python com integração via REST API.

---

## Formação

**FIAP** — Tecnólogo em Defesa Cibernética (2022)  
Bolsa Mérito — 3º lugar geral em Segurança da Informação entre todos os estudantes

**ENIAC** — Tecnólogo em Análise e Desenvolvimento de Sistemas (2020)

---

## Certificações

- AWS Cloud Practitioner — Amazon (2022)
- AZ-900 Azure Fundamentals — Microsoft (em preparação)
- CyberOps Associate — Cisco (2022)
- Linux Avançado — IFSP (em andamento)

---

## Conquistas

- 🥇 1º lugar — Desafio Banco Carrefour FIAP 2022 (MISP na nuvem com coleta de IoC via API)
- 🥇 1º lugar — CTF NEXT FIAP 2022 (competição de defesa cibernética entre todas as turmas)
- 🥈 2º lugar — Desafio PrideSec FIAP 2021 (WebCrawler para detecção de credenciais vazadas)
- 🥈 2º lugar — Global Solution FIAP 2021 (CTF multi-cenário: redes, engenharia reversa, criptografia)

---

## Idiomas

Português — Nativo · Inglês — Avançado

---

*Consultoria de desenvolvimento com IA:* [WhatsApp](https://wa.me/5511911993949)
