import React from "react";

export interface NotificationProps {
  id: number | string;
  status?: "info" | "warning" | "success" | "error";
  variant: "solid" | "subtle" | "outline";
  title: React.ReactElement;
  description?: string;
  isClosable?: boolean;
  [key: string]: any;
}
