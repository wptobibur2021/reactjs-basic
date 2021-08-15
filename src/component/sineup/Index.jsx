import React, {Component} from 'react';
import SineUp from "./SineUp";

class Index extends Component {
    state = {
        users: []
    }

    getUsers = user =>{
        user.id = new Date().toTimeString().toString()
        this.setState({
            users: [...this.state.users, user]
        })

    }
    tableData (){
      return this.state.users.map((user) => {
            const {fullName, fatherName, motherName,gender,birthDay, address, password} = user
            return (
                <tr key={user.toString()}>
                    <td>{fullName}</td>
                    <td>{password}</td>
                    <td>{fatherName}</td>
                    <td>{motherName}</td>
                    <td>{birthDay}</td>
                    <td>{gender}</td>
                    <td>{address}</td>
                </tr>
            )
        })
    }



    render() {
        return (
            <div className='container p-3'>
                <div className='row'>
                    <SineUp createUsers={this.getUsers} />
                </div>

                <div className='row'>
                    <div className='col-md-auto'>
                        <div className='card-header mb-5'>
                            <h2 className='text-danger'>Registration User</h2>
                        </div>
                        <div className='user-select-all'>
                            <table className="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Father Name</th>
                                    <th scope="col">Mother Name</th>
                                    <th scope="col">Birth Date</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Address</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.tableData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;