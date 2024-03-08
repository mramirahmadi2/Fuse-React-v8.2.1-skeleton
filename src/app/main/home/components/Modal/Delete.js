import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ show, close, id }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(show);
  }, [show])

  const handleClose = () => {
    setOpen(false);
    close();
  };

  const handleDeleteItem = () => {
    // حذف آیتم از localStorage با استفاده از کلید مستقیم (به عنوان id)
    localStorage.removeItem(id);
    // بستن پنجره دیالوگ
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className='text-start'>
          <div dir='rtl'>{"آیا از حذف این آیتم اطمینان دارید؟"}</div> 
        </DialogTitle>
       
        <DialogActions className='flex flex-row items-center justify-start'>
          <Button onClick={handleClose}>لغو</Button>
          <button onClick={handleDeleteItem} className='bg-red-500 text-white px-14 py-4 rounded-xl'>حذف</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
