import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Select, Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const StepOne = ({data, next}) => {
  const navigate = useNavigate()

  //on form submit takes values that user inputed and pass it to function next prop
  const handleSubmit = (values) => {
    next(values)
  }

  const ValidationSchema = Yup.object({
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name')
  })

  return (
    <div style={{position: 'relative'}}>
      <Formik
      validationSchema={ValidationSchema}
      // data = parent state prop
      initialValues={data}
      onSubmit={handleSubmit}
      >
        {({errors, touched}) => (
          <Form className='stepOne'>
            <p style={{margin: '10px 0'}}>First Name</p>
            <Field as={Input} name="firstName" />
            {errors.firstName && touched.firstName && <p className='errorMsg' style={{color: 'red'}}>{errors.firstName}</p>}

            <p style={{margin: '10px 0'}}>Last Name</p>
            <Field as={Input} name="lastName" />
            {errors.lastName && touched.lastName && <p className='errorMsg' style={{color: 'red', margin: '5px 0 0.5em 0'}}>{errors.lastName}</p>}

            <p style={{margin: '1em 0'}}>Gender</p>
            <div>
              <Field as={Select} name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
            </div>
            <div className='buttons' style={{display: 'flex', justifyContent: 'space-between'}}>
              <button type='button' onClick={() => navigate('/')} >Back</button>
              <button type='submit'>Next</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepOne