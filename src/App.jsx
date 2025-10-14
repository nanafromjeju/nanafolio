import { useState } from 'react';
import Layout from './components/layout/layout';
import Main from './pages/Main';
import './styles/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './components/pages/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
