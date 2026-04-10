# Vyapgo Frontend

Next.js frontend app for Vyapgo.

## Local Development

```bash
npm install
npm run dev
```

## Production Build Check

```bash
npm run build
VERCEL=1 npm run build
```

Both commands should pass before deploying.

## Vercel Deployment

Create a Vercel project and configure:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave default

If this folder is inside a larger monorepo, set Root Directory to `vyapgo-frontend`.

`vercel.json` is included to keep install/build commands explicit.

## Environment Variables

Copy from `.env.example` and set the same keys in Vercel for Production.

Required browser Firebase vars:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`

Optional browser fallback:

- `NEXT_PUBLIC_FIREBASE_SENDER_ID`

Common client vars:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_USE_SERVER_OTP`
- `NEXT_PUBLIC_AUTH_PERSISTENCE`

Server OTP (Twilio) vars:

- `SMS_PROVIDER`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_VERIFY_SID`
- `TWILIO_FROM`

Firebase Admin server vars:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

For `FIREBASE_PRIVATE_KEY` in Vercel, paste the key with escaped newlines (`\n`).

## Go-Live Checklist

- Build passes locally with `npm run build` and `VERCEL=1 npm run build`.
- All Production env vars are configured in Vercel.
- Domain is connected in Vercel and DNS is verified.
- A successful Production deployment is marked Ready in Vercel.
