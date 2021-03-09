import React from 'react';
import { Formik, Field } from 'formik';
import { connect } from "react-redux";
import {addToDo} from '../store/actions/toDosAction'

const AddToDo = ({ addToDo }) => (
    <div className="ToDoCreator">      
    <Formik 
      initialValues = {{ title: '', completed: ''}}
      onSubmit={(values, {resetForm}) => {
          addToDo(values)
          resetForm({
            values: {title: '', completed: ''}
          })
  
        }}
      >
      {formProps => (<form onSubmit = {formProps.handleSubmit}>
        <div>
        Add new to do:
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
            Add
        </button>

      </form>)}
  
      </Formik>
    </div>
  );
  

export default connect(null, { addToDo })(AddToDo);
  
