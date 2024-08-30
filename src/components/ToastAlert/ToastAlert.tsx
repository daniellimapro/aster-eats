import { NotificationProps } from "@/interfaces/Notification";
import { colors } from "@/styles/colors";
import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  useToast,
  VStack,
  Text,
} from "native-base";

export const ToastAlert = ({
  id,
  status = "success",
  variant,
  title,
  description,
  isClosable = false,
  ...rest
}: NotificationProps) => {
  const toast = useToast();

  return (
    <Alert
      maxWidth="95%"
      alignSelf="center"
      flexDirection="row"
      status={status}
      variant={variant}
      {...rest}
      bg={colors.brown}
      top={90}
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
                  : undefined
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable && (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === "solid" ? "lightText" : "darkText",
              }}
              onPress={() => toast.close(id)}
            />
          )}
        </HStack>
        {description && (
          <Text
            px="6"
            color={
              variant === "solid"
                ? "lightText"
                : variant !== "outline"
                ? "darkText"
                : undefined
            }
          >
            {description}
          </Text>
        )}
      </VStack>
    </Alert>
  );
};
