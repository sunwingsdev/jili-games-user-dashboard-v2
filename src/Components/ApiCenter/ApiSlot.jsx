import ApiDataSections from "./ApiDataSections";


const ApiSlot = () => {
  const sections = [
    { title: "Call Back URL", value: "{ role: 'user', content: 'knock knock.' } onst response = await openai." },
    { title: "API Keys", value: "DFAJMSDFFKDFSDLFK’E3ODKFSDFKSDFSDFSD" },
    { title: "Game Link", value: "https://qtechgames.com/slots" },
  ];

  const buttons = [
    { label: "Slots", onClick: () => alert("Slots clicked") },
    { label: "Developer Hub", onClick: () => alert("Developer Hub clicked") },
  ];

  return <ApiDataSections data={sections} headerButtons={buttons} />;
};

export default ApiSlot;
