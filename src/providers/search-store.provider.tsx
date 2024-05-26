'use client'

import { useStore } from 'zustand';
import { type ReactNode, createContext, useRef, useContext } from 'react'
import { type SearchStore, createSearchStore, initSearchStore } from '@/store/search-store';

export type SearchStoreApi = ReturnType<typeof createSearchStore>;

export const SearchStoreContext = createContext<SearchStoreApi | undefined>(
  undefined,
)

export interface SearchStoreProviderProps {
  children: ReactNode;
}

export const SearchStoreProvider = ({ children }: SearchStoreProviderProps) => {
  const storeRef = useRef<SearchStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createSearchStore();
  }

  return (
    <SearchStoreContext.Provider value={storeRef.current}>
      {children}
    </SearchStoreContext.Provider>
  );
}

export const useSearchStore = <T,>(selector: (store: SearchStore) => T,): T => {
  const counterStoreContext = useContext(SearchStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useSearchStore must be used within SearchStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
}