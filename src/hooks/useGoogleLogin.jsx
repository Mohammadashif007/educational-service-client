import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";


const useGoogleLogin = () => {

    const {loginWithGoogle} = useContext(AuthContext);
    const googleLogin  = () => {
        loginWithGoogle()
        .then(res => {
            const result = res.user;
            console.log(result);
        })
    }

    return googleLogin;
};

export default useGoogleLogin;