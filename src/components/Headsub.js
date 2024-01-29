import React from 'react'; 
import { Nav,NavLink,Bars,NavMenu} from './NavbarElements'; 

const Headsub = () => { 
return ( 
	
	<Nav> 
		<Bars /> 
		<NavMenu> 
		<NavLink to='/' activeStyle> 
			Home 
		</NavLink> 
		<NavLink to='/login' activeStyle> 
		  Login
		</NavLink> 
		<NavLink to='/signup' activeStyle> 
		  SignUp
		</NavLink> 	
		<NavLink to='/about' activeStyle> 
		  About
		</NavLink> 	
		<NavLink to='/employees' activeStyle> 
	    	Employees
		</NavLink> 			 	 
		</NavMenu> 	 
	</Nav> 

); 
}; 

export default Headsub;
