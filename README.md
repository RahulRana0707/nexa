# 🚀 Nexa — AI-Powered Customer Support Widget

Nexa is a lightweight, embeddable chatbot widget for websites.  
Think of it like **Intercom** — but simpler, faster, and more customizable.  
Integrate Nexa into any website with a single line of code and provide your users with **smart, automated customer support**.

---

## ✨ Features

- 🧠 **AI-powered chat agent** — Integrate your own model or use built-in responses.
- 🎨 **Customizable UI** — Match your brand's colors and styles.
- ⚡ **Lightweight & Fast** — Minimal JS footprint.
- 🔌 **Easy Integration** — Just copy-paste the Nexa script into your site.
- 🔒 **Secure & Reliable** — Built with modern web standards.


# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
