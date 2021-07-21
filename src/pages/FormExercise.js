import React from 'react'
import {Form, Input, Button} from 'antd'


const FormExercise = () => {

    const onFinish = (e) => {
        console.log(e)
    }
    return (
        <div>
            <Form
                    layout="vertical"
                    onFinish={onFinish}
                    >
                    <Form.Item
                        label="Title"
                        name="title"
                        
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
                            },
                        ]}
                    >
                        <Input  />
                    </Form.Item>
                    
                    <Button type="primary" htmlType="submit" block>Submit</Button>
                    
                </Form>
        </div>
    )
}

export default FormExercise
