import React, {Children, useContext} from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from '../layouts/Navbar';


const DashboardLayout = ({children}) => {
  const { user } = useContext(UserContext)

  return (
    <div>
        <Navbar />

        {user && <div>{children}</div>}
    </div>
  )
}

export default DashboardLayout
