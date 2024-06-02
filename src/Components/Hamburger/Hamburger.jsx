import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import './Hamburger.css';
import { useTranslation } from "react-i18next";
import { hamburger } from "../../assets";

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
          <li onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#">{t("main")}</a></li>
          <li onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#about">{t("about")}</a></li>
          <li onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#offer">{t("species")}</a></li>
          <li onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#favorites">{t("contact")}</a></li>
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