import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled.jsx';
import Header from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader.jsx';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
export default SharedLayout;