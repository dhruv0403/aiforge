

# Aiforge [![Aiforge: AI-Powered Full-Stack Web Development in the Browser](./public/logo.svg)](https://aiforge.vercel.app)

The Aiforge allows you to choose the LLM that you use for each prompt! Currently, you can use OpenAI, Anthropic, Ollama, OpenRouter, Gemini, or Groq models - and it is easily extended to use any other model supported by the Vercel AI SDK! See the instructions below for running this locally and extending it to include more models.

# Requested Additions to this

- ✅ OpenRouter Integration
- ✅ Gemini Integration
- ✅ Autogenerate Ollama models from what is downloaded
- ✅ Filter models by provider
- ✅ Download project as ZIP
- ✅ Improvements to the main Aiforge prompt in `app\lib\.server\llm\prompts.ts`
- ✅ DeepSeek API Integration
- ✅ Mistral API Integration
- ✅ "Open AI Like" API Integration
- ✅ Ability to sync files (one way sync) to local folder
- ✅ Containerize the application with Docker for easy installation
- ✅ Publish projects directly to GitHub
- ⬜ Prevent Aiforge from rewriting files as often (Done but need to review PR still)
- ⬜ **HIGH PRIORITY** - Better prompting for smaller LLMs (code window sometimes doesn't start)
- ⬜ **HIGH PRIORITY** - Attach images to prompts
- ⬜ **HIGH PRIORITY** - Run agents in the backend as opposed to a single model call
- ⬜ LM Studio Integration
- ⬜ Together Integration
- ⬜ Azure Open AI API Integration
- ⬜ HuggingFace Integration
- ⬜ Perplexity Integration
- ⬜ Deploy directly to Vercel/Netlify/other similar platforms
- ⬜ Load local projects into the app
- ⬜ Ability to revert code to earlier version
- ⬜ Prompt caching
- ⬜ Ability to enter API keys in the UI
- ⬜ Have LLM plan the project in a MD file for better results/transparency

# Aiforge: AI-Powered Full-Stack Web Development in the Browser

Aiforge is an AI-powered web development agent that allows you to prompt, run, edit, and deploy full-stack applications directly from your browser—no local setup required. If you're here to build your own AI-powered web dev agent using the Aiforge open source codebase, [click here to get started!](./CONTRIBUTING.md)

## What Makes Aiforge Different

Claude, v0, etc are incredible- but you can't install packages, run backends, or edit code. That’s where Aiforge stands out:

- **Full-Stack in the Browser**: Aiforge integrates cutting-edge AI models with an in-browser development environment powered by **Gorlabs’s WebContainers**. This allows you to:

  - Install and run npm tools and libraries (like Vite, Next.js, and more)
  - Run Node.js servers
  - Interact with third-party APIs
  - Deploy to production from chat
  - Share your work via a URL

- **AI with Environment Control**: Unlike traditional dev environments where the AI can only assist in code generation, Aiforge gives AI models **complete control** over the entire environment including the filesystem, node server, package manager, terminal, and browser console. This empowers AI agents to handle the whole app lifecycle—from creation to deployment.

Whether you’re an experienced developer, a PM, or a designer, Aiforge allows you to easily build production-grade full-stack applications.

For developers interested in building their own AI-powered development tools with WebContainers, check out the open-source Aiforge codebase in this repo!

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20.15.1)
- pnpm (v9.4.0)

## Setup

1. Clone the repository (if you haven't already):

```bash
git clone https://github.com/dhruv0403/aiforge.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Rename `.env.example` to .env.local and add your LLM API keys (you only have to set the ones you want to use and Ollama doesn't need an API key because it runs locally on your computer):

```
GROQ_API_KEY=XXX
OPENAI_API_KEY=XXX
ANTHROPIC_API_KEY=XXX
```

Optionally, you can set the debug level:

```
VITE_LOG_LEVEL=debug
```

**Important**: Never commit your `.env.local` file to version control. It's already included in .gitignore.

## Adding New LLMs:

To make new LLMs available to use in this version of Aiforge, head on over to `app/utils/constants.ts` and find the constant MODEL_LIST. Each element in this array is an object that has the model ID for the name (get this from the provider's API documentation), a label for the frontend model dropdown, and the provider.

By default, Anthropic, OpenAI, Groq, and Ollama are implemented as providers, but the YouTube video for this repo covers how to extend this to work with more providers if you wish!

When you add a new model to the MODEL_LIST array, it will immediately be available to use when you run the app locally or reload it. For Ollama models, make sure you have the model installed already before trying to use it here!

## Available Scripts

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the project.
- `pnpm run start`: Runs the built application locally using Wrangler Pages. This script uses `bindings.sh` to set up necessary bindings so you don't have to duplicate environment variables.
- `pnpm run preview`: Builds the project and then starts it locally, useful for testing the production build. Note, HTTP streaming currently doesn't work as expected with `wrangler pages dev`.
- `pnpm test`: Runs the test suite using Vitest.
- `pnpm run typecheck`: Runs TypeScript type checking.
- `pnpm run typegen`: Generates TypeScript types using Wrangler.
- `pnpm run deploy`: Builds the project and deploys it to Cloudflare Pages.

## Development

To start the development server:

```bash
pnpm run dev
```

This will start the Remix Vite development server. You will need Google Chrome Canary to run this locally if you use Chrome! It's an easy install and a good browser for web development anyway.

## Tips and Tricks

Here are some tips to get the most out of Aiforge:

- **Be specific about your stack**: If you want to use specific frameworks or libraries (like Astro, Tailwind, ShadCN, or any other popular JavaScript framework), mention them in your initial prompt to ensure Aiforge scaffolds the project accordingly.

- **Use the enhance prompt icon**: Before sending your prompt, try clicking the 'enhance' icon to have the AI model help you refine your prompt, then edit the results before submitting.

- **Scaffold the basics first, then add features**: Make sure the basic structure of your application is in place before diving into more advanced functionality. This helps Aiforge understand the foundation of your project and ensure everything is wired up right before building out more advanced functionality.

- **Batch simple instructions**: Save time by combining simple instructions into one message. For example, you can ask Aiforge to change the color scheme, add mobile responsiveness, and restart the dev server, all in one go saving you time and reducing API credit consumption significantly.
