import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg"


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const options = [
    'Azerbaycan',
    'Türkiye',

];

export default function Header() {
    const link = [
        { name: "Ana Sayfa", to: "/" },
        { name: "Hakkımızda", to: "/about" },
        // { name: "Müşteri ol", to: "/customer" },
        { name: "Hizmetlerimiz", to: "/service" },
        { name: "Ücretlendirme", to: "/cash" },
        { name: "Bişöför ol", to: "/driver" },
        { name: "Kampaniyalar", to: "/campaign" },
        { name: "Blog", to: "/companies" },
        { name: "İletişim", to: "/contact" },
        { name: "FAQ", to: "/faq" },

    ]


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div class="pr-10">
                <div class="flex items-center justify-between">
                    <div >
                        <img src={Logo} alt="" class="w-48" />
                    </div>
                    <div>
                        <ul>
                            {link.map((page, index) =>
                                <Link to={`${page.to}`} key={index} className="p-4 mx-2 font-custom1 font-semibold hover:bg-yellow-300 transition ease-in hover:text-white">{page.name}</Link>
                            )}
                        </ul>
                    </div>
                    <div>
                        <List
                            component="nav"
                            aria-label="Device settings"
                            sx={{ bgcolor: 'background.paper' }}
                        >
                            <ListItem
                                button
                                id="lock-button"
                                aria-haspopup="listbox"
                                aria-controls="lock-menu"

                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickListItem}
                                class="font-bold text-base bg-yellow-300 p-2"
                            >
                                <ListItemText
                                    secondary={options[selectedIndex]}
                                    class="font-bold"
                                />
                            </ListItem>
                        </List>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'lock-button',
                                role: 'listbox',
                            }}
                        >
                            {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    // disabled={index === 0}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                </div>
            </div>
        </div >
    )
}
