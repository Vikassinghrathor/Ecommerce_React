import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import DesktopBookingsummary from './DesktopBookingsummary';
import { Text } from './Text';

const DesktopSummary = () => {
  return (
    <>
      <DesktopBookingsummary
        className="bg-white-A700 border border-gray-300_01 border-solid flex sm:flex-1 flex-col font-opensans items-start justify-start rounded-[24px] w-96 sm:w-full"
        termandconditionOne={
          <Text className="leading-[20.00px] max-w-[352px] md:max-w-full text-gray-700_01 text-xs">
            <span className="text-gray-700_01 font-opensans text-left font-normal">
              By clicking “confirm & pay”, you agree to{' '}
            </span>
            <Link
              to="/terms-and-conditions"
              className="text-indigo-500 font-opensans text-left font-normal underline"
            >
              Tickete’s general terms and conditions
            </Link>
            <span className="text-gray-700_01 font-opensans text-left font-normal">
              {' '}
              and{' '}
            </span>
            <Link
              to="/cancellation-policy"
              className="text-indigo-500 font-opensans text-left font-normal underline"
            >
              cancellation policy
            </Link>
            <span className="text-gray-700_01 font-opensans text-left font-normal">
              .
            </span>
          </Text>
        }
      />
    </>
  );
};

export default DesktopSummary;
