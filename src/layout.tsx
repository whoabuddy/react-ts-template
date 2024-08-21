import {
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInfo } from "react-icons/fa";
import smLogo from "/logos/orange-eye-logo-1024px.png";

export function Content() {
  return (
    <Stack
      alignItems="center"
      justifyContent={["flex-start", null, "center"]}
      flexGrow={1}
    >
      <Image src={smLogo} alt="aiBTC Neural Network" w={[200, 250]} py={4} />
      <Heading size="4xl" color="orange.400">
        INSERT_TITLE
      </Heading>
      <Text fontSize="2xl" textAlign="center" p={4}>
        Something new is brewing.
      </Text>
    </Stack>
  );
}

export function Footer() {
  return (
    <Stack align="center" justify="space-between" direction="row" p={4}>
      <Text fontSize="2xl">&copy; 2024</Text>
      <ButtonGroup>
        <IconButton
          isRound
          _hover={{ bg: "orange.400", color: "white" }}
          aria-label="Working Group Info"
          title="Working Group Info"
          icon={<FaInfo />}
          size={["sm", null, "md"]}
          as="a"
          href="https://github.com/orgs/stacks-network/discussions/531"
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton
          isRound
          _hover={{ bg: "orange.400", color: "white" }}
          aria-label="GitHub Resources"
          title="GitHub Resources"
          icon={<FaGithub />}
          size={["sm", null, "md"]}
          as="a"
          href="https://github.com/aibtcdev"
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton
          isRound
          _hover={{ bg: "orange.400", color: "white" }}
          aria-label="Discord"
          title="Discord"
          icon={<FaDiscord />}
          size={["sm", null, "md"]}
          as="a"
          href="https://discord.gg/5DJaBrf"
          target="_blank"
          rel="noopener noreferrer"
        />
      </ButtonGroup>
    </Stack>
  );
}
