import * as z from "zod";

const AuthSignInValidation = () => {
    const signInCheckFormSchema = z.object({
        email: z.email({
            error : (issue) => {
                if (issue.input === undefined || issue.input === "")
                    return "Email is required"
                return "Please enter a valid email address";
            }
        }),
    })

    const signInFormSchema = z.object({
        email: z.email({
            error : (issue) => {
                if (issue.input === undefined || issue.input === "")
                    return "Email is required"
                return "Please enter a valid email address";
            }
        }),
        password: z.string()
    })

    const signInCheckFormValidation = <T>(arg:T) => {
        return signInCheckFormSchema.safeParse(arg);
    }

    const signInFormValidation = <T>(arg:T) => {
        return signInFormSchema.safeParse(arg);
    }

    return {
        signInCheckFormValidation,
        signInFormValidation,
    }
}

export default AuthSignInValidation;