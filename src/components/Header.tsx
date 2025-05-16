// app/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 py-4 border-b border-gray-300 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 no-underline">
          Koderi
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="#ваш-старт" className="text-gray-600 hover:text-blue-500 transition duration-300 no-underline">
                Ваш Старт
              </Link>
            </li>
            <li>
              <Link href="#про-нас" className="text-gray-600 hover:text-blue-500 transition duration-300 no-underline">
                Про нас
              </Link>
            </li>
            <li>
              <Link href="#наші-послуги" className="text-gray-600 hover:text-blue-500 transition duration-300 no-underline">
                Наші Послуги
              </Link>
            </li>
            <li>
              <Link href="#чому-обирають-нас" className="text-gray-600 hover:text-blue-500 transition duration-300 no-underline">
                Чому Обирають Нас
              </Link>
            </li>
            <li>
              <Link href="#пет-проект" className="text-gray-600 hover:text-blue-500 transition duration-300 no-underline">
                Пет-проект
              </Link>
            </li>
            <li>
              <Link href="#контакти" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 no-underline">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
        {/* Мобільна навігація (можна додати пізніше) */}
        <div className="md:hidden">
          {/* Іконка меню */}
        </div>
      </div>
    </header>
  );
}