"use client";

import { use } from "react";
import { getData } from "@/app/api/images";
import cn from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ImageData = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const HomeContainer = () => {
  const t = useTranslations("common");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-4 gap-4 p-4 max-h-[100px] overflow-y-auto"></div>
    </div>
  );
};

export default HomeContainer;
