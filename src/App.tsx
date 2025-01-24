import { Router } from './router';
import {MainContext} from "./app/context/main-context.tsx";

export function App() {
    return (
        <MainContext>
            <Router />
        </MainContext>
    );
}
