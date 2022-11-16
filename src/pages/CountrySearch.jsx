import { useGetByRegion } from 'hooks/useGetByRegion';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const { countries, error, isLoading, onHandleSubmit } = useGetByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {error && <Heading textAlign="center"> Something went wrong</Heading>}
        {isLoading && <Loader />}
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
