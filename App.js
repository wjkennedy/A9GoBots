import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await invoke('getExample');
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => invoke('close')}>Close</button>
    </div>
  );
}
