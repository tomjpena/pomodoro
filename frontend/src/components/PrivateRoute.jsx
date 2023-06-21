import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Route {...rest} element={<Component />} /> : <Navigate to='/login' replace />
}
export default PrivateRoute