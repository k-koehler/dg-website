import { Avatar, Card, Menu } from "antd";
import React from "react";
import {
  FieldTimeOutlined,
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Records from "./records/records";

/*
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
 <Router>
        <Switch>
          <Route path="/success/:id" component={SuccessPage} />
          <Route path="/blog-article/:blogId" component={BlogArticle} />
          <Route path={"/trip/:tripId"} component={TripById} />
          <Route path={"/trips"} component={Trips} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path={"/"} component={Home} />
        </Switch>
      </Router>
      */

enum TopLevelView {
  Records = "records",
  Floors = "floors",
  Players = "players",
}

export function Placeholder() {
  return <>Coming Soon</>;
}

export default function App() {
  const [menuItem, setMenuItem] = useState(TopLevelView.Records);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#d3d3d3",
        overflowY: "scroll",
      }}
    >
      <div className="w-full flex flex-row justify-end pr-8 py-4">
        <div className="flex flex-col">
          <Avatar
            size="large"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          />
          <a href="/">Profile</a>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <Card
          className="w-2/3 my-8"
          title={
            <Menu
              mode="horizontal"
              className="flex flex-row justify-around"
              selectedKeys={[menuItem]}
              onClick={(e) => setMenuItem(e.key as TopLevelView)}
            >
              <Menu.Item
                key={TopLevelView.Records}
                icon={<FieldTimeOutlined />}
              >
                Records
              </Menu.Item>
              <Menu.Item
                key={TopLevelView.Floors}
                icon={<OrderedListOutlined />}
              >
                Floors
              </Menu.Item>
              <Menu.Item key={TopLevelView.Players} icon={<UserOutlined />}>
                Players
              </Menu.Item>
            </Menu>
          }
        >
          {(() => {
            switch (menuItem) {
              case TopLevelView.Records:
                return <Records />;
              default:
                return <Placeholder />;
            }
          })()}
        </Card>
      </div>
    </div>
  );
}
