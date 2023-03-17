import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxOutlined from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { UIContext } from '../../context/ui';

function Sidebar() {
  const menuITems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);
  return (
    <Drawer 
      anchor="left"
      open={sideMenuOpen}
      onClose={closeSideMenu}
    >
      <Box sx={{width: 250}}>
        <Box sx={{ padding: '5px 10px'}}>
          <Typography variant='h4'>Menu</Typography>
        </Box>
        <List>
          {
            menuITems.map((text, index) => {
              return (
                <ListItem button key={ text } >
                  <ListItemIcon>
                    { index % 2 ? <InboxOutlined /> : <MailOutlineOutlinedIcon /> }
                  </ListItemIcon>
                  <ListItemText primary={ text } />
                </ListItem>
              );
            })
          }
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}

export default Sidebar;