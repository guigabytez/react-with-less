import React, { useEffect, useState } from 'react'
import { Form, Input } from 'antd'
import CustomModalButton from '../../common/CustomModalButton';
import axios from 'axios';
import postsUrl from '../../variables'
import AlertMessage from '../../common/AlertMessage'


const PostEditForm = (props) => {
    const [ form ] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue(props.postEditData)
    }, [])
   
    const handleCancel = () => {
        props.onCallBackHandleCancel()
    };

    const onHandleConfirm = (value) => {
        props.onHandleConfirm()
    }

    const onFinish = async (editedValues) => {
        const editedPosts = await axios({
            method: 'PATCH',
           url: `${postsUrl.BASE_URL}/${props.postEditData._id}`,
           data: editedValues
        })
        if(editedPosts){
            onHandleConfirm(false)
            AlertMessage.onSuccess('Great! You have successfully edited the post.')
            props.rerender(Math.random())
        }else{
            AlertMessage.onError('Opps! That did not word. Try again.')
        }
    }
 
    return (
        <>
            <Form layout="vertical"
                onFinish={onFinish}
                form={form}
            >
                <Form.Item label="Title" name="title" rules={[{ required: true}]}>
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: true}]}>
                    <Input placeholder="Description" />
                </Form.Item>
                <Form.Item label="Post ID" name="_id">
                    <Input placeholder="Post ID" disabled/>
                </Form.Item>
                <CustomModalButton onHandleConfirm={onHandleConfirm} form={form} onCallBackHandleCancel={handleCancel} />
            </Form>      
        </>
    )
}

export default PostEditForm
