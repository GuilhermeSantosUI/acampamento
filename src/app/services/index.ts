import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const remoteApi = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: remoteApi,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 30, // 30 seconds
    },
  },
});
