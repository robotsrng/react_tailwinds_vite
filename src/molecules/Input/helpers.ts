import { TextField, PasswordInput } from "@molecules";
import TextFieldArea from "@atoms/TextFieldArea/TextFieldArea";
import { TFieldComponent } from "./types";
import Editor from "@atoms/Editor/Editor";
import ImageInput from "@molecules/ImageInput/ImageInput";

export const fieldMapping: TFieldComponent = {
    "text": TextField,
    "textarea": TextFieldArea,
    "password": PasswordInput,
    "richtext": Editor,
    "image": ImageInput
};