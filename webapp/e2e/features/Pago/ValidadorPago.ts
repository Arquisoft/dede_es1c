import { useState } from "react";

const useForm = () => {
    const [values, setValues]= {
        name = '',
        number = '',
        expiredDate = '',
        CVC = ''
    }
    const validateForm = () => {

    }

    return { validateForm}
}