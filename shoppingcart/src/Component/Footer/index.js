import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../List';

export default class Footer extends Component {
    render() {
        let knowUs = ["About us","Careers","Press Releases","Cares","Gift a Smile"];
        let connect = ["Facebook","Twitter","Instagram"];
        let makemoney = ["Sell on here","Sell under our accelerator",
        "Become an affiliate","Fulfilment by us","Advertise your products"];
        let help = ["Your Account","Returns Centre","100% Purchase protection",
        "App download","Assistant download","Help"];
        return(
            <div className="row text-light bg-danger">
                <div className="col text-center">
                    <h2>Get to know us</h2>
                    <List listItems={knowUs}/>
                </div>
                <div className="col">
                    <h2>Connect with us</h2>
                    <List listItems={connect}/>
                </div>
                <div className="col">
                    <h2>Make money with us</h2>
                    <List listItems={makemoney}/>
                </div>
                <div className="col">
                    <h2>Let us help you</h2>
                    <List listItems={help}/>
                </div>
            </div>
        );
    }
}