import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { PageHeader, Button } from 'antd';

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <PageHeader
    className="site-page-header"
    
    title="BLOG"
    subTitle="a content managment system"
   
  />
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
      <Button key="1" type="primary">
        <a href="/favorites">View Favorites</a>
      </Button>
    </nav>
  );
}

export default Nav;
