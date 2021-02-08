import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { PageHeader } from 'antd';

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
    </nav>
  );
}

export default Nav;
