import React from 'react'
import accountDelete from '../../assets/delete-user.svg'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import warning from '../../assets/warning.svg'

const AccountDelete = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{minHeight: '80vh'}}>
      <div>
        <img src={accountDelete} alt="" />
      </div>
      <h5 className='mt-3 text-center' style={{maxWidth: '260px'}}>Are you sure you want to delete your account ?</h5>
      <Button className='rounded-btn my-3' variant="outlined" onClick={handleClickOpen}>
        DELETE ACCOUNT
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: '12px', // if you want rounded corners
          }
        }}
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent className='d-flex flex-column justify-content-center align-items-center my-5'>
          <DialogContentText>
            <div className='text-center mb-4'>
              <img src={warning} alt="warning" />
            </div>
            <h5 className='text-center text-black'>Once you delete the account there’s no way to get it back. Make sure you want to <br /> delete it.</h5>
          </DialogContentText>
          <Button className='rounded-btn my-3 px-4' variant="outlined" onClick={handleClickOpen}>
            YES, DELETE ACCOUNT
          </Button>
          <Button onClick={handleClose} style={{color: '#616161'}}>NO, KEEP IT</Button>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
          {/* <Button className='rounded-btn my-3' variant="outlined" onClick={handleClickOpen}>
            DELETE ACCOUNT
          </Button> */}
        </DialogActions>
      </Dialog>

      {/* <button className='rounded-btn my-3'>DELETE ACCOUNT</button> */}
      <p style={{fontSize: '14px', fontWeight: '600'}} onClick={() => navigate('/other')}>KEEP ACCOUNT</p>
    </div>
  )
}

export default AccountDelete
