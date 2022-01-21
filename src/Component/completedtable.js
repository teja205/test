import React from 'react';
import { MDBDataTable, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const Completedtable = () => {
 
 
 
  const rowEvents =  (e, id) => {
    {
     console.log(data);
  
   }
 
 };
  
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'DOB',
        field: 'dob',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 100
      }
      
    ],
    rows: [
      {
        id : 1,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza",
        clickEvent: () => rowEvents()
      },
      {
        
        id : 2,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 3,
        name: 'Cedric Kelly',
        dob : "10/11/1989",
        address : "PKL"
      },
      { 
        id : 4,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 5,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 6,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      { 
        id : 7,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 8,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 9,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 10,
        name: 'Cedric Kelly',
        dob : "10/11/1989",
        address : "PKL"
      },
     
      {
        
        id : 11,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      { 
        id : 12,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 13,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      { 
        id : 14,
        name: 'Tiger Nixon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 15,
        name: 'Garrett Winters',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 16,
        name: 'Ashton Cox',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 17,
        name: 'Censei',
        dob : "10/11/1989",
        address : "PKL"
      },
      { 
        id : 18,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      
      {
        
        id : 19,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        id : 20,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 21,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 22,
        name: 'Cedric Kelly',
        dob : "10/11/1989",
        address : "PKL"
      },
      { 
        id : 23,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 24,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
     
    ]
  };



  return (
    <>
      <div className='col-12 d-flex flex-wrap justify-content-center'>
        <div className='col-8 text-center'>Completed Data</div>
        <MDBDataTable
          className='col-10'
          hover
          bordered
          small
          data={data}
         
        />
     
      </div>
    </>
  
  );
}

export default Completedtable;