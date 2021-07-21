import React, {useState,useEffect} from 'react'
import { Form, Input, Button, Row, Col,  } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import AlertMessage from '../../common/AlertMessage'
// import axios from 'axios';
// import postsUrl from '../../variables'

const SearchForm = (props) => {
    // console.log('props: ', props);
    const [ form ] = Form.useForm()
    const [filterPostsData, setFilterPostsData] = useState( props.postsSearchData)
    // console.log('props.postsData: ', props.postsData);
    // const [, forceUpdate] = useState({})

    // useEffect(() => {
    //     forceUpdate({});
    //   }, []);

    const onFinish = async (searchInput) => {
        console.log('searchInput: ', searchInput);
        let result = []
        
        result = props.postsSearchData.filter( ({ title, description }) => {
            console.log('title, description: ', title, description);
            
           
            return title.search(searchInput) || description.search !== 1
        })
        if(result){
           
            setFilterPostsData(result)
            props.rerender(Math.random())
        }else{
            AlertMessage.onError('No result found')
        }

    //    const searchResult = await axios({
    //        method: 'get',
    //        url: postsUrl.BASE_URL,        
    //        data: searchInput
    //    })
       
    }
    
    return (
        <>
            <Form 
                form = {form}
                name="search_bar"
                onFinish={onFinish}
            >
                <Row >
                    <Col span={12}>
                        <Form.Item
                            name="search"
                            rules={[{ required: true, message: 'Please have some input' }]}
                        >
                            <Input prefix={<SearchOutlined />} placeholder="Search Post..." />
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
