import React from 'react' 

class Status extends React.Component {
    
    
    
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({editMode: true})  // setState is asynchronous
        //this.state.editMode = true  // it does not work because react did rewrite the client page 
    }

    deActivateEditMode() {
        this.setState({editMode: false})
        //this.state.editMode = false
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        }) 
    }

    componentDidUpdate(PrevProps, PrevState) {
        if (PrevState.status !== this.state.status) {
            this.setState({status: this.state.status})
        }
        let s = this.state
        let p = this.props
        console.log('h')
    }
    
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick = {this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }    
                {this.state.editMode && <div>
                    <input onChange= {this.onStatusChange} autoFocus = 'true' value = {this.state.status} onBlur = {this.deActivateEditMode.bind(this)}/>
                </div>}
            </div>

        )
    }
}

export default Status

