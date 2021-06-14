import { Button } from '@chakra-ui/button';
import { Box, Container, Stack } from '@chakra-ui/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import data from '../data/navs.json';
import theme from '../theme';
import DynamicFiIcon from './icon';

export default function NavBar() {
  const router = useRouter();

  return (
    <Box py={2} borderBottomWidth="1px" borderTopWidth="1px" borderColor="gray.600" w="full" position={{ base: 'fixed', lg: 'sticky' }} top={{ base: 'initial', lg: 0 }} bottom={{ base: 0, lg: 'initial' }} bg="gray.800" zIndex="999" marginTop={{ base: 5, lg: 0 }} as="nav">
      <Container maxW="container.lg">
        <Stack spacing={3} direction="row" justifyContent={{ base: 'space-between', lg: 'flex-start' }}>
          {data.navs.map((nav) => (
            <Link href={nav.path} key={nav.id} passHref>
              <Button as="a" bg="transparent" isActive={router.asPath === nav.path} _active={{ color: theme.colors.primary, fontWeight: 'bold' }} fontSize={{ base: 'sm', lg: 'lg' }} leftIcon={<DynamicFiIcon name={nav.icon} />}>{nav.name}</Button>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
