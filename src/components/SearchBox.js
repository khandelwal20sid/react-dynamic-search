import React, { Component } from 'react'
import data from '../data.json'
import UserCard from './UserCard';

class SearchBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            search:''             
        }
    }
    
    handleSearch = (e) =>{
        e.preventDefault()
        this.setState({
            search:e.target.value
        })
    }

    render() {
        let SearchedData = data.filter(
            (user) =>{
                return user.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div>
                <div className="jumbotron bg-dark">
                <div className="display-3 text-white">Random Data!</div>
                <input 
                    type="text"
                    placeholder="Search by Name..."
                    className="search-box mt-3 pl-3"
                    value={this.state.search}
                    onChange={this.handleSearch}
                />
                </div>
                <div className="container p-0">
                    <div className="row mx-2">
                        {SearchedData.map((person) =>{
                            return <UserCard 
                                id={person.id}
                                name={person.name}
                                username={person.username}
                                email={person.email}
                                phone={person.phone}
                                company={person.company.name}
                                website={person.website}
                            />
                        })}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default SearchBox
