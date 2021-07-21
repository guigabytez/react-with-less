import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { Table, Space, Button, Modal, Row, Col, Form, Input } from 'antd';
import { EditFilled, DeleteFilled, ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import PostEditForm from './post_pages/PostEditForm'
import PostDeleteForm from './post_pages/PostDeleteForm'
import PostAddForm from './post_pages/PostAddForm'
import SearchForm from './post_pages/SearchForm';
import postsUrl from '../variables'
import DateFormatter from '../utils/DateFormatter'

const Post = () => {
    const [postsData, setPostsData] = useState([])
    
    // const { state: { key } } = useLocation()
    // console.log('key: ', key);
    const [willRender, setReRender] = useState('')
   
    useEffect(() => {
        // console.log('rerender',key)
       const postsRequest = async () => {
           const posts = await axios({
               method: 'get',
               url: postsUrl.BASE_URL
           })
           setPostsData(posts.data)
           setFilterPostsData(posts.data)
       }
       postsRequest()
      
    }, [willRender])
    // [key])
   

    const columns = [
          // serves as column
        { title: 'Title', dataIndex: 'title', key: '_id'},
        { title: 'Description', dataIndex: 'description', key: '_id' },
        { title: 'Date', dataIndex: 'date', key: '_id',
            render: (date) => {
                return DateFormatter.formatDate(date)
            }
        },
        { title: 'Post ID', dataIndex: '_id', key: 'id'},
        { title: 'Action', key: 'action',
            render: ( text ) => {
                
                return (
                    <Space size="middle">   
                        
                        <Button
                            type="primary" 
                            icon={<EditFilled />} 
                            onClick={() => {
                                showModal('isEditModal', text)
                            }}
                        >Edit</Button>   
                        <Button onClick={()=>{
                            showModal('isDeleteModal', text)
                        }} icon={<DeleteFilled />} danger>Delete</Button>                                         
                    </Space>
            )},
        },
    ];
    // -----
    const [ form ] = Form.useForm()
    const [filterPostsData, setFilterPostsData] = useState(postsData)

    const onFinish = async (value) => {
        
    
        let result = {}
        
        result = postsData.filter( ({ title }) => {
            // console.log('value: ', value);
            if(value === title) return console.log('title: ', title);
                       
           
            
        })
        setFilterPostsData(result)
        setReRender(Math.random())
  
    }
    // -----------
    

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [type, setType] = useState('')
    const [recordData, setData] = useState('')
    const [titleModal, setTitleModal] = useState('')

    const showModal = (type, record) => {
        setData(record)
        setType(type)
        if(type === "isEditModal"){
            setTitleModal('Edit Post')
        } else {
            setTitleModal('Delete Post')
        }
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleConfirm = () => {
        setIsModalVisible(false);
    }

   

    return (
        <div>
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


            <Row justify='space-between'>
                {/* <Col span={18}><SearchForm postsSearchData={postsData} rerender={(value) => setReRender(value)}/></Col> */}
                <Col span={6}><PostAddForm 
                    rerender={(value) => setReRender(value)}
                /></Col>
            </Row>
            <Table dataSource={postsData} columns={columns} />
            <Modal 
                title={titleModal} 
                visible={isModalVisible} 
                footer={null}
                closable={false}
                destroyOnClose={true}
                icon={<ExclamationCircleOutlined />}
            >
                {
                    type === "isEditModal" 
                    ?  <PostEditForm 
                            onHandleConfirm={handleConfirm}
                            isModalVisible={isModalVisible} 
                            rerender={(value) => setReRender(value)} 
                            onCallBackHandleCancel={handleCancel} 
                            postEditData={recordData}
                        />
                    :  <PostDeleteForm 
                            rerender={(value) => setReRender(value)}
                            isModalVisible={isModalVisible} 
                            onCallBackHandleCancel={handleCancel} 
                            // onHandleConfirmFromDeleteForm={handleConfirmFromDeleteForm}
                            onHandleConfirm={handleConfirm}
                            postDeleteData_id={recordData._id}
                        />
                }
             </Modal>          
        </div>
    )
    
}

export default Post
