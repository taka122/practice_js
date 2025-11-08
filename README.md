# Next.js + Clerk Quickstart

このリポジトリは Next.js (App Router) と Clerk を組み合わせたサンプルです。`@clerk/nextjs` のプリビルトコンポーネントを使って、ヘッダーとトップページでサインイン／サインアップ体験を提供します。

## 必要環境

- Node.js 18.17 以上（推奨 20+）
- npm 9 以上

## セットアップ

1. 依存関係をインストール  
   ```bash
   npm install
   ```
2. Clerk ダッシュボードでアプリを作成し、**Publishable key** と **Secret key** を取得
3. `.env.example` をコピーして `.env` (または `.env.local`) を作成し、キーを設定  
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
   CLERK_SECRET_KEY=sk_test_xxx
   ```
4. 開発サーバーを起動  
   ```bash
   npm run dev
   ```
   ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、ヘッダー右上からサインインできます。

## Clerk 認証

- `middleware.ts` で `clerkMiddleware` を設定し、Next.js の内部ルートと静的ファイルを除外しつつ API ルートを常に保護しています。
- `app/layout.tsx` でアプリ全体を `ClerkProvider` でラップし、`SignedIn` / `SignedOut` コンポーネントを使ってヘッダーの UI を切り替えています。
- `app/page.tsx` のヒーローセクションでも `SignedIn`/`SignedOut` を使って、ログイン状態に応じた CTA を表示しています。

## npm スクリプト

- `npm run dev` — Next.js 開発サーバー (http://localhost:3000)
- `npm run build` — 本番ビルド (`.next` を生成)
- `npm run start` — 本番サーバー (`next start`)
- `npm run lint` — `next lint`

## Docker での実行

### 開発
1. `.env.local`（または `.env`）を用意した状態で `docker compose up --build`
2. [http://localhost:3000](http://localhost:3000) にアクセスすると、ホストのコード変更がコンテナに反映されます。
3. 停止は `Ctrl+C`。不要なら `docker compose down -v` でボリュームを削除。

### 本番用イメージ
1. Clerk のキーをビルド引数で渡してビルド  
   ```bash
   docker build \
     --build-arg NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx \
     --build-arg CLERK_SECRET_KEY=sk_test_xxx \
     -t practice-js .
   ```
2. 起動  
   ```bash
   docker run --rm -p 8080:3000 practice-js
   ```
3. [http://localhost:8080](http://localhost:8080) で本番ビルドを確認できます。
