/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from "react";
import axios from 'axios';
export default function TableContact_Fieldset() {
  const [features, setFeatures]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3004/contact").then(res=>setFeatures(res.data))
  }, [])
    return(
        <>
    <table cellSpacing={0} cellPadding={2}>
      <tbody>
        <tr>
          <td> <h3>CONTACT ME</h3> </td>
        </tr>
        {
      features.map(item=>{
        return(
        <tr>
          <td> <img src={`${item.collum1}`} alt width={`${item.collum2}`} align={`${item.collum3}`} />{`${item.collum4}`}</td>
        </tr>
              )
      })
    }
      </tbody>
    </table>
        </>
    )}