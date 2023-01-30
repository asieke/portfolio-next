import React from 'react';
import { Modal } from 'flowbite-react';
import { GoogleIcon } from './svg/GoogleIcon';

//create prop type for onClose which is a function that returns void
type SignupProps = {
  onClose: () => void;
  show: boolean;
};

const Signin = ({ onClose, show }: SignupProps) => {
  return (
    <>
      <Modal show={show} size='md' popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='w-full p-4'>
            <p
              aria-label='Login to your account'
              className='text-2xl font-extrabold leading-6 text-gray-800'
            >
              Sign up for a new Account
            </p>
            <button
              aria-label='Continue with google'
              role='button'
              className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
            >
              <GoogleIcon />
              <p className='text-base font-medium ml-4 text-gray-700'>Continue with Google</p>
            </button>

            <div className='w-full flex items-center justify-between py-5'>
              <hr className='w-full bg-gray-400' />
              <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>OR</p>
              <hr className='w-full bg-gray-400  ' />
            </div>
            <div>
              <label className='text-sm font-medium leading-none text-gray-800'>Email</label>
              <input
                aria-label='enter email adress'
                role='input'
                type='email'
                className='bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
              />
            </div>
            <div className='mt-6  w-full'>
              <label className='text-sm font-medium leading-none text-gray-800'>Password</label>
              <div className='relative flex items-center justify-center'>
                <input
                  aria-label='enter Password'
                  role='input'
                  type='password'
                  className='bg-gray-100 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />
              </div>
            </div>
            <div className='mt-8'>
              <button
                role='button'
                aria-label='create my account'
                className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'
              >
                Create my account
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signin;
