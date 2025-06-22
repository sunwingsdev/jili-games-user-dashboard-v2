import CommonDepositForm from "./CommonDepositForm";

const BinanceInfo = () => {
  return (
    <CommonDepositForm
      title="Binance Pay"
      titleColor="#F3BA2F"
      bgColor="bg-bgBinance"
      idLabel="BINANCE PAY ID"
      idValue="1116031300"
      noteText="Make this Binance account payment and upload the screenshot below."
      inputIdLabel="Your Binance ID"
      inputIdPlaceholder="Type your Binance ID"
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
    />
  );
};

export default BinanceInfo;
