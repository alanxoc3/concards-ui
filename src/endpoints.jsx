import firebase from './firebase'

 //TODO remove those from the console
export function login(email, password) {
   return firebase.auth()
   .signInWithEmailAndPassword(email, password)
   .then((user) => {
    console.log(user);
   })
}

export function signup(email, password) {
   
   return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    });
}

export function search(searchText, resultsInPage) {

}

export function get_cards_from_group(groupId) {

}

export function get_groups_from_user(userId) {

}

export function get_batch(numInBatch, groups) {

}

export function submit_batch(cards) {

}

export function get_card_json(cardText) {

}

export function import_cards_advanced(cardText) {
    console.log(firebase.auth().currentUser.uid);
     firebase.database().ref()
                       .child("users")
                       .child(firebase.auth().currentUser.uid)
                       .push({answer: "test1", group: "test", notes: "test", question: "test"});
                    //    .child(firebase.auth().currentUser.getIdToken)
                       
}

export function edit_card_advanced(cardId, cardText) {

}

export function get_card_text(cardJson) {

}

export function get_all_cards_text() {

}

