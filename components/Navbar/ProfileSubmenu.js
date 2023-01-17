import React from 'react'

const ProfileSubmenu = () => {
  return (
    <div className='profileSubmenu'>
        <h2>Welcome</h2>
        <p>To access account and manage orders</p>
        <button className='login'>LOGIN/SIGNUP</button>
        <hr/>
        <ul>
            <li>Orders</li>
            <li>Wishlist</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default ProfileSubmenu