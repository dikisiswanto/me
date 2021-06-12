import { Button } from "@chakra-ui/button";
import { Heading, Stack, Text } from "@chakra-ui/layout";

export default function custom404() {
  return (
    <Stack maxW="container.lg" flex="1" textAlign="center" alignItems="center" justifyContent="center" spacing={5}>
      <Heading as="h3" fontSize="3xl">Oopsss...</Heading>
      <Text fontSize="lg">You went to wrong path. Nothing found here!</Text>
      <Button color="primary" as="a" href="/">Back to home</Button>
    </Stack>
  )
}