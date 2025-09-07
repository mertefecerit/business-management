import {useState} from "react";

const useForm = <T extends Record<string, any>>(initialValues: T) => {
    const [values, setValues] = useState<T>(initialValues)

    const handleChange = <K extends keyof T>(field: K, value: T[K]) => {
        setValues(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const reset = () => {
        setValues(initialValues)
    }

    return { values, handleChange, reset } as const
}

export default useForm;