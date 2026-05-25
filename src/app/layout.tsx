import type { Metadata } from 'next';
import '../styles/globals.css';
import Nav from '@/components/Nav';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont/tabler-icons.min.css" />

export const metadata: Metadata = {
  title: 'Gabriel Delisle — Software Engineer',
  description: 'Personal website and résumé of Gabriel Delisle, Software Engineer based in Calgary, AB.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
