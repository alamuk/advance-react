import withSubcription from './WithSubcription.jsx';

const LiveOrdersListWithSubscription = withSubcription(
  LiveOrders,
  () => DataSource.getOrders,
);

const UsersSubscribedWithSubscription = withSubcription(UserList, () =>
  DataSource.getSubscribers(),
);
