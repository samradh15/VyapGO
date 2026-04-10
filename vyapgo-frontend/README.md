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
```

If this succeeds locally, Vercel build is usually good once environment variables are set.

## Vercel Deployment (Monorepo)

This repository is a monorepo. In Vercel project settings, set:

- Root Directory: `vyapgo-frontend`
- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`

`vercel.json` is included in this folder to keep install/build commands explicit.

## Environment Variables

Copy from `.env.example` and set the same keys in Vercel.

Required for Firebase auth in browser:

- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_APP_ID
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID (fallback to NEXT_PUBLIC_FIREBASE_SENDER_ID is supported)

Commonly needed client vars:

- NEXT_PUBLIC_API_URL
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_USE_SERVER_OTP
- NEXT_PUBLIC_AUTH_PERSISTENCE

Needed only if using server OTP / Twilio API routes:

- SMS_PROVIDER
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN
- TWILIO_VERIFY_SID
- TWILIO_FROM

Needed only for Firebase Admin usage on server routes:

- FIREBASE_PROJECT_ID
- FIREBASE_CLIENT_EMAIL
- FIREBASE_PRIVATE_KEY

For `FIREBASE_PRIVATE_KEY` in Vercel, paste with escaped newlines (`\n`).
