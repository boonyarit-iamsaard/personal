import {
  JetBrains_Mono as FontMono,
  Noto_Sans_Thai as FontSans,
} from 'next/font/google';

export const fontSans = FontSans({
  display: 'swap',
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});
