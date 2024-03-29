import Installer from "./Installer";
import { createRoot } from 'react-dom/client';
import "./assets/global.css"

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(<Installer />)