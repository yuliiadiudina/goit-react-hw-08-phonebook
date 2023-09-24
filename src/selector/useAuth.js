import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userName = useSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    userName,
  };
};