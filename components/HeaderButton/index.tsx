import { ReactNode, memo } from "react"
import { HeaderButtonWrapper } from "./styles"

interface Props{
    children: ReactNode;
    onPress?: ()=>void;
}

const HeaderButton = (props: Props) => {
    return(
        <HeaderButtonWrapper {...props} >
            {props.children}
        </HeaderButtonWrapper>
    )
}

export default memo(HeaderButton);