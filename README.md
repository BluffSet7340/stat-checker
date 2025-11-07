
# GitHub Stat Checker

A web app to view your GitHub profile statistics, built with Next.js 15, NextAuth.js, Tailwind CSS, and deployed on Vercel.

## Features

- **GitHub OAuth**: Secure login using your GitHub account.
- **Profile Stats**: View your GitHub name, email, avatar, followers, following, and total repositories (public + private).
- **Modern UI**: Responsive, dark-themed interface using Tailwind CSS and Geist font.
- **Deployed on Vercel**: Fast, serverless deployment.

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [NextAuth.js (GitHub Provider)](https://authjs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/) (deployment)
- [Lucide React](https://lucide.dev/icons/) (icons)
- [Axios](https://axios-http.com/) (API requests)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/BluffSet7340/stat-checker.git
cd stat-checker
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file in the root with the following:

```
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret
AUTH_SECRET=you_auth_secret_npx_auth
```

Get your GitHub OAuth credentials from [GitHub Developer Settings](https://github.com/settings/developers).

### 4. Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

## Project Structure

- `src/app/` – Next.js app directory (pages, layout, API routes)
- `src/auth.ts` – NextAuth.js configuration
- `src/lib/actions/` – Authentication actions (login, logout)
- `src/app/components/` – UI components (SignIn, SignOut, UserInfo)
- `src/types/` – TypeScript type overrides for NextAuth
- `public/` – Static assets

## Deployment

This project is deployed on [Vercel](https://vercel.com/). To deploy your own:

1. Push your code to GitHub.
2. Import the repo into Vercel.
3. Set the required environment variables in the Vercel dashboard.
4. Deploy!

## Demo 

![Login Page](https://github.com/BluffSet7340/stat-checker/blob/main/demo%201.png)
![Detail Page](https://github.com/BluffSet7340/stat-checker/blob/main/demo%202.png) 

## License

MIT
