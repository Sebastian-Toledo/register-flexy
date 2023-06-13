import { Divider, Flex, Image, Show } from "@chakra-ui/react";
import Marca from "./Marca-Flexy.svg";
import MenuMovile from "../../Atoms/MenuMovile";
const NavBar = () => {
  return (
    <Flex display="column" h={{ lg: "96px" }}>
      <Flex
        margin={{ lg: "33px 0px 33.16px 26px" }}
        h={{ base: "72px" }}
        justifyContent={{ base: "space-between" }}
      >
        <Image
          src={Marca}
          h="29.84px"
          w="103.39px"
          margin={{
            base: "21px 0px 21.16px 32px",
            lg: "33px 0px 33.16px 26px",
          }}
        />
        <Show breakpoint="(max-width: 812px)">
          <MenuMovile />
        </Show>
      </Flex>
      <Divider />
    </Flex>
  );
};

export default NavBar;
