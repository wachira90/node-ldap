const  SimpleLDAP =  require('simple-ldap-search');

const config = {
  url: 'ldap://172.16.1.50:389',
  base: 'dc=example,dc=com',
  dn: 'cn=wachira@example.com',
  password: 'pass1234',
};

// create a new client
const ldap = new SimpleLDAP(config);

// setup a filter and attributes for your LDAP query
const filter = '(uid=artvandelay)';
const attributes = ['idNumber', 'uid', 'givenName', 'sn', 'telephoneNumber'];

// using async/await
const users =  ldap.search(filter, attributes);

console.log(users);