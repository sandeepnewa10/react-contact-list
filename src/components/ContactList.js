import React from "react";
import {Card} from "./card/Card";

export const ContactList = ({users}) => {
  return (
    <>
        {/* spinner */}
        {users.length
        ? (
          <div className="content-wrap">
        { users.map((usr,i) => <Card  key={i} user={usr}  />)}
          </div>

          
        ):(
        //   <div className="d-flex justify-content-center">
        //   <div className="spinner-border" role="status">
        //     <span className="visually-hidden">Loading...</span>
        //   </div>
        // </div>


          <h2>User Not Found</h2>


        )
      }
       

        {/* cards */}
       
      
       </>
      
  );
};
