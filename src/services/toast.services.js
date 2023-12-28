import { toast } from 'react-toastify';

const customId = "custom-id-yes";

export const ThrowToast = {
    success: (message) => {
        toast.success(message, {
            toastId: customId
        });
    },

    error: (message) => {
        toast.error(message, {
            toastId: customId
        });
    },

    warning: (message) => {
        toast.warning(message, {
            toastId: customId
        });
    },

    info: (message) => {
        toast.info(message, {
            toastId: customId
        });
    },
}