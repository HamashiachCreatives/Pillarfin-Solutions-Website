import { About } from '@/componets'
import React from 'react'

export const metadata = {
  title:'About',
  description: `Pillarfin Solutions We believe in building strong, long-term partnerships with our clients, 
  We thrive in a dynamic digital landscape, Excellence
We are committed to delivering exceptional IT solutions and services that align with client expectations, 
Our focus is on creating a positive impact on our clients.
Partnership, Agility, Excellence and Imapact`
}


const page = () => {
  return (
    <div>
      <About />
    </div>
  )
}

export default page
