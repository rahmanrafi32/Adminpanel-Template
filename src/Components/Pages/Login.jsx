import React from "react";
import {
    Button,
    Checkbox,
    styled,
    Typography,
    TextField,
} from "@mui/material";
import {LockOpen} from '@mui/icons-material';
import * as yup from 'yup';
import {useFormik} from "formik";

const Container = styled("div")(({theme}) => ({
    width: "30vw",
    display: "flex",
    margin: 'auto',
    height: '70vh',
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
        height: '100vh',
        width: "70vw"
    },
}));

const HeaderDiv = styled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '20px 0'
}));

const CheckBoxDiv = styled("div")(({theme}) => ({
    margin: "0 0 5px 0"
}));

const Login = () => {

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <Container>
            <HeaderDiv>
                <LockOpen color={"primary"} fontSize={"large"}/>
                <br/>
                <Typography variant={"h4"} color={"primary"}>Login</Typography>
            </HeaderDiv>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{marginTop:3}}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    sx={{marginTop:3}}
                />
                <CheckBoxDiv>
                    <Checkbox color={"primary"}/>
                    <Typography variant={"caption"}>Remember Me</Typography>
                </CheckBoxDiv>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;