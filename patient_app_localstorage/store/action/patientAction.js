export default class PatientAction{

    static ADD_PATIENT = "ADD_PATIENT";
    static DELETE_PATIENT = "DELETE_PATIENT";
    static DELETE_ALL_PATIENT = "DELETE_ALL_PATIENT";
    
    static addPatient(data){
        return{
            type: this.ADD_PATIENT,
            patientsData: data
        }
    } 

    static deletePatient(index){
        return{
            index: index
                }
    }

    static deleteAllPatient(){
        return{
            type: 'DELETE_ALL'
        }
    }
}