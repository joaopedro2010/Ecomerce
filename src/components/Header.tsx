import { Link } from 'react-router-dom';
import { useStore } from '../hooks/useStore';

export function Header() {
  const { cartCount } = useStore();

  return (
    <header className="bg-[#0054A6] text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/fufuni.png"
            alt="Logo FuFuni"
            className="h-12 w-12 rounded-lg object-cover"
          />
          <span className="text-2xl font-bold text-white">FuFuni</span>
        </Link>

        <nav className="flex items-center gap-3 text-sm font-bold">
          <Link className="rounded-lg px-3 py-2 text-white no-underline hover:bg-white/10" to="/">
            Produtos
          </Link>
          <Link className="rounded-lg px-3 py-2 text-white no-underline hover:bg-white/10" to="/cart">
            Carrinho ({cartCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}
