"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { DeleteUsuario } from '@/actions/usuarioActions';
import { useRouter } from 'next/navigation'; 

export default function DropDown({id}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { push } = useRouter()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEdit = () => {
    push("/usuario/" + id)
  };

  const handleDelete = () => {
    setAnchorEl(null);
    DeleteUsuario(id);
  };

  const handeleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ChevronDownIcon className='h-4 w-4'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handeleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleDelete}>Apagar</MenuItem>
        <MenuItem onClick={handleEdit}>Editar</MenuItem>
      </Menu>
    </div>
  );
}