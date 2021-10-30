import './App.css';
import { Component } from 'react';
import SidePanel from './components/sidepanel';
import Table from './components/table'; 

class App extends Component{
  state={
    sidebarOpen: false,
    showModal:false,
    Details:[],
    TempRecord:{}
  }

  onSetSidebarOpen=(sidebarState)=>{
    this.setState({ sidebarOpen: sidebarState });
  }

  onPressAddOrEdit=(user,i)=>{
      let tempRecord={...user};
      tempRecord['index']=i;
      this.setState({TempRecord:tempRecord});
  }

  handleSidebarChange=(event)=>{

    let tempRecord ={...this.state.TempRecord};
    tempRecord[event.target.name]=event.target.value;
    this.setState({TempRecord:tempRecord})

  }

  modifyRecords=(event)=>{
    event.preventDefault();
    //change state and close sidebar
    let userName=this.state.TempRecord.name;
    let userAge=this.state.TempRecord.age;
    let TempRecord={name:userName, age:userAge};

    //validate
    if(userName && userName!=='' && userAge && userAge>='0')
    {
      let index=this.state.TempRecord.index;
      let userRecords=[...this.state.Details];
      
      if(index===-1)
      {
        //Add
        userRecords.push(TempRecord);
      }
      else{

        //Edit
        userRecords[index]=TempRecord;
      }
      
      this.setState({Details:userRecords});
      this.onSetSidebarOpen(false);
  
    }
    else
      alert('Please enter vaild input');
  }


 
  
  deleteRecord=(index)=>{
    if( window.confirm('Are you sure?') )
    {
      let userRecords=[...this.state.Details];
      userRecords.splice(index,1);
      this.setState({Details:userRecords});
    }
    
  }

  render(){


    const content=(
      <div>
        <h1 style={{marginTop:'50px'}}>User Details</h1>
        <Table 
          Details={this.state.Details} 
          onSetSidebarOpen={this.onSetSidebarOpen} 
          onPressAddOrEdit={this.onPressAddOrEdit}
          deleteRecord={this.deleteRecord} />
      </div>
           
    );

    return (
      <div className="App">
        <SidePanel 
          sidebarOpen={this.state.sidebarOpen} 
          onSetSidebarOpen={this.onSetSidebarOpen} 
          content={content} 
          recordToEdit={this.state.TempRecord} 
          handleSidebarChange={this.handleSidebarChange} 
          onConfirm={this.modifyRecords}></SidePanel>
        
      </div>
    );
  }
}

export default App;
