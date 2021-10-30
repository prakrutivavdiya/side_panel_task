import React,{Component} from "react";
import Sidebar from "react-sidebar";
import FormInput from "../UI/FormInput";
 
class SidePanel extends Component{

    render(){
        let Form=(
            <div style={{margin:'30px 10px 0 10px'}}>
                    <FormInput type="text"
                                placeholder="Enter your name...."
                                name="name"
                                label="Name:"
                                value={this.props.recordToEdit.name || ''}
                                onChange={(event)=>this.props.handleSidebarChange(event)} />
                    <FormInput type="number"
                                placeholder="Enter your age...."
                                name="age"
                                label="Age"
                                value={this.props.recordToEdit.age || ''}
                                onChange={(event)=>this.props.handleSidebarChange(event)} />
                    <button className='Submit' onClick={(event)=>this.props.onConfirm(event)}>Confirm</button>
            </div>
            
        );

        return (
            <div>
                <Sidebar
                    sidebar={Form}
                    open={this.props.sidebarOpen}
                    onSetOpen={this.props.onSetSidebarOpen}
                    pullRight={true}
                    styles={
                            { sidebar: 
                                    { 
                                        background: "white", 
                                        width:'30%' 
                                    }
                            }
                            } 
                >
                    {this.props.content}
                </Sidebar>
            </div>
        
        );
    }
}
 
export default SidePanel;