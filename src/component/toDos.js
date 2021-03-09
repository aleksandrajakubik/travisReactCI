import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToDos, removeToDo, updateToDo } from '../store/actions/toDosAction';
import AddToDo from './AddToDo';
import EditToDo from './EditToDo';
import { getAllToDos, getCompletedToDos } from '../store/reducers/toDosReducer';

class ToDos extends Component {
    state = {
        isEdited: null
    }

    componentDidMount() {

        this.props.getToDos();
    }

    handleDelete = (id) => {
        this.props.removeToDo(id)
    }

    handleEdit = (id) => {
        this.setState({ isEdited: id })
    }

    render() {
        // const { toDos } = this.props.toDos;
        const completedToDos = this.props.completedToDos;
        return (
            <div>
                <AddToDo />
                {completedToDos.map(t =>
                    <React.Fragment key={t.id}>
                        <h6 >{t.title}</h6>
                        <button onClick={() => this.handleDelete(t.id)}>Delete</button>
                        <button onClick={() => this.handleEdit()}>Edit</button>
                        {this.state.isEdited !== null ? <EditToDo toDoToEdit={t} onEdit={this.handleEdit} /> : null}
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    toDos: getAllToDos(state),
    completedToDos: getCompletedToDos(state.toDos)
})


export default connect(mapStateToProps, { getToDos, removeToDo, updateToDo })(ToDos)