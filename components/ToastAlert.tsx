import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  useToast,
  VStack,
} from "native-base";
import { Text } from "native-base";
import React from "react";

interface Notification {
  id: number | string;
  status?: string;
  variant: string;
  title: React.ReactElement;
  description?: string;
  isClosable?: boolean;
  [key: string]: any;
}

export const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  ...rest
}: Notification) => {
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
