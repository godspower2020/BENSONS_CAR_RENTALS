// import React, {useState} from 'react';
// import 'date-fns';
// import DateFnsUtils from 'date-io/date-fns';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import { MuiPickersUtilsProvider, KeyboardDateTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

// import FormInput from './FormInput';

// const DatePicker = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

//     const handleDateChange = (date) => {
//         setSelectedDate(date)
//     }

//     return (
//         <FormInput>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <KeyboardDatePicker
//                     disableToolbar
//                     format='dd/MM/yyyy'
//                     margin='normal'
//                     id='date-picker'
//                     label='date picker'
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     KeyboardButtonProps={{
//                         'aria-label': 'change date'
//                     }} />
//             </MuiPickersUtilsProvider>
//         </FormInput>
//     )
// }

// export default DatePicker