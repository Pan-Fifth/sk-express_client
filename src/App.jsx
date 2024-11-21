import { useState ,useEffect} from 'react'
import AppRouters from './routers/AppRouters'
import { MantineProvider } from '@mantine/core'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear(); // Clear local storage on page unload
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <>
    <MantineProvider>
     <AppRouters/>
    </MantineProvider>
    </>
  )
}

export default App
