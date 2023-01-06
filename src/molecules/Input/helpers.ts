import TextField from "@atoms/TextField/TextField";
import TextFieldArea from "@atoms/TextFieldArea/TextFieldArea";
import { TFieldComponent } from "./types";
import Editor from "@atoms/Editor/Editor";

export const fieldMapping: TFieldComponent = {
    "text": TextField,
    "textarea": TextFieldArea,
    "richtext": Editor
};