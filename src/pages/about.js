import {
  Box, Container, Flex, Heading, Text, VStack,
} from '@chakra-ui/layout';
import {
  Badge, List, ListItem, ListIcon, Code,
} from '@chakra-ui/react';
import { getPlaiceholder } from 'plaiceholder';
import { FiCheckCircle, FiTerminal } from 'react-icons/fi';
import Image from 'next/image';
import DynamicFiIcon from '../components/icon';
import data from '../data/about.json';

export async function getStaticProps() {
  const { css, img } = await getPlaiceholder(`/${data.avatar}`);

  return {
    props: {
      css,
      img,
    },
  };
}

export default function About({ css, img }) {
  return (
    <Container
      maxW="container.lg"
      py={5}
      mb={{ base: '2rem !important', lg: 0 }}
    >
      <Heading fontSize={['3xl', '4xl']}>About</Heading>
      <Text fontSize={['base', 'lg']}>A brief description of me</Text>
      <Flex
        py={5}
        gap={2}
        direction={['column', 'row']}
        justify={['space-between', 'flex-start']}
        alignItems="flex-start"
      >
        <Box
          w={['full', '30%']}
          margin={['auto', '0']}
          boxSize={['150px', '250px']}
          borderRadius="lg"
          mb={[5, 0]}
          sx={{ position: 'relative', display: 'block', overflow: 'hidden' }}
        >
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
        <VStack
          w={['full', '65%']}
          px={[0, 5]}
          alignItems="flex-start"
          spacing={10}
        >
          <VStack spacing={2} alignItems="flex-start">
            <Heading as="h4" fontSize={['xl', '2xl']} color="primary">{data.name}</Heading>
            <Text as="blockquote">{data.description}</Text>
          </VStack>
          <VStack spacing={2} alignItems="flex-start">
            <Heading as="h4" fontSize={['lg', 'xl']} color="secondary">Educations</Heading>
            <VStack spacing={2} alignItems="flex-start" py={1}>
              {data.educations.map((edu) => (
                <Box>
                  <Badge
                    variant="solid"
                    textTransform="capitalize"
                    fontSize="xs"
                    colorScheme="gray"
                    fontWeight="normal"
                  >
                    {edu.degree}
                  </Badge>
                  <Text as="h5" fontWeight="semibold">{edu.institution}</Text>
                  <Text fontSize="sm">
                    {edu.start_year}
                    {' '}
                    -
                    {' '}
                    {edu.end_year}
                  </Text>
                </Box>
              ))}
            </VStack>
          </VStack>
          <VStack spacing={2} alignItems="flex-start">
            <Heading as="h4" fontSize={['lg', 'xl']} color="secondary">Work Experiences</Heading>
            <VStack spacing={4} py={2} alignItems="flex-start">
              {data.experiences.map((exp) => (
                <Flex>
                  <DynamicFiIcon name="FiBriefcase" style={{ fontSize: '1.5rem', flexShrink: 0 }} />
                  <Box ml={2}>
                    <Badge
                      variant="outline"
                      textTransform="capitalize"
                      fontSize="sm"
                      colorScheme="orange"
                      fontWeight="normal"
                    >
                      {exp.title}
                    </Badge>
                    <Text as="h5" fontWeight="semibold" py={1}>{exp.organization}</Text>
                    <Text fontSize="sm" color="gray.400">
                      {exp.from}
                      {' '}
                      -
                      {' '}
                      {exp.until}
                    </Text>
                    <Text fontSize="sm">
                      Task:
                      {' '}
                      {exp.task}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </VStack>
          <VStack spacing={2} alignItems="flex-start">
            <Heading as="h4" fontSize={['lg', 'xl']} color="secondary">Activities</Heading>
            <VStack spacing={2} alignItems="flex-start" py={2}>
              {data.activities.map((activity) => (
                <List>
                  <ListItem>
                    <ListIcon as={FiCheckCircle} color="primary" />
                    {activity}
                  </ListItem>
                </List>
              ))}
            </VStack>
          </VStack>
          <VStack spacing={2} alignItems="flex-start">
            <Heading as="h4" fontSize={['lg', 'xl']} color="secondary">Languages &amp; tools</Heading>
            <VStack spacing={2} alignItems="flex-start" py={2}>
              {data.technologies.map((tech) => (
                <List>
                  <ListItem>
                    <ListIcon as={FiTerminal} color="primary" />
                    <Code d="inline">{tech}</Code>
                  </ListItem>
                </List>
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
}
