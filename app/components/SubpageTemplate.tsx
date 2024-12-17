'use client';

import { usePathname } from 'next/navigation';
import SubpageHeader from './SubpageHeader';
import { subpageConfigs } from '@/app/config/subpage-configs';

export default function SubpageTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pageName = pathname.split('/').pop() || '';
  const config = subpageConfigs[pageName];

  if (!config) {
    return <div className="bg-gray-50">{children}</div>;
  }

  return (
    <div className="min-h-screen">
      <SubpageHeader
        title={config.title}
        description={config.description}
      />
      {children}
    </div>
  );
} 