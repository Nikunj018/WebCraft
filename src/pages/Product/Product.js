import React, { Component } from 'react'

import Card from '../../Components/Card/Card';

 class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           product_info : [
              { id: 1, bgcolor:"#8EB695" , About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje" },
              { id: 2, bgcolor:"#C2D5DA" , About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 3, bgcolor:"#D4878F" , About: " Haeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 4, bgcolor:"#FBDEA2" , About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje" },
              { id: 5, bgcolor:"#E9DD5" , About: "aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje" }
           ]
        }
     }

    render() {
        return (
            <>
                <section>
                    <div className = "container">
                        <div className = "card-wrapper">
                        {this.state.product_info.map((item,index)=>{
                            return <Card key={`card-${index}`} item={item} />
                        })}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Product;