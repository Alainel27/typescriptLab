import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";
import { EmailContact } from "./myTypes";

function older(f: Friend){
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}

console.log(older(friends[0]));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(
    colleagues : Colleague[],
    name: string, 
    department: string, 
    email: string
) {
const newColleague = {
  name: name,
  department: department,
  contact: {
    email: email,
    extension: 
    highestExtension(colleagues).contact.extension + 1
    }
};
colleagues.push(newColleague);

return newColleague;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(
    friends: Friend[],
// criterion the function that recieves a Friend and returns true or false if the criteria is met such as PA
    criterion: (friend: Friend) => boolean

) {
    return friends.filter(criterion);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
