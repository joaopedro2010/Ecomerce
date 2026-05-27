import { Link } from 'react-router-dom';

export function CategoryNav() {
  return (
    <div className="bg-[#003D7A]">
      <div className="mx-auto flex max-w-[1200px] gap-5 overflow-x-auto px-5 py-2 text-sm">
        <Link className="shrink-0 font-bold text-white no-underline" to="/">
          Todos
        </Link>
        <Link className="shrink-0 text-white no-underline" to="/?category=Computers">
          Computadores
        </Link>
        <Link className="shrink-0 text-white no-underline" to="/?category=Electronics">
          Eletronicos
        </Link>
        <Link className="shrink-0 text-white no-underline" to="/?category=Shoes">
          Acessorios
        </Link>
      </div>
    </div>
  );
}
