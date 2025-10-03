import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Head>
        <title>Gobblebot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="header">
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/groceries">Groceries</Link>
          <Link href="/recipes">Recipes</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="container">{children}</main>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui, sans-serif;
          background: var(--bg);
          color: var(--text);
          transition: background 0.3s, color 0.3s;
        }
        :root {
          --bg: #fff;
          --text: #111;
          --card-bg: #fafafa;
          --border: #ddd;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #111;
            --text: #eee;
            --card-bg: #1a1a1a;
            --border: #333;
          }
        }
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .header {
          border-bottom: 1px solid var(--border);
          padding: 1rem;
        }
        .nav {
          display: flex;
          gap: 1rem;
        }
        .container {
          flex: 1;
          max-width: 800px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .grid {
          display: grid;
        }
        .card {
          background: var(--card-bg);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .helper {
          color: #888;
          font-size: 0.9rem;
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border);
        }
        .badge {
          display: inline-block;
          background: #0070f3;
          color: white;
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          margin-left: 0.5rem;
        }
        .button {
          background: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }
        .input {
          padding: 0.5rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          flex: 1;
        }
        .inline {
          display: flex;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
