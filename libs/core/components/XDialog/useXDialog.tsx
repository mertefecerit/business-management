"use client";
import {createRoot, Root} from "react-dom/client";
import {IXDialogFireParams, XDialogOptions} from "@/libs/core/components/XDialog/XDialogTypes";
import XDialog from "@/libs/core/components/XDialog/XDialog";

const useXDialog = () => {
    let container:HTMLDivElement | null = null;
    let root: Root | null = null;

    const close = ():void => {
        if (root) {
            root.unmount();
            root = null;
        }
        if (container) {
            document.body.removeChild(container);
            container = null;
        }
    }

    const defaultOptions:XDialogOptions = {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
    }

    const fire = (
        {
            type="default",
            options=defaultOptions,
            ...params
        }: IXDialogFireParams
    ) => {
        return new Promise((resolve) => {
            container = document.createElement("div");
            document.body.appendChild(container);
            root = createRoot(container);
            const onConfirmHandler = () => {
                if (params.onConfirm) params.onConfirm();
                resolve(true);
                close();
            }
            const onCancelHandler = () => {
                if (params.onCancel) params.onCancel();
                resolve(true);
                close();
            }

            const mergedOptions = {
                ...defaultOptions,
                ...options
            }

            root.render(
                <XDialog
                    title={params.title}
                    message={params.message}
                    type={type}
                    options={mergedOptions}
                    onConfirm={onConfirmHandler}
                    onCancel={onCancelHandler}
                    onClose={close}
                />
            )
        })
    }

    return {
        fire
    }
}

export default useXDialog;