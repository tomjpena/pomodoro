import { useSelector } from "react-redux"

export const useAuthStatus = () => {
  const authState = useSelector((state) => state.auth)

  const loggedIn = Boolean(authState.user && Object.keys(authState.user).length > 0)

  return { loggedIn }
}