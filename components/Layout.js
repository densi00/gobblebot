export default function Layout({ children }) {
  return (
    <div className="container">
      <header className="header">
        <a className="brand" href="/">
          <span className="brand-badge" aria-hidden />
          <h1>Gobblebot</h1>
        </a>
        <nav className="nav">
          <a href="/groceries">Groceries</a>
          <a href="/recipes">Recipes</a>
        </nav>
      </header>

      {children}

      <p className="footer">Deployed on Vercel · Minimal UI demo</p>
    </div>
  );
}
