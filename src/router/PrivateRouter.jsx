import { useEffect , useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet , useNavigate } from "react-router-dom";


const PrivateRouter = () => {
    const {user} = useContext(UserContext);
    const isAuth = user ? true : false;

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth]);

    if (!isAuth) return;

    return (
        <Outlet />
    );
}

export default PrivateRouter