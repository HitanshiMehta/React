import React from "react";
import { render } from "react-dom";

export class Home extends React.Component{
    constructor(props) {
        super();
        this.state= {
            age:props.user.age,
            status: 0
        };
        setTimeout(()=>{
            this.setState({
                status:1
            })
        },3000)
    }
    onMakeOlder() {
        this.setState({
            age:this.state.age+2,
        });
    }
    render(){
        var name="Hitanshi";
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {name}/{this.props.user.name} {this.props.surname} </p>
                <p>Your Age is {this.state.age}</p>
                <p>Status {this.state.status}</p>
                <p>Your Hobbies are</p>
                <ul>
                    {this.props.user.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
                </ul>
                {this.props.children}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}

// Home.propTypes={
//     children: React.PropTypes.element.isRequired
// };
