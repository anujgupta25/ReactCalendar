import React from  'react';
import { DateRangePicker as RangePicker } from 'react-bootstrap-daterangepicker';
import '../node_modules/bootstrap-daterangepicker/daterangepicker.css';

class PickerCom extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            startDate : new Date(),
            enddate : new Date(),
            key : 'selection'
        }
    }
    render(){
        return(
            <RangePicker initialSettings={{startDate : this.state.startDate,
                endDate : this.state.endDate}}
                onEvent = {this.handleEvent}>
            <input type="text" className="form-control" />
            </RangePicker>
        )
    }
}

export default PickerCom;