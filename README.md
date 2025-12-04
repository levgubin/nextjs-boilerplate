This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Running Tests

This project uses [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com/react) for testing.

### Install Dependencies

Make sure all dependencies are installed:

```bash
npm install
```

### Run Tests

Run tests in watch mode (recommended for development):

```bash
npm test
```

Run tests once (useful for CI/CD):

```bash
npm run test:run
```

Run tests with UI:

```bash
npm run test:ui
```

### Writing Tests

Tests are located next to the files they test with the `.test.tsx` extension. For example:
- `app/services/page.tsx` → `app/services/page.test.tsx`

The project includes mocks for Next.js components (`Image`, `Link`) in `vitest.setup.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
