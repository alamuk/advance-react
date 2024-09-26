import { useEffect, useState } from 'react';

export function WithSubcription(WrappedComponent, selectData) {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        setData(newData);
      };
      DataSource.addEventListener(handleChange);
      return () => {
        DataSource.removeEventListener(handleChange);
      };
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
}

export default WithSubcription;

// selectData is a function that determines the type of data we are getting from the data source. // here is either orders or users.

// const LiveOrdersListWithSubscription = withSubcription(
//   LiveOrders,
//   () => DataSource.getOrders
// );
//
// const UsersSubscribedWithSubscription = withSubcription(UserList, () =>
//   DataSource.getSubscribers(),
// );
