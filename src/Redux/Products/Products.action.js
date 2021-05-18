export const fetchingS = i => ({
    type:'FETCH_SUCCESS',
    payload:i
})

export const fetchingE =()=>({
    type: 'FETCH_ERROR'
})