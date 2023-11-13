import React, { useEffect, useState } from 'react';

function Profile() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://flexhire.com/api/v2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'FLEXHIRE-API-KEY': 'v4zf7guf9eucr3c5',
          },
          // Add any additional body parameters if required
          // body: JSON.stringify({ key: 'value' }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setRecords(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
