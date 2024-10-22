import React from 'react'
import './cardOne.css'

const CardOne = () => {
  return (
    <div>
      <div class="about">
   <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links logo"></a>
</div>
   <div class="content">
      <div class="card">
         
            <div class="icon"></div>
            <p class="title">Profile</p>
            <p class="text">Click to see or edit your profile page.</p>
         
      </div>
      <div class="card">
         
            <div class="icon"></div>
            <p class="title">Favourites</p>
            <p class="text">Check all your favourites in one place.</p>
         
      </div>
      <div class="card">
         
            <div class="icon"></div>
            <p class="title">Contacts</p>
            <p class="text">Add or change your contacts and links.</p>
         
      </div>
     
   

   
   </div>
</div>

  )
}

export default CardOne
