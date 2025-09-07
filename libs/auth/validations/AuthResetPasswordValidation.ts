import * as z from "zod";

const AuthResetPasswordValidation = () => {

    const resetPasswordFormSchema = z.object({
        token : z.string().nonempty("Token is required"),
        password: z.string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one special character. Special characters (@ $ ! % * ? &)'),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords does not match!",
        path: ['confirmPassword']
    })

    const resetPasswordFormValidationCheck = <T>(arg:T) => {
        return resetPasswordFormSchema.safeParse(arg);
    }

    return {
        resetPasswordFormValidationCheck,
    }
}

export default AuthResetPasswordValidation;