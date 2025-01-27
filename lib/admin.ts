import { auth } from "@clerk/nextjs";

const adminIds = ["user_2eLqvMrevggtp9eiMGbv6KaZEWa"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
