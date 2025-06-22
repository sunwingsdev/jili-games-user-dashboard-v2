import CommonDepositForm from "./CommonDepositForm";


const PayoneerInfo = () => {
  return (
    <CommonDepositForm
      title="Payoneer Pay"
      titleColor="#F3BA2F" // Payoneer primary color
      bgColor="bg-bgPayoneer" 
      idLabel=" Payoneer A/C"
      idValue="gvsj159@gmail.com "
      noteText="Make this Payoneer account payment and upload the screenshot below."
      inputIdLabel=" Your Payoneer A/C E-mail "
      inputIdPlaceholder=" Type your Payoneer A/C E-mail"
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
    />
  );
};

export default PayoneerInfo;
