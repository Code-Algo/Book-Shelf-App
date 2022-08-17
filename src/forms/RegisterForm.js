import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'

const FormSchema = Yup.object(
    {   
        username: Yup.string().required(),
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required(),
        confirmPassword: Yup.string().required()

    }
)

const initialValues={
    username:'',
    email:'',
    password:'',
    confirmPassword:''
}

export default function RegisterForm() {
    const handleSubmit=(values)=>{
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id ="username"
                name="username"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error = {formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
                id ="email"
                name="email"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error = {formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                id ="password"
                name="password"
                type="password"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                id ="confirmPassword"
                name="confirmPassword"
                type="password"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Confirm Password"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error = {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            <Button type="submit" sx={{ width:"100%"}}>Register</Button>
        </form>
      )
    }