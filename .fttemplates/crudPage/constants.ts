import { TFormInputConfig } from "@organisms/StandardForm/types";
import * as yup from "yup";

export const [FTName]_FORM_SCHEMA: TFormInputConfig[] = [
    {
        name: "name",
        type: "text",
        label: "Name",
        placeholder: "Enter Name",
        validation: yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(50, "Name must be less than 50 characters"),
    },

];