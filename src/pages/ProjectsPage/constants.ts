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
        name: "imageUrl",
        type: "text",
        label: "Image URL",
        placeholder: "Enter image URL",
        validation: yup.string().required("Image URL is required").min(3, "Image URL must be at least 3 characters").max(500, "Image URL must be less than 500 characters"),
    },

];