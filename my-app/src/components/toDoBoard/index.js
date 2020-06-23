import React from 'react';

export default function ToDoBoard(props) {

    return (
        <div className="card">
            <h1>{this.props.Title}</h1>
            <p>{this.props.CreatedBy}</p>
            <h2><span>{this.props.StartTime}</span><span>{this.props.DueTime}</span></h2>
            <h2>{this.props.Assignee}</h2>
            <p>{this.props.Description}</p>
            <p>{this.props.EstimatedTimeToComplete}</p>
        </div>
    )
}