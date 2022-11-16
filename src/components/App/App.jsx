import { Routes, Route, Navigate } from 'react-router-dom';

import { CountrySearch, Home, Country } from 'pages';

import { Header } from 'components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<CountrySearch />} />
        <Route path="/country/:id" element={<Country />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

// - `'/'` - компонент `<Home>`, домашня сторінка зі переліком Європейських країн.
// - `'/country'` - компонент `<CountrySearch>`, сторінка пошуку країн по регіону.
// - `'/country/:countryId'` - компонент `<Country>`, сторінка з детальною
//   інформацією про країну
