import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <section className="hero">
      <h1>Next.js + Clerk デモ</h1>
      <p>
        Clerk の認証コンポーネントを使ってサインイン / サインアップ フローをすぐに試せます。
      </p>

      <SignedOut>
        <div className="cta-row">
          <SignInButton mode="modal">
            <button className="cta-button primary">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="cta-button secondary">Sign Up</button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="card">
          <p>サインイン済みです。ヘッダーのメニューからプロフィールを確認できます。</p>
        </div>
      </SignedIn>
    </section>
  )
}
