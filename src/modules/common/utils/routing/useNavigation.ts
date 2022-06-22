import {useNavigate} from "react-router-dom";

function useNavigation() {
  const navigate = useNavigate();

  function navigateTo(path: string) {
    navigate(path)
  }

  return {
    navigateTo: navigateTo
  }
}

export default useNavigation;