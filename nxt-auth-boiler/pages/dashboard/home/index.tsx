import React, { FC, use } from "react";
import { signOut } from "next-auth/react";
import router from "next/router";
import { useSession } from "next-auth/react";
interface IProps { };

const DashBoard: FC<IProps> = (props) => {
    let { data, status }: any = useSession();
    console.log(data, status);
    const handleSignout = async () => {
        const data = await signOut({ redirect: false });
        router.push({ pathname: '/' });
    }
    return <div>

        <button onClick={handleSignout}>Signout</button>
    </div>
};

export default DashBoard;