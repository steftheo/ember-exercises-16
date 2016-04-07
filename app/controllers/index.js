import Ember from 'ember';

export default Ember.Controller.extend({
  addPerson() {
    const values = {
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phoneNumber: this.phoneNumber,
    };

    fetch(`https://tiny-tn.herokuapp.com/collections/st-people`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(values),
    }).then((res) => res.json())
  },
});
