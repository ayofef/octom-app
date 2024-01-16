import { Sidebar } from "./components/Sidebar"; 

/**
 * It's a single page app, I'll suggest we use this as the parent component
 */
export const App = () => {
  return (
    <main className="bg-app"> 
      <Sidebar />
    </main>
  );
};
