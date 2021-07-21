import React, {useState} from 'react'
import { Modal, Button, Form, Input} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import postsUrl from '../../variables'
import CustomModalButton from '../../common/CustomModalButton';
import messageAlert from '../../common/AlertMessage'
// import { useHistory } from 'react-router-dom';

const AddPostForm = (props) => {
    // const history = useHistory()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ form ] = Form.useForm()

     const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    const onFinish = async (inputValues) => {
       
        const result = await axios({
            method:'post',
            url: postsUrl.BASE_URL,
            data: inputValues
        })  
        if(result.data){
            // console.log('onFinish render')
            messageAlert.onSuccess('Great! You have successfully added the post.')
            form.resetFields()
            props.rerender(Math.random())
            // history.push('/posts',{ key: result.data._id })
        }else {
            messageAlert.onError('Opps! That did not work.')
        }
    }
    
    return (
        <>
            <Button 
                style={{ float:'right'}}
                type="primary" 
                icon={<PlusCircleOutlined />} 
                onClick={showModal}
            >Post</Button>
            
            <Modal  title="Add Post" visible={isModalVisible} footer={null} closable={false}>
                <Form layout="vertical" onFinish={onFinish} form={form} validateTrigger={['onSubmit','onChange']}>  
                    <Form.Item label="Title" name="title" rules={[ { required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description" rules={[ { required: true,message: 'Please input your description!'}]}>
                        <Input  />
                    </Form.Item>
                    <CustomModalButton form={form} onCallBackHandleCancel={handleCancel}/>
                </Form>
            </Modal>
            {/* {console.log('Add render: ')} */}
        </>
    );
}

export default AddPostForm
// const [input, setInput] = useState(
    //     {
    //         title: '',
    //         description: '',
    //     }
    // )
    
    // const onFinish = (fields) => {
    //     console.log('fields: ', fields);
    //     setInput({
    //         ...input,
    //         ...fields
    //     })     
    // }