import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
  IconButton,
  Icon,
  useToast,
  Alert,
  VStack,
  CloseIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  ...rest
}) => {
  const toast = useToast();

  return (
    <Alert
      maxWidth="95%"
      alignSelf="center"
      flexDirection="row"
      status={status ? status : "success"}
      variant={variant}
      {...rest}
      bg="#875304"
      marginTop={90}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                variant === "solid"
                  ? "lightText"
                  : variant !== "outline"
                  ? "darkText"
                  : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === "solid" ? "lightText" : "darkText",
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        {description && (
          <Text
            px="6"
            color={
              variant === "solid"
                ? "lightText"
                : variant !== "outline"
                ? "darkText"
                : null
            }
          >
            {description}
          </Text>
        )}
      </VStack>
    </Alert>
  );
};

export const Product = ({ item }) => {
  const toast = useToast();

  const getRandomValue = () => {
    const min = 50;
    const max = 90;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <Box alignItems="center">
      <Box
        maxW="100%"
        flex="1"
        rounded="lg"
        shadow="lg"
        marginBottom={10}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
      >
        <Box>
          <AspectRatio w="100%" ratio={21 / 7}>
            <Image
              source={{
                uri: item.image,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.name}
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="800"
              ml="-0.5"
              mt="-1"
              color="#875304"
            >
              R$ {getRandomValue()},00
            </Text>
          </Stack>
          <Button
            size="lg"
            bg="#ffc700"
            _text={{ color: "#875304", fontWeight: "bold" }}
            _pressed={{ background: "#f0f0f0" }}
            onPress={() =>
              toast.show({
                placement: "top",
                render: () => {
                  return (
                    <ToastAlert
                      id={"xyz"}
                      style={{ background: "#000000" }}
                      title={
                        <>
                          <Text fontWeight="900" display="block">
                            {item.name}
                          </Text>{" "}
                          foi adicionado ao carrinho
                        </>
                      }
                      variant="solid"
                      isClosable={true}
                    />
                  );
                },
              })
            }
            isLoading={false}
            isLoadingText="Adicionando"
          >
            Adicionar ao Carrinho
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
