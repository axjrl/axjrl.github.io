import React, {useState} from "react";
import MainMint from "./MainMint";

const Jumbo = () => {
    const [accounts, setAccounts] = useState([]);

    return (
        <div className="jumbo">
            <MainMint accounts = {accounts} setAccounts = { setAccounts }/>
        </div>
    )
}
export default Jumbo;