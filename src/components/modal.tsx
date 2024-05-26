'use client';

import { useRouter } from "next/navigation";
import { useRef, useCallback, useEffect } from "react";

type ModalParams = {
  children: React.ReactNode
}

export default function Modal({ children }: ModalParams) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => router.back(), [router]);
  
  const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlay.current || event.target === wrapper.current) {
      onDismiss?.();
    }
  }, [onDismiss, overlay, wrapper]);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onDismiss?.();
    }
  }, [onDismiss]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay} 
      onClick={onClick}
      className="fixed inset-0 top-0 bg-gray-100 bg-opacity-50 overflow-y-auto h-full w-full" 
    >
      <div 
        ref={wrapper}
        className="relative top-20 mx-auto p-5 border w-full lg:w-2/4 shadow-lg rounded-md bg-white"
      >
        <div className='flex justify-end'>
          <button className="btn btn-square" onClick={() => onDismiss()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        { children }
      </div>
    </div>
  );
}