import React from "react";
import Image from "next/image";

interface AvatarImageProps {
  avatar_url: string;
}

export const AvatarImage = ({ avatar_url }: AvatarImageProps) => {
  return (
    <Image
      src={avatar_url}
      width={300}
      height={300}
      alt="avatar"
      priority
      style={{ borderRadius: "50%", border: "solid 1px #ac47cc" }}
    />
  );
};
