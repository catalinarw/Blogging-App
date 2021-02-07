import React, { useEffect } from "react";
// import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


function PostsList() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

console.log(state.posts);
const data = state.posts
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href={"/posts/" + item._id}>{item.title} by {item.author}</a>}
          description={item.body}
        />
        <DeleteBtn onClick={() => removePost(item._id)} />
      </List.Item>
    )}
  />
  
    // <div>
    //   <h1>All Blog Posts</h1>
    //   <h3 className="mb-5 mt-5">Click on a post to view</h3>
    //   {state.posts.length ? (
    //     <List>
    //       {state.posts.map(post => (
    //         <ListItem key={post._id}>
    //           <Link to={"/posts/" + post._id}>
    //             <strong>
    //               {post.title} by {post.author}
    //             </strong>
    //           </Link>
    //           <DeleteBtn onClick={() => removePost(post._id)} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   ) : (
    //     <h3>You haven't added any posts yet!</h3>
    //   )}
    //   <div className="mt-5">
    //     <Link to="favorites">View favorites</Link>
    //   </div>
    // </div>
  )
}

export default PostsList;
