import { ReactNode, memo } from "react"
import { Wrapper, WrapperHeader } from "./styles"

interface Props{
    border: boolean
    children?: ReactNode;
}

const Header = (props: Props) => {
    return(
        <Wrapper edges={['top']}>
            <WrapperHeader {...props}>{props.children}</WrapperHeader>
        </Wrapper>
    )
}

export default memo(Header);