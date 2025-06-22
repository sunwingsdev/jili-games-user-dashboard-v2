import CommonDepositForm from "./CommonDepositForm";


const PayPalInfo = () => {
  return (
    <CommonDepositForm
      title="PayPal Pay"
     titleColor="#F3BA2F"  
      bgColor="bg-bgPaypal"
      idLabel=" Paypal A/C "
      idValue="oraclesoft.org@gmail.com"
      noteText="Make this PayPal account payment and upload the screenshot below."
      inputIdLabel="Your paypal A/C E-mail "
      inputIdPlaceholder="Type your paypal A/C E-mail"
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
    />
  );
};

export default PayPalInfo;
