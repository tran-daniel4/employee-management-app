import React from 'react'

const ListEmployeeComponent = () => {
    const dummyData = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Pork",
            "email": "JohnPork@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Pork",
            "lastName": "John",
            "email": "PorkJohn@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Pohn",
            "lastName": "Jork",
            "email": "PohnJork@gmail.com"
        },
    ]
  
    return (
    <div>
        <h2>List of Employees</h2>
        <table>
            <thead>
                <tr>
                    <th>EID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { dummyData.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )}
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent