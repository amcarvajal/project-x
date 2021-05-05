import React from 'react'
//Styles
import '../styles/container-style.css';
//Components
import Card from '../components/Card'

export default function Container() {

    const title = ["Webistes Themes", "Apps", "Icons & Buttons", "Designs"];
    const description = [];
    
    


    let Cards = [];
	if (title) {
		Cards = title.map(title => <Card title={title} description={description}/>);
	}
    return (
        <div className="container-fluid">
            <div className="card-deck ml-2">

            {Cards}

            </div>
           
        </div>
    )
}
