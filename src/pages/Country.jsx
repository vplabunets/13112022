import { useLocation, Link, Navigate } from 'react-router-dom';
import { Section, Container, CountryInfo, Loader } from 'components';
import { useGetCountry } from 'hooks/useGetCountry';

export const Country = () => {
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  const { country, error, isLoading } = useGetCountry();

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#F2F2F2',
            letterSpacing: '0.06em',
            borderColor: 'grey',
          }}
        >
          <Link to={goBackLink}>Go back</Link>
        </div>

        {isLoading && <Loader />}
        {error && <Navigate to={'/'} replace />}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};
