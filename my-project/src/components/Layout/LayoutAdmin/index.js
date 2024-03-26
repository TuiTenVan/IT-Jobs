/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuSider from "./MenuSider";
import Header from "./Header";
import "./LayoutAdmin.scss";
import { useSelector } from "react-redux";
const { Sider, Content } = Layout;

function LayoutAdmin() {
  const authen = useSelector((state) => state.authenReducer);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className="layout-admin">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout
          className={
            "layout-admin__main " + (collapsed && "layout-admin__main--fold")
          }
        >
          <Sider
            breakpoint="lg"
            className="layout-admin__sider"
            theme="light"
            collapsed={collapsed}
            width={230}
            onBreakpoint={(e) => setCollapsed(e)}
          >
            <MenuSider />
          </Sider>
          <Content className="layout-admin__content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default LayoutAdmin;
