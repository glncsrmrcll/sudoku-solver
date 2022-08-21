import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navbar';
import NotFound from './components/notFound';
import SudokuSolver from './components/sudokusolver';

// !!! development only !!!
require('./mocks/browser');

function App(): JSX.Element {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="w-4/5 m-auto py-5 flex flex-col justify-center items-center">
          <Routes>
            <Route
              path="/solve"
              element={<SudokuSolver t={t} i18n={i18n} tReady={false} />}
            />
            <Route path="/" element={Home()} />
            <Route path="*" element={NotFound()} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
