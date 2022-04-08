import React, {useState} from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import FormSubmitted from './FormSubmitted'

const FinalForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'Male',
  })
  const [currentStep, setCurrentStep] = useState(0)

  // Final submit
  const makeRequest = (formData) => {
    console.log('Form submitted', formData)
  }

  const handleNextStep = (newData, final = false) => {
    setData({...data, ...newData})
    if (final) {
      makeRequest(newData)
    }

    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = (newData) => {
    setData({...data, ...newData})
    setCurrentStep(currentStep - 1)
  }

  const steps = [
  //passing state data and handlers
  <StepOne next={handleNextStep} data={data} />, 
  <StepTwo next={handleNextStep} data={data} prev={handlePreviousStep} />,
  <FormSubmitted />
]

  return (
    <div className='parentForm'>
      <h2 style={{marginBottom: '0'}}>Sign up</h2>
      {steps[currentStep]}
    </div>
  )
}

export default FinalForm