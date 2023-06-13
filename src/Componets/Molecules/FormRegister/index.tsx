import {
  Button,
  Flex,
  Heading,
  Icon,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Text,
  Link,
  Show,
  Hide,
} from "@chakra-ui/react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { ReactComponent as MyIcon } from "./icono.svg";
import { useState, useRef } from "react";
import { Form, useFormik } from "formik";
import * as yup from "yup";

const FormRegister = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      image: undefined,
      fullName: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: yup.object({
      image: yup
        .mixed()
        .test("fileFormat", "Invalid file format", (value: any) => {
          return value.name;
        })
        .required("Campo requerido"),
      fullName: yup.string().required("Campo requerido"),
      email: yup.string().required("Campo requerido"),
      phone: yup.string().required("Campo requerido"),
      password: yup.string().required("Campo requerido"),
    }),
    onSubmit: (values) => {
      console.log(values);
      //alert(JSON.stringify(values, null, 2));
    },
  });

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    if (!image) {
      return;
    }
    formik.setFieldValue("image", image);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        direction="column"
        justifyContent={{ lg: "center" }}
        paddingLeft={{ base: "", lg: "123px" }}
        paddingRight={{ base: "", lg: "218px" }}
      >
        <Flex direction="column" gap="8px" alignSelf={{ base: "center" }}>
          <Heading color="#000929" size="xl" alignSelf={{ base: "center" }}>
            ¡Bienvenido!
          </Heading>
          <Text textColor="#6C727F" fontSize="md">
            Convertite ahora en un agente Flexy.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap="24px"
          ml={{ base: "24px" }}
          w={{ base: "327px", lg: "352px" }}
        >
          <Flex direction="column">
            <Flex
              gap="9px"
              mt={{ base: "31px", lg: "24px" }}
              onClick={() => fileInput.current?.click()}
            >
              <Input
                id="image"
                name="image"
                w={{ base: "327px", lg: "352px" }}
                className="input-file"
                type="file"
                placeholder="Subí tu foto de perfil"
                backgroundColor="#FFFFFF"
                border="0"
                accept="image/*"
                hidden
                onChange={handleChangeImage}
                ref={fileInput}
                isInvalid
              />
              <MyIcon width="47px" height="47px" />
              <Text alignSelf="center" color="#000929" as="abbr">
                {formik.values.image
                  ? (formik.values.image as File).name
                  : "Subí tu foto de perfil"}
              </Text>
            </Flex>
            {formik.errors.image && <Text color="red">Imagne requerida</Text>}
          </Flex>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Nombre y Apellido"
            type="text"
            w={{ base: "327px", lg: "352px" }}
            h="48px"
            backgroundColor="#F7F7FD"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            isInvalid={!!formik.errors.fullName && !formik.dirty.valueOf()}
          />
          <Input
            id="phone"
            name="phone"
            placeholder="+54 01 0200 000"
            type="number"
            w={{ base: "327px", lg: "352px" }}
            h="48px"
            backgroundColor="#F7F7FD"
            onChange={formik.handleChange}
            value={formik.values.phone}
            isInvalid={!!formik.errors.phone}
          />
          <Input
            id="email"
            name="email"
            border="0"
            w={{ base: "327px", lg: "352px" }}
            h="48px"
            placeholder="hola@tuemail.com"
            type="email"
            backgroundColor="#F7F7FD"
            onChange={formik.handleChange}
            value={formik.values.email}
            isInvalid={!!formik.errors.email}
          />
          <Flex direction="column">
            <InputGroup>
              <Input
                id="password"
                name="password"
                w={{ base: "327px", lg: "352px" }}
                h="48px"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresá tu contraseña"
                backgroundColor="#F7F7FD"
                onChange={formik.handleChange}
                value={formik.values.password}
                isInvalid={!!formik.errors.password}
              />
              <InputRightElement>
                {showPassword ? (
                  <HiOutlineEyeSlash
                    opacity="0.4"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <HiOutlineEye
                    opacity="0.4"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
        <Show breakpoint="(max-width: 375px)">
          <Link
            textAlign="center"
            fontSize="sm"
            href="/Recuperar-contraseña"
            color="#7065F0"
            mt="14px"
            mb="27px"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Show>
        <Hide breakpoint="(max-width: 375px)">
          <Text
            textAlign="center"
            color="#6C727F"
            fontSize="sm"
            mt="11px"
            mb="25px"
          >
            Debe tener al menos 8 caracteres.
          </Text>
        </Hide>

        <Button
          type="submit"
          alignSelf="center"
          backgroundColor="#7065F0"
          color="#FFFFFF"
          p={{ base: "12px 24px 12px 24px" }}
          w={{ base: "327px", lg: "352px" }}
          h="48px"
        >
          Registrate
        </Button>
        <Flex alignSelf="center" gap="2" mt={{ base: "20px", lg: "32px" }}>
          <Text color="#6C727F" fontSize="sm">
            ¿Ya tenés una cuenta?{" "}
          </Text>
          <Link fontSize="sm" as="b" color="#000929" href="/Iniciar-sesion">
            Iniciá sesión
          </Link>
        </Flex>
      </Flex>
    </form>
  );
};

export default FormRegister;
