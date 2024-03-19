import Image from 'next/image';
import Link from 'next/link';

import logoImg from '@/assets/logo.png';

export default function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
        className="w-10 h-auto object-contain"
        src={logoImg}
        alt="A bowl of food"
        priority
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
        GreenEats
      </span>
    </Link>
  );
}
