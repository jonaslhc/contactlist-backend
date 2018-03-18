const contacts = [
  {
    "contactId": 1,
    "firstname":"Cameron",
    "lastname":"Dubas",
    "phone":"6047280012",
    "address":"289 Abbott St., Vancouver, BC, V3M 2L7",
    "email":"cameron@changeheroes.com"
  },
  {
    "contactId": 2,
    "firstname":"Mike",
    "lastname":"Tan",
    "phone":"6043421109",
    "address":"102 Homer St., Vancouver, BC, V2K 3G7",
    "email":"mike@changeheroes.com"
  },
  {
    "contactId": 3,
    "firstname":"Ryan",
    "lastname":"Campbell",
    "phone":"6049881822",
    "address":"1807 Granville St, Vancouver, BC, V7G 2F9",
    "email":"ryan@changeheroes.com"
  },
  {
    "contactId": 4,
    "firstname":"Steven",
    "lastname":"Zozula",
    "phone":"6045200192",
    "address":"100 Water St., Vancouver, BC, V8I 2G3",
    "email":"steven@changeheroes.com"
  },
  {
    "contactId": 5,
    "firstname":"Daryl",
    "lastname":"Chmyko",
    "phone":"6042240422",
    "address":"289 Cordova St., Vancouver, BC, V6B 2L4",
    "email":"daryl@changeheroes.com"
  },
  {
    "contactId": 6,
    "firstname":"Aaron",
    "lastname":"Vandenbrink",
    "phone":"6047581029",
    "address":"200 Abbott St., Vancouver, BC, V9M 3K2",
    "email":"aaron.vandenbrink@gmail.com"
  }];

let nextId = 7;

module.exports = resolvers = {
  Query: {
    Contact: () => {
      return contacts;
    },
  },
  Mutation: {
    addContact: (root, args) => {
      const newContact = { 
        contactId: nextId++,
        firstname: args.firstName,
        lastname: args.lastName,
        phone: args.phone,
        address: args.address,
        email: args.email,
      };
      contacts.push(newContact);
      return newContact;
    },
    modifyContact: (root, args) => {
      let idx = -1;
      contacts.forEach((el) => {
        console.log({ el });
        if (el.contactId == args.contactId) {
          idx = args.contactId;
        }
      });

      let contact = {};
      if (idx !== -1) {
        contact = {
          contactId: args.contactId,
          firstname: args.firstName,
          lastname: args.lastName,
          phone: args.phone,
          address: args.address,
          email: args.email
        };
        contacts[idx - 1] = contact;
      }

      return contact;
    },
  },
};
