import { MainContext } from '@/app/context';
import { Router } from '@/router';
import { Toaster } from '@/views/components/ui/sonner';

export function App() {
  return (
    <MainContext>
      <Router />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            padding: '16px',
            gap: '16px',
          },
          className: 'class',
        }}
        richColors
      />
    </MainContext>
  );
}
