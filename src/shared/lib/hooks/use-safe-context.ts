import { Context, useContext } from 'react';

export const useSafeContext = <T>(context: Context<T>): T => {
 const ctx = useContext(context);
 if (!ctx) throw new Error(`You are trying to use "${context.displayName || 'Unknown'}" outside of the provider`);

 return ctx;
};
