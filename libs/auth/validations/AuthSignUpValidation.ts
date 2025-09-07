import * as z from "zod";

const AuthSignUpValidation = () => {

    const signUpFormSchema = z.object({
        name : z.string().nonempty("Full name is required"),
        username : z.string().nonempty("Username is required"),
        mobile : z.string().nonempty("Mobile phone is required"),
        email: z.email({
            error : (issue) => {
                if (issue.input === undefined || issue.input === "")
                    return "Email is required"
                return "Please enter a valid email address";
            }
        }),
        password: z.string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one special character. Special characters (@ $ ! % * ? &)'),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords does not match!",
        path: ['confirmPassword']
    })

    const authSignUpValidationCheck = <T>(arg:T) => {
        return signUpFormSchema.safeParse(arg);
    }

    return {
        authSignUpValidationCheck,
    }
}

export default AuthSignUpValidation;