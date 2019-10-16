import React from "react";

import { useAudiate } from "audiate";

const App: React.FC = () => {
  const [audioContextState, isEnabled] = useAudiate();
  return (
    <pre>
      <code>{JSON.stringify({ audioContextState, isEnabled })}</code>
    </pre>
  );
};

export default App;
