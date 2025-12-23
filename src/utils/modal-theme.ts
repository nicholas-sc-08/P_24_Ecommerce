import { ModalVariant } from "./enum.util";

export const modalTheme = {

    [ModalVariant.SUCCESS]: {
        overlay: "bg-sucess/20",
        card: "bg-sucess text-sucess-foreground"
    },
    [ModalVariant.WARNING]: {
        overlay: "bg-warning/20",
        card: "bg-warning text-warning-foreground"
    },
    [ModalVariant.ERROR]: {
        overlay: "bg-error/20",
        card: "bg-error text-error-foreground"
    },
    [ModalVariant.INFO]: {
        overlay: "bg-info/20",
        card: "bg-info text-info-foreground"
    }
};