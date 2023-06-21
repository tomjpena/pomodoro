import { Navigate, useRoutes } from "react-router-dom"
import { useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Component {...rest} /> : <Navigate to='/login' replace />
}
export default PrivateRoute