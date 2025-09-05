## Тестовая задача

Адаптивная страница с каталогом фильмов, Карточки фильмов с постером, названием, описанием, жанрами и лейблами без особого оформления.

API интеграция.
- Получение данных о фильмах через REST API (/mainpage)
- Получение метаданных (жанры, страны, студии и т.д.) через /v1/metadata/*
- Трансформация данных: обновление информации о фильмах из справочников (метаданных)

## Preview

https://justwork-jet.vercel.app/

## Node

Version: 22.12.0

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
