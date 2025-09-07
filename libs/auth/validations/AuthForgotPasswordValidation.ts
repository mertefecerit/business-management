import * as z from "zod";

const AuthForgotPasswordValidation = () => {
    const fromSchema = z.object({
        email: z.email({
            error : (issue) => {
                if (issue.input === undefined || issue.input === "")
                    return "Email is required"
                return "Please enter a valid email address";
            }
        }),
    })



    const forgotPasswordValidation = <T>(arg:T) => {
        return fromSchema.safeParse(arg);
    }

    return {
        forgotPasswordValidation,
    }
}

export default AuthForgotPasswordValidation;