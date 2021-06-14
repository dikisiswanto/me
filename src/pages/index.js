import {
  Container, Heading, Stack, Text,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import theme from '../theme';
import data from '../data/socials.json';
import DynamicFiIcon from '../components/icon';

export default function Home() {
  return (
    <Container maxW="container.lg" py={3} flex="1">
      <Stack spacing={5} direction="column" justify="center" minH="calc(100vh - 8rem)">
        <Heading as="p" size="4xl" color="primary">
          Hi,
          <span className="wave">👋</span>
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold">
          I&apos;m
          {' '}
          <span style={{ color: theme.colors.secondary }}>Diki Siswanto</span>
          , a frontend web developer from Makassar, ID.
        </Text>
        <Stack direction="row" spacing={{ base: 3, lg: 4 }}>
          {data.socials.map((social) => (
            <Button as="a" href={social.link} key={social.id} target="_blank"><DynamicFiIcon name={social.icon} /></Button>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
