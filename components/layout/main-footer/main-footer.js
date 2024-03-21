import Link from 'next/link';

export default function MainFooter() {
  return (
    <footer className="mt-12 text-center text-sm text-gray-400 shadow p-8 bg-[#171717]">
      <p>
        © 2024{' '}
        <Link href="/" className="hover:underline">
          GreenEats™
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
