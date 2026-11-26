# shipper

React + Next.js project.

## Stack

- [Next.js](https://nextjs.org/) — React framework (App Router)
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety

## Project structure

```
shipper/
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── tsconfig.json
├── next.config.js
├── public/
│   ├── favicon.ico
│   ├── images/
│   └── fonts/
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # React components (ui, sections, shared)
│   ├── lib/                # Utilities (db, auth, helpers)
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript definitions
│   ├── styles/             # Global CSS
│   ├── constants/
│   └── middleware.ts
└── tests/
```

## Getting started

```bash
# install dependencies
npm install

# run dev server
npm run dev

# build for production
npm run build

# start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## License

[MIT](LICENSE)