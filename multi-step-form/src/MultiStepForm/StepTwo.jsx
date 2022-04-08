import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Select, Input } from '@chakra-ui/react'


const StepTwo = ({data, next, prev}) => {
  
  //on form submit takes values that user inputed and pass it to next function prop
  const handleSubmit = (values) => {
    // set handle submit to true to make final request
    //pass all values execpt confirm password
    next({...data, email: values.email, password: values.password }, true)
  }

  const ValidationSchema = Yup.object({
    email: Yup.string().required().email('Invalid email!'),
    password: Yup.string().required().min(8, 'Your password is too short!'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required()
  })

  return (
    <div>
      <Formik
        // confirmPassword is separate because we dont need to pass it to final state
        initialValues={{...data, confirmPassword: ''}}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        {/* Destructure values from form inputs */}
        {({values, errors, touched}) => (
          <Form className='stepTwo'>
            <p style={{marginBottom: '10px'}}>E-mail</p>
            <Field as = {Input} name="email" />
            {errors.email && touched.email && <p style={{fontSize: '1em', color: 'red', margin: '5px 0'}}>{errors.email}</p>}


            <p style={{margin: '10px 0'}}>Password</p>
            <Field type='password' name="password" as = {Input} />
            {errors.password && touched.password && <p style={{fontSize: '1em', color: 'red', margin: '5px 0'}}>{errors.password}</p>}

            <p style={{margin: '10px 0'}}>Confirm Password</p>
            <Field type='password' name="confirmPassword" as = {Input} />
            {errors.confirmPassword && touched.confirmPassword && <p style={{fontSize: '1em', color: 'red', margin: '5px 0'}}>Passwords Must Match!</p>}

            <div className='buttons' style={{display: 'flex', justifyContent: 'space-between'}}>
              <button type='button' onClick={() => prev(values)}>Back</button>
              <button type='submit'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepTwo