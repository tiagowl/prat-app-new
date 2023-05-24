import { Content, ContentForm, InputWrapper, Label, Logo, LogoImage, Main, PasswordToggle, PasswordWrapper, SocialButton, SocialWrapper, SubmitWrapper, Terms, TermsText, TermsTextBold } from "./styles";
import FakeHeader from "../../components/FakeHeader";
import React, { useState } from "react";
import Input from "../../components/Input";
import colors from "../../config/colors";
import { Feather } from '@expo/vector-icons';
import Button from "../../components/Button";
import { FontAwesome } from '@expo/vector-icons'; 
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import InputInvalidation from "../../components/InputValidation";
import { createUserWithEmail } from "../../helpers/auth";
import {getUser} from "../../api/user"
// import { locale, timezone } from "../../locales";
// import { getInitialLink } from "../../helpers/deeplink";

type SocialAuth = "google" | "facebook" | "apple";

export const UserCreateSchema = z.object({
    name: z.string({
        required_error: "Nome não fornecido"
    }).min(2, {message: "Nome deve ter no minimo 2 caracteres"}).max(40),
    email: z.string({
        required_error: "Email não fornecido"
    }).email({message: "Email inválido"}).trim(),
    password: z.string().min(6, {message: "Senha deve ter no minimo 6 caracteres"})
})

type User = z.infer<typeof UserCreateSchema>;

const SignUp = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [user, setUser] = useState<User>({name: "", email: "", password: ""});
    const [error, setError] = useState({type: "", message: ""});

    const handleSubmit = async() => {
        const validate = UserCreateSchema.safeParse(user);
        if(validate.success === false){
            const messageError = JSON.parse(validate.error.message);
            setError({type: messageError[0].path[0], message: messageError[0].message})
            return;
        }
        const {name, email, password} = validate.data;

        const current = await getUser(email);
        const isNewUser = !Boolean(current) || !Boolean(current.id)

        if(isNewUser){
             await createUserWithEmail(email, password);
        }

        

        // const userPayload = {
        //     name: name.trim(),
        //     email: email.trim(),
        //     password: password.trim(),
        //     locale: locale(),
        //     timezone: timezone(),
        //     provider: "email",
        //     source: null
        // }  
        
    }

    return(
        <Main>
            <FakeHeader title="Crie sua conta" actionTitle="Entrar" onActionPress={()=>{}} />
            <Content
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    paddingVertical: 20
                }}
                keyboardShouldPersistTaps={'always'}
            >
                <Logo>
                    <LogoImage source={require("../../assets/img/logo.png")} />
                </Logo>

                <Label>Preencha os campos abaixo ou use seu Facebook/Gmail para criar sua conta</Label>

                <ContentForm>
                    <InputWrapper>
                        <Input 
                            placeholder={"Nome completo"}
                            placeholderTextColor={'#C5C5C7'}
                            autoCorrect={false}
                            onChangeText={(text)=> setUser({...user, name: text})}
                            value={user.name}
                        />
                        {error?.type === "name" && <InputInvalidation>{error?.message}</InputInvalidation>}
                    </InputWrapper>
                    <InputWrapper>
                        <Input 
                            placeholder={"Seu e-mail"}
                            placeholderTextColor={'#C5C5C7'}
                            autoCorrect={false}
                            onChangeText={(text)=> setUser({...user, email: text})}
                            value={user.email}
                        />
                        {error.type === "email" && <InputInvalidation>{error.message}</InputInvalidation>}
                    </InputWrapper>
                    <InputWrapper>
                    <PasswordWrapper>
                        <Input 
                            placeholder={"Defina sua senha"}
                            placeholderTextColor={'#C5C5C7'}
                            autoCorrect={false}
                            secureTextEntry={!passwordVisible}
                            onChangeText={(text)=> setUser({...user, password: text})}
                            value={user.password}
                        />
                        <PasswordToggle onPress={() => setPasswordVisible(!passwordVisible)}>
                            {passwordVisible && <Feather name={'eye'} color={colors.textGray6} size={20} />}
                            {!passwordVisible && <Feather name={'eye-off'} color={colors.textGray6} size={20} />}
                        </PasswordToggle>
                        {error.type === "password" && <InputInvalidation>{error.message}</InputInvalidation>}
                    </PasswordWrapper>
                    </InputWrapper>

                    <SubmitWrapper isValid={true} >
                            <Button onPress={handleSubmit} >Criar</Button>
                    </SubmitWrapper>
                </ContentForm>

                <SocialWrapper>
                    <SocialButton color={colors.facebookBlue}  >
                        <FontAwesome name={'facebook'} color={colors.white} size={26} />
                    </SocialButton>
                    <SocialButton color={colors.googleRed} >
                        <FontAwesome name={'google'} color={colors.white} size={26} />
                    </SocialButton>
                </SocialWrapper>
            </Content>

            <SafeAreaView edges={["bottom"]} >
                <Terms>
                    <TermsText>
                        {'Ao clicar em uma das opções acima, você está de acordo com os '}
                        <TermsTextBold>{'termos de uso '}</TermsTextBold>
                        {'do Praticantes.'}
                    </TermsText>
                </Terms>
            </SafeAreaView>
        </Main>
    )
}

export default SignUp;