
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ isSeller,seller,children }) => {
 
    if (isSeller === false && !seller) {
    return <Navigate to="/shop-login" replace />;
  }
 return children;
};
export default SellerProtectedRoute;

