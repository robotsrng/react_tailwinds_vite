import { TFormInputConfig } from "@organisms/StandardForm/types";
import * as yup from "yup";

export const PROJECT_FORM_SCHEMA: TFormInputConfig[] = [
    {
        name: "title",
        type: "text",
        label: "Title",
        placeholder: "Enter title",
        validation: yup.string().required("Title is required").min(3, "Title must be at least 3 characters").max(50, "Title must be less than 50 characters"),
    },
    {
        name: 'content', type: 'richtext', label: 'Content', placeholder: 'Enter content', validation: yup.string().required('Content is required').min(3, 'Content must be at least 3 characters').max(500, 'Content must be less than 500 characters')
    },
    {
        name: "image",
        type: "image",
        label: "Main Image",
        placeholder: "Upload an image",
        // validation: yup.mixed().required('File is required'),

    },

];