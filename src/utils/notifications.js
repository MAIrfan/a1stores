import toast from "react-hot-toast";

export const TOAST = {
  SUCCESS: "success",
  ERROR: "error",
};

export const TOAST_DURATION = {
  SHORT: 2000,
  REGULAR: 5000,
  LONG: 8000,
  VERY_LONG: 30000,
};

function dispatchNotification(title, type) {
  const toaster = type === TOAST.SUCCESS ? toast.success : toast.error;
  const toastOptions =
    type === TOAST.SUCCESS
      ? {
          style: {
            border: "1px solid lightgreen",
            backgroundColor: "lightgoldenrodyellow",
          },
        }
      : {
          style: {
            border: "1px solid lightcoral",
            backgroundColor: "lightpink",
          },
        };
  return toaster(title, toastOptions);
}

const showNotification = (title) => dispatchNotification(title, TOAST.SUCCESS);

showNotification.success = (title) =>
  dispatchNotification(title, TOAST.SUCCESS);

showNotification.error = (title) => dispatchNotification(title, TOAST.ERROR);

export { showNotification };
