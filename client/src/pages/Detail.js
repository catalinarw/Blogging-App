import React, { useEffect } from "react";

import { Col, Row, Container } from "../components/Grid";

import API from "../utils/API";

import { useStoreContext } from "../utils/GlobalState";

import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

import { PageHeader } from 'antd';

const Detail = props => {

  const [state, dispatch] = useStoreContext();

  useEffect(() => {

    API.getPost(props.match.params.id)

      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))

      .catch(err => console.log(err));

  }, []);

  const addFavorite = () => {

    dispatch({

      type: ADD_FAVORITE,

      post: state.currentPost

    });

  };

  const removeFavorite = () => {

    dispatch({

      type: REMOVE_FAVORITE,

      _id: state.currentPost._id

    });

  };

  return (

    <>
      {state.currentPost ? (
        <Container fluid>

          <Row>

            <Col size="md-12">

              <PageHeader

                className="site-page-header"

                onBack={() => window.history.back()}

                title={state.currentPost.title} 

                subTitle={state.currentPost.author}

                extra=

                  {state.favorites.indexOf(state.currentPost) !== -1 ? (

                    <button className="btn btn-danger" onClick={removeFavorite}>

                      Remove from Favorites!

                    </button>

                  ) : (

                    <button className="btn" onClick={addFavorite}>

                      ❤️ Add to Favorites

                    </button>

                  )}
    
              />
       
            </Col>

          </Row>

          <Row>

            <Col size="md-10 md-offset-1">

              <article>

                <h1>Content:</h1>

                <p>{state.currentPost.body}</p>

              </article>

            </Col>
        
          </Row>
      
        </Container>

      ) : (

        <div>loading...</div>

      )}

    </>

  );
  
};

export default Detail;
