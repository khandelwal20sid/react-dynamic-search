import React, { Component } from 'react'

class UserCard extends Component {
    render() {
        return (                                                                        
            <div key={this.props.id} className="col-md-4 col-12 my-2">
                <div className="card bg-dark text-white">                      
                  <div className="card-body">
                    <h4 className="card-title text-success m-0">{this.props.name}</h4>
                    <div className="m-0 pb-3">&#40;{this.props.username}&#41;</div>                                
                        <p className="card-text m-0">Email: {this.props.email}</p>
                        <p className="card-text m-0">Contact: {this.props.phone}</p>
                        <p className="card-text m-0">Company: {this.props.company}</p>                                                                    
                        <p className="card-text m-0">Website: {this.props.website}</p>                                
                  </div>
                </div>
            </div>                                                                                                                          
        )
    }
}

export default UserCard



// import React, { Component } from 'react'
// import axios from 'axios'

// class UserCard extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              UserArr: []
//         }
//     }

//     componentDidMount(){
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((res) => {            
//             this.setState({
//                 UserArr: res.data
//             })
//             console.log(this.state.UserArr);
//         }).catch((err) => {
//             console.log("error");
//         });
//     }
    

//     render() {
//         return (
//             <div className="container p-0">
//                 <div className="row">                                     
//                         {this.state.UserArr.map(user => (
//                             <div key={user.id} className="col-md-4 col-12 my-2">
//                                 <div className="card bg-dark text-white">                      
//                                   <div className="card-body">
//                                     <h4 className="card-title text-success m-0">{user.name}</h4>
//                                     <div className="m-0 pb-3">&#40;{user.username}&#41;</div>                                
//                                         <p className="card-text m-0">Email: {user.email}</p>
//                                         <p className="card-text m-0">Contact: {user.phone}</p>
//                                         <p className="card-text m-0">Company: {user.company.name}</p>                                                                    
//                                         <p className="card-text m-0">Website: {user.website}</p>                                
//                                   </div>
//                                 </div>
//                             </div>
//                         ))}                                                                                 
//                  </div>                
//              </div>
//         )
//     }
// }

// export default UserCard
