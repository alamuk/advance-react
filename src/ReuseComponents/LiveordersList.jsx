import { useEffect, useState } from 'react';

export function LiveordersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handleNewOrder = () => {
      const newOrders = DataSource.getOrders;
      setOrders(newOrders);
    };
    DataSource.addEventListener(handleNewOrder);

    return () => {
      DataSource.removeEventListener(handleNewOrder);
    };
  }, []);

  return <LiveOrders orders={orders} />;
}

export default LiveordersList;
