import React from 'react';
import Contato_info from "./Contato_info";
import Comp_Whatsapp from "./Comp_Whatsapp";
import "../Components/Container.css";


function Container(){
    return(
        <div className="container1">
            <Contato_info/>
            <Comp_Whatsapp/>
        </div>
    )
}
export default Container;