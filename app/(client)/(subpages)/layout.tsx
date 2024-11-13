import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReSoil Technology',
  description: 'Innovative soil remediation solutions',
};

// This type defines the expected props for each subpage
export type SubpageConfig = {
  title: string;
  description?: string;
  backgroundImage?: string;
};

export default function SubpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-50">{children}</div>;
}
