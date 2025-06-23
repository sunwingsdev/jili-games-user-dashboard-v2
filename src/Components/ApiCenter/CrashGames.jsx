import ApiDataSections from "./ApiDataSections";


const CrashGames = () => {
  const sections = [
    { title: "Call Back URL", value: "{ role: 'user', content: 'knock knock.' } onst response = await openai." },
    { title: "API Keys", value: "DFAJMSDFFKDFSDLFK’E3ODKFSDFKSDFSDFSD" },
    { title: "Game Link", value: "https://qtechgames.com/slots" },
  ];

  const buttons = [
    { label: "Crash Games", onClick: () => alert("Crash clicked") },
    { label: "Developer Hub", onClick: () => alert("Developer Hub clicked") },
  ];

  return <ApiDataSections data={sections} headerButtons={buttons} />;
};

export default CrashGames;
