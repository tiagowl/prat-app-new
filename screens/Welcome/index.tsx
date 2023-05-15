import { useNavigation } from "@react-navigation/native";
import { BackgroundImage, BackgroundOverlayBlack, Button, ButtonOutline, ButtonText, Buttons, Content, ContentBody, ContentFooter, Logo, Main, Terms, TermsBold, TermsRegular } from "./styles";
import * as Animatable from 'react-native-animatable'

const Welcome = () => {

    const navigation = useNavigation();

    return(
        <Main>
            <BackgroundOverlayBlack />
            <BackgroundImage resizeMode="cover" source={require("../../assets/img/welcome.jpg")} />

            <Content>
                <ContentBody>

                    <Logo resizeMode="contain" source={require("../../assets/img/logo-white.png")} />

                    <Buttons>
                        <Animatable.View animation={'fadeInUp'} delay={0}>
                            <Button activeOpacity={0.9} >
                                <ButtonText>Conhecer o aplicativo</ButtonText>
                            </Button>
                        </Animatable.View>
                        <Animatable.View animation={'fadeInUp'} delay={0}>
                            <ButtonOutline onPress={()=>navigation.navigate("SignUp" as never)} activeOpacity={0.9} >
                                <ButtonText>Criar minha conta</ButtonText>
                            </ButtonOutline>
                        </Animatable.View>
                        <Animatable.View animation={'fadeInUp'} delay={0}>
                            <ButtonOutline activeOpacity={0.9} >
                                <ButtonText>Já tenho uma conta</ButtonText>
                            </ButtonOutline>
                        </Animatable.View>
                    </Buttons>
                </ContentBody>

                <ContentFooter>
                    <Terms>
                        <TermsRegular>{'"Sede'}</TermsRegular>
                        <TermsBold>{' Praticantes '}</TermsBold>
                        <TermsRegular>{'da Palavra e não somente ouvintes... Tiago 1.22"'}</TermsRegular>
                    </Terms>
                </ContentFooter>
            </Content>
        </Main>
    )
}

export default Welcome;