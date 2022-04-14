import React from 'react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const FormSubmitted = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1 style={{fontSize: '2.2em', color: 'green', marginTop: '4em', textAlign: 'center', fontWeight: '600'}}>You signed up succesfully!</h1>
      <div style={{marginTop: '40%', textAlign: 'left', marginLeft: '1.5em'}} >
        <Button
        className='backToHomeButton' 
        onClick={() => navigate('/')} 
        color='#fff' bg='#1A202C' 
        size='lg' 
        _hover={{ bg: '#fff', color: '#1A202C',borderRadius: 'none' ,borderBottom: '3px solid #1A202C'}}>
          Go Back
        </Button>
      </div>
    </div>
  )
}

export default FormSubmitted