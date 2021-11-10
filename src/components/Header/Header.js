import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";

import { routes } from "../../ui/routes";

export const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "1em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

export const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};

const Header = () => {
  const [state, setState] = useState({
    menuFixed: false,
    overlayFixed: false,
  });

  const stickTopMenu = () => setState({ menuFixed: true });

  const unStickTopMenu = () => setState({ menuFixed: false });

  return (
    <Visibility
      onBottomPassed={stickTopMenu}
      onBottomVisible={unStickTopMenu}
      once={false}
    >
      <Menu
        borderless
        fixed={state.menuFixed ? "top" : undefined}
        style={state.menuFixed ? fixedMenuStyle : menuStyle}
      >
        <Container text>
          <Menu.Item as={Link} to={routes.characters}>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item as={Link} to={routes.characters} exact>
            Characters
          </Menu.Item>
          <Menu.Item as={NavLink} to={routes.episodes} exact>
            Episodes
          </Menu.Item>
          <Menu.Item as={NavLink} to={routes.locations} exact>
            Locations
          </Menu.Item>
          <Menu.Item as={NavLink} to={routes.myWatchList} exact>
            My Watch List
          </Menu.Item>
        </Container>
      </Menu>
    </Visibility>
  );
};

export default Header;
