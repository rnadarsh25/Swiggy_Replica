import firebase from '../firebase';

export const fetchAnyData = (url: string) => {
  const res = fetch(url);

  return res;
};

export const getDataFromStore = async () => {
  const items: any[] = [];
  const ref = await firebase.firestore().collection('restaurants');
  const res = await ref.get();

  (await res).forEach((doc) => {
    items.push(doc.data());
  });

  return await items;
};

export const getRestaurantWithId = async (restaId: number) => {
  let item;
  const ref = await firebase.firestore().collection('restaurants');
  const res = ref.where('id', '==', restaId).get();

  (await res).forEach((doc) => {
    item = doc.data();
  });

  return await item;
};

export const getMenusFromStore = async (id: number) => {
  const menuRef = await firebase.firestore().collection('menus');
  let menuItems: any[] = [];

  const res = await menuRef.where('restaurantId', '==', id).get();
  (await res).forEach((doc) => {
    menuItems.push(doc.data());
  });
  return await menuItems;
};

export const getUser = async (mobile: any) => {
  let user;
  const ref = await firebase.firestore().collection('users');
  const res = ref.where('mobile', '==', mobile).get();

  (await res).forEach((docs) => {
    user = docs.data();
  });
  return await user;
};

export const newRegistration = async (newUser: any) => {
  const ref = await firebase.firestore().collection('users');
  ref
    .doc(newUser.id)
    .set(newUser)
    .catch((err) => 'NewUser Registration Failed!!');

  return { res: true, data: newUser };
};
