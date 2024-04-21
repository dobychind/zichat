import { useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState(false);
  return { user, setUser };
}
