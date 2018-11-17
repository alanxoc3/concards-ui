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

//cardText string
export function import_cards_advanced(cardText) {

    console.log(firebase.auth().currentUser.uid);
     firebase.database().ref()
                       .child("users")
                       .child(firebase.auth().currentUser.uid)
                       .push({answer: "test1", group: "test", notes: "test", question: "test"});
                    //    .child(firebase.auth().currentUser.getIdToken)
                       
}


function Card(groups, fronts, backs, notes)
{
    this.groups = groups;
    this.fronts = fronts;
    this.backs = backs;
    this.notes = notes;
}

function isToken(word)
{
    switch(word)
    {
        case "@g": 
        case "@f":
        case "@b":
        case "@n":
        case "@>":
            return true;
        default:
            return false;
    }
}

function parseCardText(cardText)
{
    var words = cardText.match(/\S+/g) || []; //array of strings
    var cards = [];      // array of cards
    var card ;
    var groups = [ ];     // array of group names
    var newGroup = true;  // keeps track of when do we form a new group

    for(var i = 0; i < words.length;  ) //no increment here
    {
        var prop = "group"; // property
        var text = "";

        switch(words[i])
        {
            case "@g":
                if(newGroup)
                {
                    groups = [ ];
                    newGroup = false;
                }
                break;
            case "@f":
                prop = "fronts";
                newGroup = true;
                break;
            case "@b":
                prop = "backs";
                newGroup = true;
                break;
            case "@n":
                prop = "notes";
                newGroup = true;
                break;
            case "@>": //begin new concard
                prop = "";
                card = new Card([],[],[],[]);
                card.groups = groups.slice();
                cards.push(card);
                break;
        }

        // start from the next char 
        // the same i careful, loop until the next token to form the string
        for(++i; i < words.length && !isToken(words[i]);++i) 
            text += words[i] + " ";
        
        text = text.trim(); //remove the last space
        if(prop === "group")
            groups.push(text)
        else if(prop !== "")
            card[prop].push(text);
    }
    
    return cards;
    }      
export function edit_card_advanced(cardId, cardText) {

}

export function get_card_text(cardJson) {

}

export function get_all_cards_text() {

}

