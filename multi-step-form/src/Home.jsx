import React from 'react'
import {Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div>
        <Button onClick={() => {
          navigate('/signup')
        }} colorScheme='teal' size='lg'>Sign Up</Button>
    </div>
  )
}

export default Home