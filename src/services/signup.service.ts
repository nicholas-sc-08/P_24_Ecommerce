import React from "react";
import { UserDTO, UserSignUp } from "../../types/user.type";
import api from "./api";
import { modalTheme } from "@/utils/modal-theme";
import { ModalType } from "@/utils/enum.util";

export async function handleForm(e: React.FormEvent, form: UserSignUp, arrayUsers: UserDTO[], setModalProps: React.Dispatch<React.SetStateAction<any>>, setIsModalOpen: React.Dispatch<React.SetStateAction<any>>) {

    e.preventDefault();

    if (form.password.trim() == form.confirmPassword.trim()) {

        const emailExists = arrayUsers.some((u: UserDTO) => u.email.trim() === form.email.trim());

        if (emailExists) {

            setIsModalOpen(true);
            setModalProps({ phrase: "Email already signed up on the plataform!", modalType: ModalType.ERROR, text: modalTheme.error.text, border: modalTheme.error.border });
        } else {

            const validEmail = form.email.endsWith("@gmail.com");

            if (validEmail) {

                const user = await api.post("/user", form);

                if (!user) {

                    setIsModalOpen(true);
                    setModalProps({ phrase: "Failed to sign up user!", modalType: ModalType.ERROR, text: modalTheme.error.text, border: modalTheme.error.border });
                };

                setIsModalOpen(true);
                setModalProps({ phrase: "You have signed up with success!", modalType: ModalType.SUCCESS, text: modalTheme.success.text, border: modalTheme.success.border });
            } else {

                setIsModalOpen(true);
                setModalProps({ phrase: "Your email must ends with @gmail.com", modalType: ModalType.ERROR, text: modalTheme.error.text, border: modalTheme.error.border });
            };
        };

    } else {

        setIsModalOpen(true);
        setModalProps({ phrase: "Password must be the same as confirm password!", modalType: ModalType.ERROR, text: modalTheme.error.text, border: modalTheme.error.border });
    };
};