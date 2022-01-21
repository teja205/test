import React from 'react';
import { MDBDataTable } from 'mdbreact';

const Homebanner = () => {
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
        name: 'Tiger Nixon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 2,
        name: 'Garrett Winters',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 3,
        name: 'Ashton Cox',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 4,
        name: 'Censei',
        dob : "10/11/1989",
        address : "PKL"
      },
      { 
        id : 5,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 6,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 7,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 8,
        name: 'Cedric Kelly',
        dob : "10/11/1989",
        address : "PKL"
      },
      { 
        id : 9,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 10,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
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
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 15,
        name: 'Cedric Kelly',
        dob : "10/11/1989",
        address : "PKL"
      },
      { 
        id : 16,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 17,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 18,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        id : 19,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 20,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
      {
        
        id : 21,
        name: 'Cedric Kelly',
        dob : "10/11/1989",
        address : "PKL"
      },
      { 
        id : 22,
        name: 'Axon',
        dob : "01/06/1995",
        address : "Hyd"
      
      },
      {
        id : 23,
        name: 'Garrett',
        dob : "03/07/1992",
        address : "Bza"
      },
      {
        
        id : 24,
        name: 'Coxing',
        dob : "15/10/1997",
        address : "RJY"
      },
     
    ]
  };

  return (
    <>
      <div className='col-12 d-flex flex-wrap justify-content-center'>
      <div className='col-8 text-center'>New Data</div>
        <MDBDataTable
          className='col-10'
          striped
          bordered
          small
          data={data}
        />
      </div>
    </>
  
  );
}

export default Homebanner;