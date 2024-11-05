# Next.js Template

- 🔥 Framework: Next.js
- 🛡️ Code Quality: ESLint, TypeScript, Biome, Lefthook
- 💅 Styling: Tailwind CSS
- 📚 Documentation: Storybook
- ✅ Testing: Vitest

## Overview

Biomeを基本のFormatter, Linterとして、カバーしきれない部分をESLintで補っています。
特にTailwind CSSのチェックは現状ESLintでないと実現できないため導入しています。
また、Lefthookを使ってコミット前にBiome, ESLint, TypeScript, Vitestを走らせて品質を担保しています。

## Prerequisites

- Node.js 20.x or later
- pnpm

## Setup

```bash
# install dependencies
pnpm i

# start dev server
pnpm dev
```

## License

MIT
