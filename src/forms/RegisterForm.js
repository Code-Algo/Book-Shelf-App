import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'
import useCreate from '../hooks/useCreate'

const FormSchema = Yup.object(
    {   
        first_name: Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password: Yup.string().required()

    }
)


export default function RegisterForm({ user }) {
    const [newUser, setNewUser] = useState()
    useCreate(newUser)
    
    const initialValues={
        email:'',
        first_name:'',
        last_name:'',
        password:''
    }
    const handleSubmit=(values)=>{
    if(user){
        console.log("Editing ", values)
    }else{
        console.log("Creating ", values)
        setNewUser(values)
    }
}

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id ="first_name"
                name="first_name"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="First Name"
                placeholder="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error = {formik.touched.first_name && Boolean(formik.errors.first_name )}
                helperText={formik.touched.first_name  && formik.errors.first_name }
            />
            <TextField
                id ="last_name"
                name="last_name"
                fullWidth
                sx={{mb: 2, mt:2}}
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error = {formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
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
            <Button type="submit" sx={{ width:"100%"}}>Register</Button>
        </form>
      )
    }