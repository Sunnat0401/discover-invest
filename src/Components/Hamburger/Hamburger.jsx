import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import './Hamburger.css';
import { useTranslation } from "react-i18next";
import { hamburger } from "../../assets";
import { Link, NavLink } from "react-router-dom";

export default function TemporaryDrawer({ changeLanguages }) {
  const { t, i18n } = useTranslation();
  const languagess = localStorage.getItem('i18nextLng');

  const handleChanges = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(true);
  };

  const onCloseD = () => {
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 265 }}>
      <List className="hamburger-open">
        <ul className="hamburger-lists">
          <li onClick={onCloseD} className="hamburger-list"><NavLink className="hamburger-link" to="/about">{t("about")}</NavLink></li>
          <li onClick={onCloseD} className="hamburger-list"><NavLink className="hamburger-link" to="/projects">{t("projects")}</NavLink></li>
          <li onClick={onCloseD} className="hamburger-list"><NavLink className="hamburger-link" to="https://hr.di.uz/">{t("career")}</NavLink></li>
          <li onClick={onCloseD} className="hamburger-list"><NavLink className="hamburger-link" to="/news">{t("news")}</NavLink></li>
          <li onClick={onCloseD} className="hamburger-list"><NavLink className="hamburger-link" to="/connect">{t("connect")}</NavLink></li>
        </ul>
        <select onChange={handleChanges} value={languagess} className='navbar-select hamburger-select'>
          <option value="uz">Uz</option>
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}>
        <img src={hamburger} alt="hamburger" className="hamburger-img" />
      </Button>
      <Drawer open={open} onClose={onCloseD}>
        {DrawerList}
      </Drawer>
    </div>
  );
}