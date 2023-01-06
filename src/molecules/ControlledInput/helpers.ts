import TextField from "@atoms/TextField/TextField";
import TextFieldArea from "@atoms/TextFieldArea/TextFieldArea";
import { TFieldComponent } from "./types";

export const fieldMapping: TFieldComponent = {
    "text": TextField,
    "textarea": TextFieldArea
};