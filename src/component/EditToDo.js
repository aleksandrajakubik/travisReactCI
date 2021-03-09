import React from 'react';
import { Formik, Field } from 'formik';
import { connect } from "react-redux";
import { editToDo } from '../store/actions/toDosAction'

const EditToDo = ({ toDoToEdit, editToDo, onEdit }) => (
    <div className="ToDoCreator">      
    <Formik 
      initialValues = {{ title: toDoToEdit.title, completed: toDoToEdit.completed}}
      onSubmit={(values, {resetForm}) => {
        editToDo(toDoToEdit.id, values)
        onEdit()
          resetForm({
            values: {title: ''}
          })

  
        }}
      >
      {formProps => (<form onSubmit = {formProps.handleSubmit}>
        <div>
        Title:
        <input
              type="text"
              name="title"
              onChange={formProps.handleChange}
              value={formProps.values.title}
            />
        </div>
        <div role="group">
            Completed?
            <label>
              <Field type="radio" name="completed" value="true"/>
              True
            </label>
            <label>
              <Field type="radio" name="completed" value="false"/>
              False
            </label>
        </div>
        
        <button type="submit">
            Confirm changes
        </button>

      </form>)}
  
      </Formik>
    </div>
  );

export default connect(null, { editToDo })(EditToDo);
  
