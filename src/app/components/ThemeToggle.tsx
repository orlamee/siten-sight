'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm font-medium text-black dark:text-white cursor-pointer"
    >
      {theme === 'dark' ? (
        <FaSun size={20} className="text-yellow-500" />
      ) : (
        <FaMoon size={20} className="text-gray-500" />
      )}
    </button>
  );
}
