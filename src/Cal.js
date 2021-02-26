import React from 'react';
import { DateRangePicker } from 'react-date-range';
import './ThemeDefault.css';
import './styles.css';
import moment, { months } from 'moment';
import { addDays } from '@fullcalendar/react';
import { DateRangePicker as RangePicker } from 'react-bootstrap-daterangepicker';
//import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-daterangepicker/daterangepicker.css';


class Cal extends React.Component{
    
        constructor(props){
        super(props)
        this.state = {
            startDate : new Date(),
            endDate: new Date(),
            key: 'selection'  
        }
    }


    handleEvent = (event,picker) =>{
        this.setState({
            startDate : moment(picker.startDate).toDate(),
            endDate : moment(picker.endDate).toDate()
        });
    }

    handleClick = (event)=>{
        event.preventDefault();
        if(event.target.name == "today"){
         this.setState({
             startDate : new Date(),
             endDate : new Date()
         });
        }
        
        if(event.target.name == "yesterday"){
         this.setState({
             startDate : addDays(new Date(),-1),
             endDate : addDays(new Date(),-1)
            });
        }
        if(event.target.name == "Last_7_Days"){
         this.setState({
             startDate : new Date(),
             endDate : addDays(new Date(),-6)
            });
        }
        if(event.target.name == "Last_2_week"){
            this.setState({
                startDate : new Date(),
                endDate : addDays(new Date(),-13)
               });
        }
        if(event.target.name == "This_month"){
            this.setState({
                startDate : moment().startOf('month').toDate(),
                endDate : moment().endOf('month').toDate()
               });
        }
        if(event.target.name == "Last_month"){
            this.setState({
                startDate : moment().subtract(1,'months').startOf('month').toDate(),
                endDate : moment().subtract(1,'months').endOf('month').toDate()
               });
           }
    }
    render(){
      return(  
            
<>

       <div className='col-sm-9 mt-4 offset-md-1'>
    
			<div className="flex-row d-flex justify-content-center">
				<div className="col-xl-8 col-lg-8 col-11 px-1">
            <div className='row date-icon '>
                <div className=' col-7 offset-md-5'>
            <RangePicker initialSettings={{startDate : this.state.startDate,
                                           endDate : this.state.endDate}}
                                           onEvent = {this.handleEvent}>
            <input type="text" className=" px-4 form-control" />
            </RangePicker>
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
                </div>
            </div>
				</div>
                
                
				<div className="col-xl-4 col-lg-4 col-11 px-1">
					<a href="" className="filter">Filters <span><i className="fas fa-sort-down"></i></span></a>
				</div>
			</div>
		
			<div className="flex-row d-flex justify-content-center">
				<div className="col-xl-8 col-lg-8 col-11 px-1">
                <DateRangePicker
                    editableDateInputs={true}
                    onChange={item => this.setState(item.selection)}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={true}
                    showMonthArrow={true}
                    months={2}
                    dateDisplayFormat='dd-MMM-yyyy'	
                    ranges={[this.state]}
                    direction="horizontal"
                    
            />
				</div>
				<div className="col-xl-4 col-lg-4 col-11 px-1">
					<ul className="range-li" id='main'>
					  <li><button type="button" className='btn btn-sm btn-block text-center' onClick={this.handleClick} name="today">Today</button></li>
					  <li><button type="button" className='btn btn-sm btn-block text-center' onClick={this.handleClick} name="yesterday">Yesterday</button></li>
					  <li><button type="button" className='btn btn-sm btn-block text-center' onClick={this.handleClick} name="Last_7_Days">Last 7 Days</button></li>
					  <li><button type="button" className='btn btn-sm btn-block text-center' onClick={this.handleClick} name="Last_2_week">Last 2 weeks</button></li>
					  <li><button type="button" className='btn btn-sm btn-block text-center' onClick={this.handleClick} name="This_month">This month</button></li>
					  <li><button type="button" className='btn btn-sm btn-block text-center' onClick={this.handleClick} name="Last_month">Last month</button></li>
					  <li><button type="button" className='btn btn-sm btn-block text-center'>Custom Range</button></li>
					</ul>
					<div className="p-15">	
						<button type="submit" className="appply">Apply</button>
						<button type="submit" className="cancelbt">Cancel</button>
					</div>	
				
				</div>
			</div>
			
         
	   </div>
	   
	   
	   </>
      )
}
}
export default Cal;