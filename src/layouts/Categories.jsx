import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Menu } from "semantic-ui-react";

export default function Categories() {
  const [active, setActive] = useState("");

  const handleItemClick = (e, { active }) => {
    setActive(active.active);
  };

  return (
    <Grid>
      <Grid.Column>
        <Menu fluid fixedTop vertical tabular color="violet" >
          <Menu.Item
            as={NavLink}
            to="/jobAdverts"
            name="JobAdverts"
            active={active === "JobAdverts"}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/jobSeekers"
            name="JobSeekers"
            active={active === "JobSeekers"}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/jobPositions"
            name="JobPositions"
            active={active === "JobPositions"}
            onClick={handleItemClick}
          />
        </Menu>
      </Grid.Column>
    </Grid>
  );
}
