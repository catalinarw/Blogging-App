import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { Form, Input, Button, Typography } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text, Link } = Typography;
function CreatePostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();
  
  const onFinish = values => {
    console.log('Received values of form:', values);
    API.savePost({
      title: values.titleRef,
      body: values.bodyRef,
      author: values.authorRef
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";

  };
  const handleSubmit = e => {
    // e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <>
   <Typography>
     <Title level={3}>Create New Post</Title>
   </Typography>
    
<Form
     onFinish={onFinish}
     
    >
      <Form.Item
        label="Title"
        name="titleRef"
        
        rules={[{ required: true }]}
      >
        < Input   />
      </Form.Item>
      <Form.Item
        label="Author"
        name="authorRef"
        
        rules={[{ required: true }]}
      >
        < Input  />
      </Form.Item>
      <Form.Item
        label="Body"
        name="bodyRef"
       
        rules={[{ required: true  }]}
      >
        <TextArea rows={10} />
      </Form.Item>


     

      <Form.Item>
        <Button onClick={handleSubmit}type="primary" disabled={state.loading}  htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    
 
    </>
  );
}

export default CreatePostForm;
