import './styles.css';

import React, { useEffect, useState } from 'react';

function Header() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(()=>{
    const listener = (event:any)=>{
      setUserData(event.detail);
    }
    
    window.addEventListener('profile-order-fetched',listener);
    return ()=>{
      window.removeEventListener('profile-order-fetched',listener);
    }
  },[]);
  
  return (
    <div id="header">
      <div className='actionBar'>
      <label id="title">This is the header component from Root Project on port 8000</label>
        <nav>
          <ul id='menu'>
            <li><a id="menu" href="/profiles">Customers</a></li>
            <li><a href="/contactus" id="menu">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      {
        userData!=null &&
        <div className='headerLeft'>
          <img src={userData?.user.avatar} className="profileImage"></img> 
          <div style={{marginLeft:'20px'}}>
            <div>
              <label className='labelLarge'>{userData?.user.first_name} {userData?.user.last_name}</label>
            </div>
            <div>
            <label className='label'>Qty: {userData?.qty}</label>
            </div>
            <div>
            <label className='label'>Total: {userData?.price}</label>
              </div>
          </div>
        </div>
      }
    </div>
  );
}
export default Header;