import {styled} from "@mui/material/styles";
import {Button, Modal, TextField, Typography} from "@mui/material";
import * as React from "react";
import * as yup from "yup";
import {useFormik} from "formik";

const HeaderDiv = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '20px 0'
});

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

const ModalBox = styled('div')(({theme}) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    height: "70vh",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    boxShadow: 24,
    p: 4
}));


const AddAdmin = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .required('Name is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("Submitted", formik.values)
        },

    });

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'flex-end', margin: 10}}>
                <Button variant={"contained"} onClick={handleOpen}>Add Admin</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="addAdmin"
                aria-describedby="addAdmin"
            >
                <ModalBox>
                    <Container>
                        <HeaderDiv>
                            <Typography variant={"h4"} color={"primary"}>Add a Admin</Typography>
                        </HeaderDiv>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                sx={{mt: 3}}
                            />
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                sx={{mt: 3, mb: 3}}
                            />
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Add Admin
                            </Button>
                        </form>
                    </Container>
                </ModalBox>
            </Modal>
        </>
    );
};

export default AddAdmin;
