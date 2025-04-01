export default function Header() {
  return (
    <header className="py-4 px-8 bg-black/50">
      <nav className="max-w-4xl mx-auto">
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-primary">Home</a></li>
          <li><a href="/about" className="hover:text-primary">About</a></li>
        </ul>
      </nav>
    </header>
  );
} 