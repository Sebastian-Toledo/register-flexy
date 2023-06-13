import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactComponent as Menu } from "./menu.svg";

const MenuMovile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex margin="24px 24px 0px 24px">
        <Menu onClick={onOpen} />
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu basico</DrawerHeader>
          <DrawerBody>
            <p>contenido...</p>
            <p>contenido...</p>
            <p>contenido...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuMovile;
