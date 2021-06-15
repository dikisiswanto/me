import {
  Container, Grid, Heading, Text, Box, Stack, HStack, Tag, Tooltip, VStack,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import DynamicFiIcon from '../components/icon';
import projects from '../data/projects.json';

function getAllProjectImages() {
  return projects.projects.map((p) => ({ ...p, image: `/projects/${p.image}` }));
}

export async function getStaticProps() {
  const imagePaths = getAllProjectImages();
  const images = await Promise.all(
    imagePaths.map(async (src) => {
      const { ...meta } = src;
      const { css, img } = await getPlaiceholder(src.image, { size: 4 });
      return {
        ...img,
        alt: meta.title,
        title: meta.title,
        css,
        data: {
          ...meta,
        },
      };
    }),
  ).then((values) => values);

  return {
    props: {
      images,
    },
  };
}

export default function Portfolio({ images }) {
  return (
    <Container
      maxW="container.lg"
      py={5}
    >
      <Heading fontSize={['3xl', '4xl']}>Portfolio</Heading>
      <Text fontSize={['base', 'lg']}>Project or something I&apos;ve made</Text>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={{ base: 4, lg: 5 }}
        py={8}
      >
        {images.map(({ css, data, ...img }) => (
          <Stack
            spacing={2}
            boxShadow="xl"
            bg="gray.700"
            overflow="hidden"
            borderRadius="lg"
            key={data.id}
          >
            <Box sx={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transform: 'scale(1.5)',
                  filter: 'blur(10px)',
                  ...css,
                }}
              />

              <Image {...img} />
            </Box>
            <Stack spacing={1} p={4}>
              <Text fontSize="lg" fontWeight="bold" color="secondary" fontFamily="heading">{data.title}</Text>
              <Text>{data.description}</Text>
              <HStack spacing={2} py={2} wrap="wrap">
                {data.tags.map((tag) => (
                  <Tag my={2} key={tag}>{tag}</Tag>
                ))}
              </HStack>
              <HStack spacing={2}>
                {data.repo && (
                  <Tooltip label="Repo">
                    <Button as="a" target="_blank" href={data.repo} bg="black" borderRadius="full"><DynamicFiIcon name="FiGithub" /></Button>
                  </Tooltip>
                )}
                {data.link && (
                  <Tooltip label="Project Demo">
                    <Button as="a" target="_blank" href={data.link} bg="blue.600" borderRadius="full"><DynamicFiIcon name="FiGlobe" /></Button>
                  </Tooltip>
                )}
              </HStack>
            </Stack>
          </Stack>
        ))}
      </Grid>
      <VStack mb={['4rem !important', 0]}>
        <Button
          as="a"
          target="_blank"
          colorScheme="green"
          mx="auto"
          href="https://github.com/dikisiswanto"
        >
          See more on my GitHub
        </Button>
      </VStack>
    </Container>
  );
}
