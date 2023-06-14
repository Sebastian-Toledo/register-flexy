import { Flex, Hide } from "@chakra-ui/react";
import FormRegister from "../../Molecules/FormRegister";
import ImagenBG from "../../Atoms/ImagenBG";
import NavBar from "../../Molecules/NavBar";

const HomeRegister = () => {
  return (
    <Flex
      w={{ base: "375px", lg: "1643px" }}
      h={{ base: "812px", lg: "950px" }}
    >
      <Flex display="column" w={{ base: "375px", lg: "45%" }}>
        <NavBar />
        <Flex marginTop={{ base: "62px", lg: "48px" }} direction="column">
          <FormRegister />
        </Flex>
      </Flex>
      <Hide breakpoint="(max-width: 894px)">
        <Flex w="55%">
          <ImagenBG />
        </Flex>
      </Hide>
    </Flex>
  );
};

export default HomeRegister;
