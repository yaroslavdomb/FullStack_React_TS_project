import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BaseLayout from './components/BaseLayout/BaseLayout.tsx';
import MainPage from './components/MainPage/MainPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <BaseLayout>
        <MainPage />
      </BaseLayout>
    </>
  </StrictMode>
);
