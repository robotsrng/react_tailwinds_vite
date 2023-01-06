import type { ColorVariants } from "../../utils/types/ui.types";

export const getType = (type: ColorVariants): string => {
    switch (type) {
        case 'primary':
            return 'btn-primary';
        case 'secondary':
            return 'btn-secondary';
        case 'tertiary':
            return 'btn-tertiary';
        case 'success':
            return 'btn-success';
        case 'info':
            return 'btn-info';
        case 'warning':
            return 'btn-warning';
        case 'danger':
            return 'btn-danger';
        case 'text':
            return 'btn-text';
        default:
            return '';
    }
};