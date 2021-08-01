import React from 'react'
import { Row, Button } from 'antd'

const CustomModalButton = (props) => {
    const { form, onCallBackHandleCancel } = props

    const callBackHandleConfirm = (postDeleteID) => {
        props.onCallBackHandleConfirm(postDeleteID)
    }

    const callBackHandleCancel = () => {
        onCallBackHandleCancel()
        form.resetFields()
    };

    return (
        <Row justify='end'>
            <Button type="default" style={{marginRight:'10px'}} onClick={callBackHandleCancel} >Cancel</Button>
            {
                props.action === 'delete' 
                ? <Button type="primary" onClick={callBackHandleConfirm}>Delete</Button> 
                : <Button type="primary" htmlType="submit" >Yes</Button>
            }
            
        </Row>
    )
}

export default CustomModalButton
