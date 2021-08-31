import React, { Component } from 'react';

class ModelTable extends Component{
    state = {
        start_time_order : 1,
        end_time_order : 1,
        estimated_time_order : 1
    }

    sortOrder(time){
        this.setState(()=>({
            [time]: this.state[time] * -1
        }))
        
    }
    render(){

        const {models, sortModel} = this.props;
        
        return(
            <table>
                <thead>
                    <tr>
                    <th className="align-mid">model id</th>
                    <th className="align-mid">Architecture</th>
                    <th className="align-mid">Process</th>
                    <th onClick={()=> {sortModel("start_time", models, this.state.start_time_order); this.sortOrder("start_time_order") }}>Start Time</th>
                    
                    <th onClick={()=> {sortModel("end_time", models, this.state.end_time_order); this.sortOrder("end_time_order")}}>End Time</th>
                    <th onClick={()=> {sortModel("estimated_time", models, this.state.estimated_time_order); this.sortOrder("estimated_time_order")}}>Estimated end time</th>
                    <th>Stage</th>
                    <th className="status">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map((model)=>(
                    <React.Fragment>
                    <tr>
                        <td className='center-data' rowSpan='2'> {model.model_id}</td>
                        <td className='center-data' rowSpan='2'> {model.architecture}</td>
                        <td>Modelling</td>
                        <td className="time">{model.process.modelling.start_time}</td>
                        <td className="time">{model.process.modelling.end_time}</td>
                        <td className="time"><strong>{model.process.modelling.estimated_time}</strong></td>
                        <td className="stage">
                        <span className={ model.process.modelling.stage.Added === "1"  ? "finished" : model.process.modelling.stage.Added === "0" ? "waiting" : "nothing" }>Added- 1Min</span>
                        <span className={ model.process.modelling.stage.Started === "1"  ? "finished" : model.process.modelling.stage.Started === "0" ? "waiting": "nothing" }>Started</span>
                        <span className={ model.process.modelling.stage.Downloaded === "1" ? "finished"  : model.process.modelling.stage.Downloaded === "0" ? "waiting": "nothing" }>Downloaded</span>
                        <span className={ model.process.modelling.stage.Modelled === "1" ? "finished"  : model.process.modelling.stage.Modelled === "0" ? "waiting" : "nothing" }>Modelled</span>
                        <span className={ model.process.modelling.stage.Done === "1" ? "finished"  : model.process.modelling.stage.Done === "0" ? "waiting": "nothing" }>Done</span>
                        </td>
                        <td >Running/Timed out/success/fail</td>
                    </tr>
                    <tr>
                    <td>Calculation</td>
                        <td className="time">{model.process.calculation.start_time}</td>
                        <td className="time">{model.process.calculation.end_time}</td>
                        <td className="time"><strong>{model.process.calculation.estimated_time}</strong></td>
                        <td className="stage">
                        <span className={ model.process.calculation.stage.Added === "1"  ? "finished" : model.process.calculation.stage.Added === "0" ? "waiting" : "nothing" }>Added- 1Min</span>
                        <span className={ model.process.calculation.stage.Started === "1"  ? "finished" : model.process.calculation.stage.Started === "0" ? "waiting": "nothing" }>Started</span>
                        <span className={ model.process.calculation.stage.Downloaded === "1" ? "finished"  : model.process.calculation.stage.Downloaded === "0" ? "waiting": "nothing" }>Downloaded</span>
                        <span className={ model.process.calculation.stage.Modelled === "1" ? "finished"  : model.process.calculation.stage.Modelled === "0" ? "waiting" : "nothing" }>Modelled</span>
                        <span className={ model.process.calculation.stage.Done === "1" ? "finished"  : model.process.calculation.stage.Done === "0" ? "waiting": "nothing" }>Done</span>
                        </td>
                        <td >Running/Timed out/success/fail</td>
                    </tr>
                    </React.Fragment>
                    ))}
                </tbody>   
            </table>
            
        )
    }
}
export default ModelTable;