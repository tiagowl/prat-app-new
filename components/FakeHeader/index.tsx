import React from "react";
import Header from "../Header";
import { HeaderButtonText, HeaderCenter, HeaderSide } from "./styles";
import HeaderTitle from "../HeaderTitle";
import colors from "../../config/colors";
import HeaderButton from "../HeaderButton";
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

interface Props{
    styles?: Object
    title: string;
    actionTitle: string;
    onBackPress?: ()=>void;
    onActionPress?: ()=>void;
    hide?: {back: ()=>void};
    border?: boolean;
}

const FakeHeader = (props: Props) => {

    const navigation = useNavigation()

    const handleBack = () => {
        if (Boolean(props.onBackPress)) {
          props.onBackPress()
        } else {
          if (navigation.canGoBack()) {
            navigation.goBack()
          } //else {
            //navigation.navigate('Home')
          //}
        }
    }

    const renderHeaderRight = () => {
        if (Boolean(props.onActionPress)) {
          return (
            <HeaderButton onPress={props.onActionPress}>
              <HeaderButtonText numberOfLines={1}>
                {props.actionTitle || (
                  <Feather name={'menu'} color={colors.foreground} size={26} />
                )}
              </HeaderButtonText>
            </HeaderButton>
          )
        }
      }

    const renderHeaderLeft = () => {
        if (!Boolean(props.hide)) {
          return (
            <HeaderButton onPress={handleBack}>
              
              <Feather name={'arrow-left'} size={26} color={colors.foreground} />
            </HeaderButton>
          )
        }
    }

    return(
        <Header border={props.border} >
            <HeaderSide side="left" >{renderHeaderLeft()}</HeaderSide>
            <HeaderCenter>
                <HeaderTitle>{props.title}</HeaderTitle>
            </HeaderCenter>
            <HeaderSide side="right" >{renderHeaderRight()}</HeaderSide>
        </Header>
    )
}

export default FakeHeader;