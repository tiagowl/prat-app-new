import { ReactNode, memo } from "react";
import { ButtonWrapper, ButtonWrapperText } from "./styles";

interface Props{
    outline?: boolean;
    height?: number;
    onPress?: ()=>void;
    children?: ReactNode;
}

const Button = ({height = 48, outline = false, children, onPress}: Props) => {
    return(
        <ButtonWrapper
            onPress={onPress}
            outline={outline}
            activeOpacity={0.9}
            height={height}
    >
            <ButtonWrapperText outline={outline} numberOfLines={1}>
                {children}
            </ButtonWrapperText>
        </ButtonWrapper>
    );
}

export default memo(Button);