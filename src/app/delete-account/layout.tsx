import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Your Account - SiteNSight',
  description: 'Learn how to permanently delete your SiteNsight account with our step-by-step guide.',
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
