import {
    SxProps,
    Theme,
} from "@mui/material";


export const wrap_all_container: SxProps<Theme> = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};


export const textField_container: SxProps<Theme> = {
    width: "70%",
    minWidth: "20rem",
    margin: "0 auto 1rem",
};

export const textField_styles: SxProps<Theme> = {
    width: "100%",
    "& .MuiInputBase-input": {
        color: (theme) => theme.palette.mainText.main,
    },
    "& .MuiInputLabel-root": {

        color: (theme) => theme.palette.mainText.main,
    },
    "& .MuiInputBase-input::placeholder": {
        color: (theme) => theme.palette.mainText.main,
        opacity: 1,
    },
};

export const button_container: SxProps<Theme> = {
    display: "grid",
    width: "70%",
    minWidth: "20rem",
    margin: "0 auto 1rem",
    gridTemplateColumns: "repeat(2, 10rem)",
    justifyContent: "center",
    gap: "1rem",
};



export const update_btn: SxProps<Theme> = {
    textAlign: "center",
    padding: "0.5rem",
    backgroundColor: (theme) => theme.palette.registerBtn.bg,
    color: (theme) => theme.palette.registerBtn.text,
    borderRadius: 5,
};

export const login_btn: SxProps<Theme> = {
    padding: "0.5rem",
    backgroundColor: (theme) => theme.palette.loginBtn.bg,
    color: (theme) => theme.palette.loginBtn.text,
    borderRadius: 5,
    '&:hover': {
        color: (theme) => theme.palette.mainText.main,
    },
};

export const password_validators: SxProps<Theme> = {
    color: (theme) => theme.palette.mainText.main,
  };