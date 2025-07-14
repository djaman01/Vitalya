import { useState } from "react";
import { BiClinic } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUsersSolid } from "react-icons/lia";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="prose" style={{ display: "flex", height: "100%" }}>
      <Sidebar
        backgroundColor="#ededed"
        breakPoint="all"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        transitionDuration={600}
      >
        <Menu className="mt-10">
          <MenuItem
            component={<Link to="/" />}
            icon={<IoHomeOutline size={22} />}
          >
            Accueil
          </MenuItem>

          <SubMenu icon={<BiClinic size={24} />} label="La Clinique">
            <MenuItem component={<Link to="/memoire" />}>
              Qui sommes-nous ?
            </MenuItem>
            <MenuItem component={<Link to="/projetFinEtude" />}>
              Nos Soins
            </MenuItem>
            <MenuItem component={<Link to="/projetAgence" />}>
              Technologies
            </MenuItem>
          </SubMenu>

          <MenuItem
            icon={<LiaUsersSolid size={28} />}
            component={<Link to="/CV" />}
          >
            Notre Équipe
          </MenuItem>

          <MenuItem
            icon={<CiPhone size={24} />}
            component={<Link to="/contact" />}
          >
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>
      <button className="cursor-pointer" onClick={() => setToggled(!toggled)}>
        {toggled ? <RxCross1 size={28} /> : <RxHamburgerMenu size={28} />}{" "}
      </button>
    </div>
  );
};

export default SideBar;
