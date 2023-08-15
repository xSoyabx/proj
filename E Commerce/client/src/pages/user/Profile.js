import React from 'react'
import Layout from '../../components/Layout/layout';
import UserMenu from './../../components/layout/UserMenu';


const Profile = () => {
  return (
    <Layout title={"Your Profile"}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md 3'></div>
            <UserMenu/>
            <div className='col-md 9'></div>
            <h1>Your Profile</h1>
        </div>
      </div>

    </Layout>
  )
}

export default Profile
