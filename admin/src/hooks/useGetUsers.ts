import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../apis/users";

export const useGetUsers = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers,
  });

  return { users: data, isPending, isError };
};
