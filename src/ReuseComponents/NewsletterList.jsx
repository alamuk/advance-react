import { useEffect, useState } from 'react';

export function NewsletterList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleNewsletter = () => {
      const newUsers = DataSource.getSubscribers();
      setUsers(newUsers);
    };

    DataSource.addEventListener(handleNewsletter);
    return () => {
      DataSource.removeEventListener(handleNewsletter);
    };
  }, []);
  return <UserList users={users} />;
}

export default NewsletterList;
