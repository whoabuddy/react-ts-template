import {
  ButtonGroup,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInfo } from "react-icons/fa";
import smLogo from "/logos/orange-eye-only-logo-500px-v2.png";

export function Content() {
  return (
    <Stack alignItems="center" justifyContent="center" flexGrow={1}>
      <Image src={smLogo} alt="Orange Eye Logo" w="100%" maxW="500px" py={4} />
      <Heading size="4xl" color="orange.400">
        INSERT_TITLE
      </Heading>
    </Stack>
  );
}

export function Footer() {
  return (
    <Stack
      align="center"
      justify={["flex-start", null, "space-between"]}
      direction={["column-reverse", null, "row"]}
      p={4}
    >
      <Text fontSize="2xl">&copy; 2024</Text>
      <ButtonGroup>
        <IconButton
          isRound
          _hover={{ bg: "orange.400", color: "white" }}
          aria-label="Info"
          title="Info"
          icon={<FaInfo />}
          size={["sm", null, "md"]}
          as="a"
          href="#"
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
          href="https://github.com/"
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
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </ButtonGroup>
    </Stack>
  );
}
