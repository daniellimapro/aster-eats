import React from "react";
import { Box, AspectRatio, Stack, Skeleton, Button, Text } from "native-base";
import { colors } from "@/styles/colors";

export const ProductSkeleton = () => {
  return (
    <Box alignItems="center" testID="product-skeleton-container">
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
            <Skeleton
              height="130px"
              startColor="warmGray.200"
              endColor="warmGray.300"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Skeleton.Text lines={2} />
            <Skeleton.Text lines={1} />
          </Stack>
          <Button
            size="lg"
            bg={colors.yellow}
            _text={{ color: colors.brown, fontWeight: "bold" }}
            _pressed={{ background: colors.lightGray }}
            isLoading={false}
            isLoadingText="Adicionando"
          >
            <Skeleton.Text lines={1} />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
