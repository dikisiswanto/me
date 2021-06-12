import {
  Container, Heading, Stack, Text,
} from '@chakra-ui/layout';
import theme from '../theme';

export default function Home() {
  return (
    <Container maxW="container.lg" py={3} flex="1">
      <Stack spacing={5} direction="column" justify="center" minH="calc(100vh - 8rem)">
        <Heading as="p" size="4xl" color="primary">Hi, 👋</Heading>
        <Text fontSize="2xl" fontWeight="semibold">
          I&apos;m
          {' '}
          <span style={{ color: theme.colors.secondary }}>Diki Siswanto</span>
          , a frontend web developer from Makassar, ID.
        </Text>
      </Stack>
    </Container>
  );
}
