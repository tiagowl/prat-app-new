import { memo, useState } from "react";
import { InputComponent } from "./styles";

interface Props{
    multiline?: boolean;
    autoHeight?: boolean;
    placeholder: string;
    placeholderTextColor: string;
    invalid?: boolean;
    autoCorrect?: boolean;
    secureTextEntry?: boolean;
    onChangeText?: (text: string)=>void;
    value?: string;
}

const Input = (props: Props) => {

    const { multiline = false } = props
    const { autoHeight = true } = props
    const [height, setHeight] = useState(48)


    const onContentSizeChange = event => {
        if (Boolean(multiline) && Boolean(autoHeight)) {
          setHeight(event.nativeEvent.contentSize.height + 20)
        }
    }

    return(
        <InputComponent
            {...props}
            height={height}
            onContentSizeChange={onContentSizeChange}
        />
    );
}

export default memo(Input);