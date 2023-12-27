import React from "react";
import "./WidgetLg.css";
import {tranceaction} from "../../datas"

export default function WidgetLg() {

    const Botton=({type})=>{
        return <botton className={"widgetLgBotton " + type}>{type}</botton>
    }

  return (
    <div className="widgetLgContainer col-md-9">
      <h3 className="widgetLgTitle">Last Tranceaction</h3>
      <table className="table ">
        <tr className="tableRow">
          <th className="tableHeader">Costomer</th>
          <th className="tableHeader">Date</th>
          <th className="tableHeader">Amount</th>
          <th className="tableHeader">Status</th>
        </tr>
        {tranceaction.map(user=>(
             <tr className="tableRow">
          <td className="tableCostomer">
            <img src={user.img} className="tableCostomerImg" />
           {user.name}
          </td>
          <td className="tableData">{user.date}</td>
          <td className="tableAmount">{user.amount}$</td>
          <td className="tableStatus">
            <Botton type={user.status}></Botton>
          </td>
        </tr>
        ))}
       
      </table>
    </div>
  );
}
