import React from 'react';
import { extname } from 'path';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} ></CustomerProfile>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}>
                </CustomerInfo>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    // ID와 이미지만 렌더링해줌
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name} ({this.props.id}) </h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Customer; 