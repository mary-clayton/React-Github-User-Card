import React, {Component} from 'react';
import styled from 'styled-components';

const FormStyle = styled.div `
background: #505050; 
height: 100px;
form {
display: flex;
justify-content: flex-end;
align-items: center;
padding: 2%;
color: white;
}
label {
padding-right: 1%;
}
input {
width: 203px;
height: 20px;
}
.fas {
    height: 20px;
    padding-left: 5%;
    color: white;
}
button {
    background: #505050;
    border:none;
}
`

class SearchComponent extends Component{

    constructor(){
        super();
        this.state = {
            searchField: ''
        }
    }

    handleChange = e =>{
        this.setState({
            searchField: e.target.value
        });
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.searchUser(this.state.searchField);
        e.target.search.value = '';
    };


    render(){
        return(
            <FormStyle className="search-bar">
                <form>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="search for user's followers" onChange={this.handleChange}/>
                    <button><i className="fas fa-search fa-2x"></i></button>
                </form>
            </form>
            </FormStyle>
        );
    }
}

export default SearchComponent;