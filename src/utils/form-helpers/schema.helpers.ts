import * as yup from 'yup';
import { TFormInputConfig } from "@organisms/StandardForm/types";

export function getValidationSchema(config: TFormInputConfig[]) {
    const schema = config.reduce<Record<string,  yup.AnySchema>>((schema, value) => {
        if (value.validation) {
            schema[value.name] = value.validation;
        }
        return schema;
    }, {});

    return yup.object().shape(schema);
}
