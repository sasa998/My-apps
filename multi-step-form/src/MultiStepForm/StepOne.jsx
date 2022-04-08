import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Select, Input } from '@chakra-ui/react'

const StepOne = ({data, next}) => {
  //on form submit takes values that user inputed and pass it to next function prop
  const handleSubmit = (values) => {
    next(values)
  }

  const ValidationSchema = Yup.object({
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name')
  })

  return (
    <div>
      <Formik
      validationSchema={ValidationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
      >
        {({errors, touched}) => (
          <Form className='stepOne'>
            <p style={{marginBottom: '10px'}}>First Name</p>
            <Field as={Input} name="firstName" />
            {errors.firstName && touched.firstName && <p style={{fontSize: '1em', color: 'red', margin: '5px 0 20px 0'}}>{errors.firstName}</p>}

            <p style={{margin: '10px 0'}}>Last Name</p>
            <Field as={Input} name="lastName" />
            {errors.lastName && touched.lastName && <p style={{fontSize: '1em', color: 'red', margin: '5px 0 0.5em 0'}}>{errors.lastName}</p>}

            <p style={{margin: '1em 0'}}>Gender</p>
            <div>
              <Field as={Select} name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
            </div>
            {/* <div style={{width: '6.5em', marginTop: '1em'}}>
            <Select placeholder='' size='md' variant='filled'>
              <option value='option1'>Male</option>
              <option value='option2'>Female</option>
            </Select>
            </div> */}
            <button type='submit'>Next</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StepOne