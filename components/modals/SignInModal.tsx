import React from 'react';
import { Modal } from 'flowbite-react';
import { GoogleIcon } from '../svg/GoogleIcon';

//create prop type for onClose which is a function that returns void
type SigninProps = {
  onClose: () => void;
  onGoogleClick: () => void;
  show: boolean;
};

const Signin = ({ onClose, onGoogleClick, show }: SigninProps) => {
  return (
    <>
      <Modal show={show} size='md' popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='w-full p-4'>
            <p
              aria-label='Login to your account'
              className='text-2xl font-extrabold leading-6 text-gray-800 mt-[-25px]'
            >
              Sign to your account
            </p>
            <button
              aria-label='Continue with google'
              role='button'
              className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
              onClick={onGoogleClick}
            >
              <GoogleIcon />
              <p className='text-base font-medium ml-4 text-gray-700'>Continue with Google</p>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signin;
