'use client';

import { concatClassnames } from "@/utils/strings";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationSegmentItem = {
  label: string;
  path: string;
}

type SegmentProps = {
  items: NavigationSegmentItem[]
}

export default function NavigationSegment({ items }: SegmentProps) {
  const pathname = usePathname();
  
  function isCurrent(path: string) {   
    if (path === '/') {    
      return pathname === path;
    }   

    return pathname.includes(path)
  }

  return (
    <div className="flex p-2 bg-gray-200 rounded-md">
      <ul className="inline-flex w-full items-center justify-center text-center" >
        {items.map(({ label, path }) => 
          <li 
            key={path} 
            className={concatClassnames(
              isCurrent(path) 
                ? 'bg-white text-black font-semibold active' 
                : '',
              'inline-flex px-2 py-1 text-gray-500 rounded-md grow'
            )}
          >
            <Link 
              href={path}
              className="w-full"
            >
              <div>{label}</div>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}