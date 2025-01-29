import { MainContext } from '@/app/context';
import { Router } from '@/router';

export function App() {
  return (
    <MainContext>
      <Router />
    </MainContext>
  );
}
