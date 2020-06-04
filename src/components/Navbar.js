import React, {Component} from 'react';
import img from '/Users/vaibhav/Internship/src/Assets/owl.svg';

class Navbar extends Component {
    render(){
        return(
            <div>
                

				

     <ul class="ul">
	
	
	<li class="li" >
		<a  href="" >
			<div class="a" >
			<b>OUR PRODUCTS</b>
			</div>
		</a>
	</li>
	
	<li class="li">
		<a href="" >
			<div class="a">
				<b>BOOK NOW</b>
			</div>
		</a>
	</li>


    <li class="li">
		<img class="center"  src={img} ></img>
    </li> 



	
	<li class="li">
		<a  href="" >
			<div class="a">
				<b>SHOP</b> 
			</div>
		</a>
	</li>


	<li class="li">
		<a  href="" >
			<div class="a">
				<b>CONTACT US</b> 
			</div>
		</a>
	</li>
  
	
	
</ul>





            </div>
        );
    }
}

export default Navbar;