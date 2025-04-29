import React from "react";

class CartItem extends React.Component{
    constructor (){
        super();
        this.state ={
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }

       // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        //this.state.qty +=1;
       // console.log('this', this.state);
       
       //2nd Way to increase qty
        this.setState({qty : this.state.qty +1})

        //2nd Way to increase qty
        // this.setState((prevState)=>{
        //     return {
        //         qty : prevState.qty +1
        //     }
        // });
    };
    
    decreaseQuantity =()=>{
        this.setState((prevState) =>{
            //if(prevState.qty!==0)
            return {
                
                qty : Math.max(prevState.qty -1, 0)
            }
        });
    }
    render(){
      
        const {price, title, qty} = this.state;
        return(
            <div className="cart-item">

                <div className="left-block">
                    <img style={styles.image}></img>
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty {qty}</div>

                    <div className="cart-item-actions"></div>
                    <img alt="increase" className="action-icons" onClick={this.increaseQuantity} src="https://cdn-icons-png.flaticon.com/128/11127/11127933.png"/> 
                    <img alt="decrease" className="action-icons" onClick={this.decreaseQuantity} src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"/> 
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"/> 
                </div>

            </div>
        );
    }
}

const styles ={
    image: {
        height :110,
        width : 110,
        borderRadius : 4,
        background: '#ccc'
    }
}
export default CartItem;