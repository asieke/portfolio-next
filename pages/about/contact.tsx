import { useEffect, useState } from 'react';

import axios from 'axios';

import Table from '@/components/Table';

//create and export an about component
const Contact = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('/api/users');
      setUsers(res.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Table title='My Hot Table' data={users} />
    </div>
  );
};

export default Contact;
