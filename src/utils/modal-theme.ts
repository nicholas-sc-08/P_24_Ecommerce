import { ModalType } from "./enum.util";

export const modalTheme = {

    [ModalType.SUCCESS]: { border: "border-success", text: "text-success" },
    [ModalType.WARNING]: { border: "border-warning", text: "text-warning" },
    [ModalType.ERROR]: { border: "border-error", text: "text-error" },
    [ModalType.INFO]: { border: "border-info", text: "text-info" }
};