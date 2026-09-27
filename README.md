# ConcurSys

**Language, runtime, and distributed systems engineering for agents.**

[Website](https://concursys.io/) · [ALUX](https://www.alux.network/) · [Contact](mailto:info@concursys.io)

ConcurSys develops the foundations for agents that need persistent state, explicit authority, concurrent execution, and verifiable results. Our engineering work brings together programming languages, virtual machines, and distributed agreement, including the technology behind ALUX.

This repository contains the ConcurSys company website. It presents our services, technical capabilities, and team; it is not the implementation of the ALUX network or its runtime.

## Engineering focus

| Area | Focus |
| --- | --- |
| **Tolang** | A language developed for next-generation blockchains, grounded in process calculus and concurrent communication. |
| **TVM** | The bytecode runtime that executes Tolang services. |
| **OCAP** | Object-capability security that makes access and authority explicit. |
| **ReplayTrie** | Replayable execution evidence for deterministic validation. |
| **BlockGit** | Distributed agreement and consensus. |
| **GLVM** | An evolving global virtual machine architecture connecting the execution stack. |

The website connects these technologies to practical engineering services: agent infrastructure, virtual machine engineering, and distributed systems. Its capability map distinguishes established foundations from ongoing work and roadmap items.

## Explore the website

- [Services](https://concursys.io/services.html): engineering engagements and deliverables.
- [Technology](https://concursys.io/technology.html): the capability map and individual technical overviews.
- [Company](https://concursys.io/company.html): ConcurSys and its work on ALUX.
- [Team](https://concursys.io/team.html): Frank He and Tomislav Grospić.

The site is available in ten languages: English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Spanish, French, German, Russian, and Arabic. It defaults to English and preserves the selection in the URL through `?lang=`. Arabic uses a right-to-left layout.

The homepage opens with a layered view of the agent execution stack: Tolang, OCAP, TVM, and BlockGit, with GLVM spanning them. Visitors can run a task through the layers, resume it after a wait, or watch an out-of-authority request stop at the OCAP boundary.

Interactive execution examples are educational models, not live network telemetry or transactions. The contact form prepares an email draft; it does not send messages automatically.

## Run locally

Use a current Node.js LTS release. The website has no package installation step.

```sh
git clone https://github.com/shixi-11/concursys.git
cd concursys
node server.mjs
```

Open [localhost:4317](http://127.0.0.1:4317/). The preview server listens on the local machine only.

## Build and validate

```sh
# Generate static page shells, metadata, and the sitemap
node design/build-pages.mjs

# Check multilingual content and page resources
node design/verify-i18n.mjs

# Verify the execution demonstration state machine
node --test design/execution-demo.test.mjs

# With the preview running and Chrome installed:
# sweep every page and language at mobile and desktop widths
node design/check-layout.mjs

# capture full-page screenshots for visual review
node design/snap.mjs output/review 1440x900 / /technology.html
```

Generated pages are committed to the repository. After editing source content or page templates, regenerate them before submitting changes. Check affected pages in a browser at desktop and mobile widths, including the relevant language and interaction states.

## Repository structure

```text
public/                  Deployable website: pages, scripts, styles, and assets
public/site.css          Design system and page styles
public/stack-hero.js     Homepage execution stack diagram
public/locales/          Additional language catalogs
design/build-pages.mjs   Static page and metadata generator
design/verify-i18n.mjs   Content and resource checks
design/check-layout.mjs  Layout sweep across pages, languages, and widths
design/snap.mjs          Screenshot tool for visual review
server.mjs              Local preview server
```

The site uses HTML, CSS, and vanilla JavaScript. Static hosting serves `public/`; the production website is hosted on Vercel.

## Contributions

For corrections or proposed improvements, open an issue or pull request with a clear description of the affected page. Keep technical claims tied to current source material, preserve multilingual consistency, and include screenshots for visual changes. Do not include credentials, private correspondence, or local configuration.

## License

Original website code is available under the [PolyForm Noncommercial License 1.0.0](LICENSE). Commercial use requires separate written authorization; contact [info@concursys.io](mailto:info@concursys.io).

Third-party components and fonts retain their own licenses. See [NOTICE](NOTICE) for attribution and trademark information.
