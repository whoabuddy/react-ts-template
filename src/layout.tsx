import {
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaDiscord, FaInfo } from "react-icons/fa";
import smLogo from "/logos/aibtcdev-logo-sm-250px.png";

export function Header() {
  return (
    <Stack
      align="center"
      justify="flex-end"
      direction={["column", "row"]}
      p={4}
    >
      <Text>Unused for now</Text>
    </Stack>
  );
}

export function Content() {
  return (
    <Stack alignItems="center" justifyContent="center" flexGrow={1}>
      <Image src={smLogo} alt="aiBTC Neural Network" w={250} />
      <Heading size="2xl" color="orange.400">
        Bitcoin x AI
      </Heading>
      <Text fontSize="x-large" textAlign="center" p={4}>
        Welcome to the working group!
      </Text>
      <Stack direction={["column", null, "row"]}>
        <Button
          size="lg"
          _hover={{ bg: "orange.400", color: "white" }}
          as="a"
          href="https://evt.to/emamdeggw"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP Thursdays
        </Button>
        <Button
          size="lg"
          _hover={{ bg: "orange.400", color: "white" }}
          as="a"
          href="https://github.com/orgs/stacks-network/discussions/534"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meeting Minutes
        </Button>
        <Button
          size="lg"
          _hover={{ bg: "orange.400", color: "white" }}
          as="a"
          href="https://github.com/aibtcdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer GitHub
        </Button>
      </Stack>
    </Stack>
  );
}

export function Footer() {
  return (
    <Stack align="center" justify="space-between" direction="row" p={4}>
      <Text>&copy; 2024</Text>
      <ButtonGroup>
        <IconButton
          isRound
          _hover={{ bg: "orange.400", color: "white" }}
          aria-label="Working Group Info"
          title="Working Group Info"
          icon={<FaInfo />}
          size={["xs", null, "md"]}
          as="a"
          href="https://github.com/orgs/stacks-network/discussions/531"
          target="_blank"
          rel="noopener noreferrer"
        />
        <IconButton
          isRound
          _hover={{ bg: "orange.400", color: "white" }}
          aria-label="Discord"
          title="Discord"
          icon={<FaDiscord />}
          size={["xs", null, "md"]}
          as="a"
          href="https://discord.gg/5DJaBrf"
          target="_blank"
          rel="noopener noreferrer"
        />
      </ButtonGroup>
    </Stack>
  );
}
