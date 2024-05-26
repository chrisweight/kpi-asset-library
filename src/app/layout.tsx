import Link from 'next/link';
import NavigationSegment, { NavigationSegmentItem } from '@/components/navigation-segment';
import { Button } from '@/components/button';
import { RequestIcon } from '@/components/icons';
import { SearchBar } from '@/components/search-bar';
import { SearchStoreProvider } from '@/providers/search-store.provider';
import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Library",
  description: "A KPI Asset Library",
};

export const navigationItems: NavigationSegmentItem[] = [
  {
    label: 'Featured',
    path: '/'
  },
  {
    label: 'KPI',
    path: '/kpi'
  },
  { 
    label: 'Layouts',
    path: '/layout'
  },
  {
    label: 'Storyboards',
    path: '/storyboard'
  }
]

type RootLayoutProps = {
  children: React.ReactNode,
  modal: React.ReactNode,
  request: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body>
        <main className="container p-6">
          <SearchStoreProvider>
            <div className="absolute right-0 top-0 p-4">  
              <Link href="/request" scroll={false}>
                <Button text="Request" icon={<RequestIcon />} />
              </Link>
            </div>
            <div className="flex justify-center text-center mb-12">
              <div>
                <h1 className="text-6xl font-extrabold mb-8">Library</h1>
                <p className="text-xl">Browse for assets need to report and present analysis</p>
              </div>
            </div>
            <div className="mb-12">
              <SearchBar />
            </div>
            <div className="mb-12">
              <NavigationSegment items={navigationItems} />
            </div>
            {props.children}
          </SearchStoreProvider>
        </main>
        {props.modal}
        {props.request}
      </body>
    </html>
  );
}
