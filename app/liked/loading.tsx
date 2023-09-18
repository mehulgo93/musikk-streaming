"use client";

import { BounceLoader } from "react-spinners";

import Box from "@/components/box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color="#8b5cf6" size={40} />
    </Box>
  );
};

export default Loading;
