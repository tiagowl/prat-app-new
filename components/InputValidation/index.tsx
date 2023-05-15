import { ReactNode, memo } from "react";
import { InputValidation } from "./styles"

interface Props{
    children: ReactNode;
}

const InputInvalidation = (props: Props) => {
    return(
        <InputValidation>
            {props.children}
        </InputValidation>
    ) 
        
                
}

export default memo(InputInvalidation);