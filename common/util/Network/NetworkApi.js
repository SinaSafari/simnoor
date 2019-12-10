import { dispatch } from '../../../Redux/store'


const netWorkApi = async ({ method, url, successType, failedType, headerParams }) => {


    dispatch(asyncActionStart())

    const headers = {
        ...headerParams,
        'Content/type': 'Application/json'
    }


    await axios({
        method,
        url,
        headers
    })
        .then((res) => {
            dispatch(asyncActionFinish())
            dispatch({ type: successType, payload: res.data })
        })
        .catch((err) => {
            dispatch(asyncActionFinish())
            dispatch({ type: failedType })
            console.log(err)
        })


}


export default netWorkApi
