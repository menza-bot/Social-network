

export const required = (value) => {
    if (!value) { return 'Field is required' }
    if (value) { return undefined }
}



export const maxLengthThunkCreator = ( maxLength ) => ( value ) => {
    if (value.length > maxLength) 
        return `MaxLength is ${maxLength} symbols`
    
    return undefined
}