import { ReactNode, memo } from "react"
import { HeaderTitleText } from "./styles";

interface Props{
    children?: ReactNode;
}

const HeaderTitle = (props: Props) => {
    return(
        <HeaderTitleText>{props.children}</HeaderTitleText>
    )
}

export default memo(HeaderTitle);