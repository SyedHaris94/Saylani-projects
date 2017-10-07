import React from  'react';
import PatientAction from '../action/patientAction.js'


function pateintData(state= [], action){
    switch(action.type){
        case PatientAction.ADD_PATIENT:
        action.patientsData

        case PatientAction.DELETE_PATIENT:
        state.splice(action.index,1)
        return state

        case ActionPatient.DELETE_ALL_PATIENT:
        state.splice(0)
        return state

        default:
        return state
    }
}

export default pateintData;