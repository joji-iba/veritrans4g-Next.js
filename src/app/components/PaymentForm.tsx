'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';

interface PaymentFormData {
  serviceOptionType: string;
  orderId: string;
  amount: string;
  cardNumber: string;
  cardExpire: string;
  jpo: string;
  withCapture: string;
  securityCode: string;
  redirectionUri: string;
  verifyResultLink: string;
  httpUserAgent: string;
  httpAccept: string;
  pushUrl: string;
  verifyTimeout: string;
  deviceChannel: string;
  accountType: string;
  cardholderName: string;
  cardholderNameOmitFlag: string;
  cardholderEmail: string;
  cardholderHomePhoneCountry: string;
  cardholderHomePhoneNumber: string;
  cardholderMobilePhoneCountry: string;
  cardholderMobilePhoneNumber: string;
  cardholderWorkPhoneCountry: string;
  cardholderWorkPhoneNumber: string;
  billingAddressCity: string;
  billingAddressCountry: string;
  billingAddressLine1: string;
  billingAddressLine2: string;
  billingAddressLine3: string;
  billingPostalCode: string;
  billingAddressState: string;
  shippingAddressCity: string;
  shippingAddressCountry: string;
  shippingAddressLine1: string;
  shippingAddressLine2: string;
  shippingAddressLine3: string;
  shippingPostalCode: string;
  shippingAddressState: string;
  customerIp: string;
  requestorChallengeIndicator: string;
  tempRegistration: string;
  token: string;
  accountId: string;
  cardId: string;
  defaultCard: string;
  groupId: string;
  startDate: string;
  endDate: string;
  oneTimeAmount: string;
  recurringAmount: string;
  memo1: string;
  freeKey: string;
  txnVersion: string;
  dummyRequest: string;
  merchantCcid: string;
}

const PaymentForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();

  const onSubmit = async (data: PaymentFormData) => {
    const requestData = {
      params: {
        ...data,
        payNowIdParam: {
          token: data.token,
          accountParam: {
            accountId: data.accountId,
            cardParam: {
              cardId: data.cardId,
              defaultCard: data.defaultCard,
            },
            recurringChargeParam: {
              groupId: data.groupId,
              startDate: data.startDate,
              endDate: data.endDate,
              oneTimeAmount: data.oneTimeAmount,
              recurringAmount: data.recurringAmount,
            },
          },
          memo1: data.memo1,
          freeKey: data.freeKey,
        },
      },
      authHash: "7dab70d5b9e2e184204249eedb57d89696af57ab7bc3609918df441cf3be5f3a",
    };

    try {
      const response = await axios.post(
        'https://api3.veritrans.co.jp/test-paynow/v2/Authorize/mpi',
        requestData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('serviceOptionType')} defaultValue="mpi-complete" hidden />
      <input {...register('orderId')} defaultValue="dummy0000001" hidden />
      <input {...register('amount')} defaultValue="5000" hidden />
      <input {...register('cardNumber', { required: true })} placeholder="Card Number" />
      {errors.cardNumber && <span>Card Number is required</span>}
      <input {...register('cardExpire', { required: true })} placeholder="MM/YY" />
      {errors.cardExpire && <span>Card Expire is required</span>}
      <input {...register('jpo')} defaultValue="10" hidden />
      <input {...register('withCapture')} defaultValue="false" hidden />
      <input {...register('securityCode', { required: true })} placeholder="Security Code" />
      {errors.securityCode && <span>Security Code is required</span>}
      <input {...register('redirectionUri')} defaultValue="https://example.com/redirect" hidden />
      <input {...register('verifyResultLink')} defaultValue="1" hidden />
      <input {...register('httpUserAgent')} defaultValue="" hidden />
      <input {...register('httpAccept')} defaultValue="" hidden />
      <input {...register('pushUrl')} defaultValue="https://example.com/push" hidden />
      <input {...register('verifyTimeout')} defaultValue="10" hidden />
      <input {...register('deviceChannel')} defaultValue="02" hidden />
      <input {...register('accountType')} defaultValue="02" hidden />
      <input {...register('cardholderName', { required: true })} placeholder="Cardholder Name" />
      {errors.cardholderName && <span>Cardholder Name is required</span>}
      <input {...register('cardholderNameOmitFlag')} defaultValue="false" hidden />
      <input {...register('cardholderEmail')} defaultValue="test@example.com" hidden />
      <input {...register('cardholderHomePhoneCountry')} defaultValue="81" hidden />
      <input {...register('cardholderHomePhoneNumber')} defaultValue="0312345678" hidden />
      <input {...register('cardholderMobilePhoneCountry')} defaultValue="81" hidden />
      <input {...register('cardholderMobilePhoneNumber')} defaultValue="09012345678" hidden />
      <input {...register('cardholderWorkPhoneCountry')} defaultValue="81" hidden />
      <input {...register('cardholderWorkPhoneNumber')} defaultValue="0312345678" hidden />
      <input {...register('billingAddressCity')} defaultValue="city" hidden />
      <input {...register('billingAddressCountry')} defaultValue="392" hidden />
      <input {...register('billingAddressLine1')} defaultValue="address1" hidden />
      <input {...register('billingAddressLine2')} defaultValue="address2" hidden />
      <input {...register('billingAddressLine3')} defaultValue="address3" hidden />
      <input {...register('billingPostalCode')} defaultValue="1234567" hidden />
      <input {...register('billingAddressState')} defaultValue="13" hidden />
      <input {...register('shippingAddressCity')} defaultValue="city" hidden />
      <input {...register('shippingAddressCountry')} defaultValue="392" hidden />
      <input {...register('shippingAddressLine1')} defaultValue="address1" hidden />
      <input {...register('shippingAddressLine2')} defaultValue="address2" hidden />
      <input {...register('shippingAddressLine3')} defaultValue="address3" hidden />
      <input {...register('shippingPostalCode')} defaultValue="1234567" hidden />
      <input {...register('shippingAddressState')} defaultValue="13" hidden />
      <input {...register('customerIp')} defaultValue="192.0.2.1" hidden />
      <input {...register('requestorChallengeIndicator')} defaultValue="01" hidden />
      <input {...register('tempRegistration')} defaultValue="0" hidden />
      <input {...register('token')} defaultValue="12345678901234567890" hidden />
      <input {...register('accountId')} defaultValue="1234567890" hidden />
      <input {...register('cardId')} defaultValue="string" hidden />
      <input {...register('defaultCard')} defaultValue="1" hidden />
      <input {...register('groupId')} defaultValue="string" hidden />
      <input {...register('startDate')} defaultValue="string" hidden />
      <input {...register('endDate')} defaultValue="string" hidden />
      <input {...register('oneTimeAmount')} defaultValue="string" hidden />
      <input {...register('recurringAmount')} defaultValue="string" hidden />
      <input {...register('memo1')} defaultValue="memo1" hidden />
      <input {...register('freeKey')} defaultValue="freekey" hidden />
      <input {...register('txnVersion')} defaultValue="2.0.0" hidden />
      <input {...register('dummyRequest')} defaultValue="1" hidden />
      <input {...register('merchantCcid')} defaultValue="A000000000000000000000cc" hidden />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
