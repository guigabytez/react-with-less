import React, {useState,useEffect} from 'react'
import { Form, Input, Button, Row, Col,  } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
// import AlertMessage from '../../common/AlertMessage'
import axios from 'axios';
import postsUrl from '../../variables'

const SearchForm = (props) => {
    const [searchOutput, setSearchOutput] = useState('')
    const [inputValue, setInputValue] = useState({
        title: '',
        description: ''
    })

    const [ form ] = Form.useForm()

    const handleInputChange = async ({ target }) => {
        setInputValue({ ...inputValue, title: target.value })
        const searchResult = await axios({
            method: 'get',
            url: `${postsUrl.BASE_URL}?search=${target.value}`,     
        })
        setSearchOutput(searchResult.data)
        props.onDataChange(searchResult.data)
    }
    
    // const handleFinish = async (searchInput) => {

       
    // }

    console.log('inputValue: ', inputValue);
   
    return (
        <>
            <Form 
                form = {form}
                name="search_bar"
                // onFinish={handleFinish}
                onChange={handleInputChange}
            >
                <Row >
                    <Col span={12}>
                        <Form.Item
                            name="search"
                            rules={[{ required: true, message: 'Please have some input' }]}
                        >
                            <Input name='search' prefix={<SearchOutlined />} placeholder="Search Post..." />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button style={{marginLeft: '5px'}}
                                    type="primary"
                                    htmlType="submit"
                                    disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter( ({ errors }) => errors.length).length
                                    }
                                >
                                    Search
                                </Button>
                            )}
                        </Form.Item> 
                    </Col>
                </Row>           
            </Form>
        </>
    )
}

export default SearchForm
