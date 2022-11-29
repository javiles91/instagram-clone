import { firebase, FieldValue } from "../lib/firebase";

export async function doesUserNameExist(userName) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", userName)
    .get();

  console.log(result.docs);

  const usersArr = result.docs.map((user) => user.data().length > 0);

  return Boolean(usersArr.length);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}
