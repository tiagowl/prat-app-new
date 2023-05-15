export const UserCreateSchema = z.object({
    name: z.string({
        required_error: "Nome não fornecido"
    }).min(2, {message: "Nome deve ter no minimo 2 caracteres"}).max(40),
    email: z.string({
        required_error: "Email não fornecido"
    }).email({message: "Email inválido"}).trim(),
    password: z.string().min(6, {message: "Senha deve ter no minimo 6 caracteres"})
})

export type UserCreate = z.infer<typeof UserCreateSchema>