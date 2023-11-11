import { createContext } from 'react';
import { useSafeContext } from '../use-safe-context';

export const HistoryContext = createContext<History | null>(null);

HistoryContext.displayName = 'HistoryContext';

export const useHistoryContext = () => useSafeContext(HistoryContext);
