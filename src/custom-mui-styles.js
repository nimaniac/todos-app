export const styles = {
    textFieldStyles: {
        width: 300,
        color: '#6f73d2',
        "& .MuiOutlinedInput-input": {
            color: '#6f73d2',
            fontWeight: 'bold'
        },
        "& .MuiInputLabel-root": {
            color: '#6f73d2'
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: '#6f73d2'
        },
        borderColor: 'yellow',
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: "#6f73d2",
            }
        },
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset.MuiOutlinedInput-notchedOutline": {
                borderColor: "#6f73d2",
            }
        },
        '& .MuiFormHelperText-root':{
            color:'red',
            fontSize:'15px',
            fontWeight:'bold'
        }
    },
    buttonStyles: {
        backgroundColor: '#83c9f4',
        color: '#6f73d2',
        fontWeight: 'bold',
        ":hover":{
            backgroundColor:'#6f73d2',
            color:'#83c9f4'
        }
    }
}

export const paperStyles = {
    backgroundColor: '#D9F0ff',
    width: '65vw', 
    height: '70vh',
    borderRadius: '8px',
}