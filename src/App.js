import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import * as ReactBootStarp from 'react-bootstrap'


const useStyle = makeStyles({
  actionStyle:{
    marginTop:20,
    color:'@FF2232',
    textAlign:'center'
  },
    iconColor:{
      color:'#FF5733',
      backgroundColor:'#FFZ'
    }
})

const App = () => {
  const annaCost = [
    {amount:"10000$",name:"ice cream",reason:"summer"},
    {amount:"15120$",name:"bank",reason:"save"},
    {amount:"14000$",name:"dinner",reason:"food"},
    {amount:"12000$",name:"football",reason:"gym"}
  ]
  const renderCosts =(cost , index)=>{
    return(
      <tr key={index}>
        <td>{cost.amount} </td>
        <td>{cost.name} </td>
        <td>{cost.reason}</td>
      </tr>


    )
    
  }
  
  const classes = useStyle();
  const [setPopup,setIsPopup] = useState(false)


  return (
    <div className="App">
      <ReactBootStarp.Table striped hover bordered>
            <thead>
              <tr>
                <th>amount</th>
                <th>name</th>
                <th>reason</th>
              </tr>
            </thead>
            <tbody>
             {annaCost.map(renderCosts)}
            </tbody>
      </ReactBootStarp.Table>
      
    </div>
  );
}

export default App;
