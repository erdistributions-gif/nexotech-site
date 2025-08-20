// app/rfq/layout.tsx  (server component)
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'default-no-store';

export default function RFQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
