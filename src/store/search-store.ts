import { createStore } from 'zustand/vanilla'

export type SearchState = {
  recentSearches: string[];
  currentSearch?: string;
}

export type SearchActions = {
  addRecentSearch: (term: string) => void;
  updateCurrentSearch: (term: string) => void;
  clearCurrentSearch: () => void;
}

export type SearchStore = SearchState & SearchActions

export const initSearchStore = (): SearchState => {
  return { 
    recentSearches:[],
  }
}

export const initialState: SearchState = {
  recentSearches: [],
}

export const createSearchStore = (
  initState: SearchState = initialState,
) => {
  return createStore<SearchStore>()((set) => ({
    ...initState,
    addRecentSearch: (term) => set((state) => {
      // Don't add duplicates
      if (state.recentSearches.includes(term)) {
        return { recentSearches: state.recentSearches };
      }
      
      const recentSearches = [...state.recentSearches];
      recentSearches.unshift(term);

      // We'll arbitrarily keep 5 recent searches for now, but this may need to change / be configurable
      if (recentSearches.length > 5) {
        recentSearches.pop();
      }

      return { recentSearches };
    }),
    updateCurrentSearch: (term) => set(() => ({ currentSearch: term })),
    clearCurrentSearch: () => set(() => ({ currentSearch: undefined })),
  }))
}