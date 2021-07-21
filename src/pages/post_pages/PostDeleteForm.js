import React, {useState} from 'react'
import { Divider, Form } from 'antd'
// import { useHistory } from 'react-router-dom'
import CustomModalButton from '../../common/CustomModalButton'
import axios from 'axios'
import postsUrl from '../../variables'
import messageAlert from '../../common/AlertMessage'

const PostDeleteForm = (props) => {
    // const history = useHistory()
    const [isModalVisible, setIsModalVisible] = useState(props.isModalVisible);
    
    const [ form ] = Form.useForm()

    const handleCancel = () => {
        props.onCallBackHandleCancel()
    }

    const onHandleConfirm = () => {
        
        // console.log('value ni modal sulod sa confirmdelete: ', props.isModalVisible);
        setIsModalVisible(false)
        props.onHandleConfirm(isModalVisible)
        
    }

    const callBackHandleConfirm = async () => {
        // history.push('/posts', { key: props.postDeleteData_id })

        const deletePost = await axios({
            method:'delete',
            url: `${postsUrl.BASE_URL}/${props.postDeleteData_id}`
        })
        if(deletePost){
            onHandleConfirm()
            messageAlert.onSuccess('Great! You have successfully deleted the post.')
            props.rerender(Math.random())
            // history.push('/posts', { key: `${props.postDeleteData_id}qwerty` })
            // console.log('key from delete: ',  { key: props.postDeleteData_id });
        }else{
            messageAlert.onError('Opps. It did not work. Try again')
        }
    }
    // console.log('id from post', props.postDeleteData_id)
    return (
        <>        
            <h3>This action cannot be reverted.</h3>
            <h3>Are you sure you want to delete this post?</h3>
            <Divider />
            <CustomModalButton 
                isModalVisible={props.isModalVisible} 
                form={form} 
                action='delete' 
                onCallBackHandleCancel={handleCancel} 
                onCallBackHandleConfirm={callBackHandleConfirm}
            />     
            {/* {console.log('value ni modal after confirmdelete: ', isModalVisible)}            */}
        </>
    )
}

export default PostDeleteForm
