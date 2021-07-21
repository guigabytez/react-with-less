import {message} from 'antd'

const messageAlert = {

    onSuccess: (successMessage) => {
        message.success(successMessage)
    },
    onError: (errorMessage) => {
        message.error(errorMessage)
    }

}

export default messageAlert