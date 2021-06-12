import { Button } from "@chakra-ui/button";
import { Box, Container, Stack } from "@chakra-ui/layout";
import { navs } from '../data/navs.json';
import { useRouter } from "next/router";
import theme from "../theme";
import DynamicFiIcon from "./icon";

export default function Nav() {

  const router = useRouter();

  return (
    <Box py={2} borderBottomWidth="1px" borderTopWidth="1px" borderColor="gray.600" w="full" position={{base: "fixed", lg: "sticky"}} top={{base: "initial", lg: 0}} bottom={{base: 0, lg: "initial"}} bg="gray.800" as="nav">
      <Container maxW="container.lg">
        <Stack spacing={3} direction="row">
          {navs.map((nav) => (
            <Button as="a" key={nav.id} href={nav.path} bg="transparent" isActive={router.pathname === nav.path} _active={{bg: 'transparent', color: theme.colors.primary, fontWeight: 'bold'}} fontSize={{base: "sm", lg: "lg"}} leftIcon={<DynamicFiIcon name={nav.icon}/>}>{nav.name}</Button>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}