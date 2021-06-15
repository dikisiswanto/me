import { Button } from '@chakra-ui/button';
import { Box, Container, Stack } from '@chakra-ui/layout';
import { useToken } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import data from '../data/navs.json';
import theme from '../theme';
import DynamicFiIcon from './icon';

export default function NavBar() {
  const router = useRouter();

  const [gray900] = useToken('colors', ['gray.900']);
  const bgColor = `${gray900}E6`;
  const lighterBgColor = `${gray900}99`;

  return (
    <Box
      py={2}
      borderBottomWidth="1px"
      borderTopWidth="1px"
      borderColor="gray.600"
      w="full"
      pos={['fixed', 'sticky']}
      top={['initial', 0]}
      bottom={[0, 'initial']}
      bg={bgColor}
      zIndex="99"
      sx={{
        '@supports (backdrop-filter: blur(12px))': {
          backdropFilter: 'blur(12px)',
          bgColor: lighterBgColor,
        },
        '@supports (-webkit-backdrop-filter: blur(12px))': {
          WebkitBackdropFilter: 'blur(12px)',
          bgColor: lighterBgColor,
        },
      }}
      as="nav"
    >
      <Container maxW="container.lg">
        <Stack
          spacing={3}
          direction="row"
          justifyContent={['space-between', 'flex-start']}
        >
          {data.navs.map((nav) => (
            <Link href={nav.path} key={nav.id} passHref>
              <Button
                as="a"
                bg="transparent"
                isActive={router.asPath === nav.path}
                _active={{ color: theme.colors.primary, fontWeight: 'bold' }}
                fontSize={['base', 'lg']}
                leftIcon={<DynamicFiIcon name={nav.icon} />}
              >
                {nav.name}
              </Button>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
