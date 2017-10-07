import PatientAction from '../action/patientAction.js'
import {AsyncStorage} from 'react-native'

export default class PatientMiddleWare{

    static asyncAddPatient(patientObj){
        var patientArray = [];
        return (dispatch) => {
            try {
                const data = AsyncStorage.getItem('patients').then(data => {
                    if (data == null) {
                        patientsArray[0] = patientObj;
                        AsyncStorage.setItem('patients', JSON.stringify(patientsArray), () => {
                            AsyncStorage.getItem('patients', (err, result) => {
                                patients = JSON.parse(result)
                                dispatch(ActionPatient.addPatient(patients));
                            });
                        });
                    }
                    else {
                        data = JSON.parse(data)
                        // patientsArray = [...data, patientObj];
                        data.push(patientObj)
                        AsyncStorage.setItem('patients', JSON.stringify(data), () => {
                            AsyncStorage.getItem('patients', (err, result) => {
                                patients = JSON.parse(result);
                                //     patientsArray = [result]
                                //     patientsArray[data.length] = patientObj;
                                dispatch(ActionPatient.addPatient(patients));
                            });
                        });
                    }
                })

            }
            catch (error) {
                alert(error);
            }
        }
    }
    static asyncLoadPatient() {
        return (dispatch) => {
            AsyncStorage.getItem('patients', (err, result) => {
                patients = JSON.parse(result);
                // AsyncStorage.removeItem('patients')
                // console.log("data",patients);
                dispatch(ActionPatient.addPatient(patients));
            });
        }
    }
    static asyncDeletePatient(index) {
        return (dispatch) => {
            console.log(index);
            var patientArry = [];
            AsyncStorage.getItem('patients', (err, result) => {
                patientArry = JSON.parse(result);
                console.log(patientArry)
                patientArry.splice(index, 1);
                console.log(patientArry);
                AsyncStorage.setItem('patients', JSON.stringify(patientArry));
                dispatch(ActionPatient.addPatient(patientArry));
            })
        }
    }
    static asyncDeleteAllPatient() {
        return (dispatch) => {
            var newArray = [];
            AsyncStorage.getItem('patients', (err, result) => {
                patients = JSON.parse(result);
                newArray = patients.splice(0);
                dispatch(ActionPatient.addPatient(newArray));
            })
        }
    }
}
