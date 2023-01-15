import { TFormInputConfig } from "@organisms/StandardForm/types";
import * as yup from "yup";

export const AUTH_FORM_SCHEMA: TFormInputConfig[] = [
    {
        name: "email",
        type: "text",
        label: "Email",
        placeholder: "",
        validation: yup.string().email("Please enter a valid email").required("Email is required").min(3, "Email must be at least 3 characters").max(50, "Email must be less than 50 characters"),
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        validation: yup.string().required('Password is required').min(1, 'Password must be at least 1 character').max(20, 'Password must be less than 20 characters')
    },

];