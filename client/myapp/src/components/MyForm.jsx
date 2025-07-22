import React, { useState } from "react";
import axios from "axios";
//import './MyForm.css';

function MyForm(){

    const [memberID, setMemberID] = useState("")

    const [data, setData] = useState({})

    const updateMemberID = (e)=>{
        setMemberID(e.target.value)
    }

    const fetchUser= (()=>{
        axios.get(`http://localhost:8000/user/${memberID}`)
        .then(res=>setData(res.data))
        .catch(err=>console.error(err))
    });

    return (
        <> 
         <main id="main-content">           
           <div class="main-content ma__container">
            <div class="ma__placeholder">
            <div className="search-form">
              <label htmlFor="memberId" className="c-label">
              Member Search:
              </label>
             <input type="text" onChange={updateMemberID} value={memberID}autocomplete="off" placeholder="Enter Member ID" class="ma__header-search__input"/>
             <button onClick={fetchUser} class="ma__button ma__button--uppercase" >Search</button>
             </div>
             <table className="form-table">
            <thead>
              <tr>
                <th colSpan="6">
                  SECTION 1 (Items 1 through 12 must be completed.) PLEASE PRINT OR TYPE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Provider ID/Service Location<br />{data.providerID}</td>
                <td>2. Provider Name<br />{data.providerName}</td>
                <td>3. Provider Telephone Number<br />{data.providerTeleNum}</td>
              </tr>
              <tr>
                <td colSpan="2">4. Provider Address:      {data.providerAddress}
                </td>
                <td colSpan="1">
                  5. Reason for Submission<br />
                  <span>
                    {data.ReasonForSubmission === "New SC-1"
                      ? "☑ New SC-1"
                      : "☐ New SC-1"}
                    &nbsp;&nbsp;
                    {data.ReasonForSubmission === "Change to Existing SC-1"
                      ? "☑ Change to Existing SC-1"
                      : "☐ Change to Existing SC-1"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>6. Member Last Name<br />{data.MemberLastName}</td>
                <td>7. Member First Name<br />{data.MemberFirstName}</td>
                <td>8. Middle Initial<br />{data.MemberMiddleInitial}</td>
              </tr>
              <tr>
                <td colSpan="3">9. Member Home Address: {data.MemberHomeAddress}</td>
              </tr>
              <tr>
                <td>10. Member Date of Birth<br />{data.MemberDOB}</td>
                <td>
                  11. Member Gender<br />
                  <span>
                    {data.MemberGender === "Female" ? "☑ Female" : "☐ Female"}
                    &nbsp;&nbsp;
                    {data.MemberGender === "Male" ? "☑ Male" : "☐ Male"}
                  </span>
                </td>
                <td>12. Member ID or SSN<br />{data.MemberID}</td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
        </main>
        <br />
        </>             
    )
}

export default MyForm