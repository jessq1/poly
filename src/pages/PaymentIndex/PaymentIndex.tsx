import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPayments, getIncompeltePayments, getPendingPayments } from '../../services/paymentService'

import {IPayment} from '../../types/models'

import {Box, Grid, Typography} from '@mui/material';

interface IProps {
    userProfile: any,
}

const PaymentIndex: React.FC<IProps> = ({ userProfile }) => {
    const [allPayments, setAllPayments] = useState<IPayment[]>([])


    useEffect(()=> {
		getPayments()
		.then(allPayments => setAllPayments(allPayments))
	}, [])

  return (
      <>
      <Box ml={5} mr={5} my={3}>
      <Typography variant={'h4'}>All Payments:</Typography>
      <Box ml={5} mr={5} my={3}>
      {allPayments.map((payment) => (
        // <IncompeletePayments payment={payment}/>
         <Typography variant={'subtitle1'} key={payment._id}>{payment._id}</Typography>
      )
          )}
      </Box>
    
      </Box>
    </>
  );
}
 
export default PaymentIndex;