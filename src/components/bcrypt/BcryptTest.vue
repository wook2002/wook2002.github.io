<template>
  <div class="main">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" />
    <!-- v-model.lazy="customerData.password" -->
    <button type="submit" class="btn btn-primary" @click.prevent="addUser">
      Add
    </button>
  </div>
1{{ salt }}2 <br>
1{{ encryptedPassword }}2 <br>
1{{ password }}2 <br>
  <div>
   
  </div>

  <br /><br /><br /><br />
  <br /><br /><br /><br />
</template>

<script>
import bcrypt from "bcryptjs";

const id = 'id1'
const saltRounds = 10; 
const pw = '1234'

// salt
const salt = bcrypt.genSaltSync();
// 비번 암호화(m1)
const encryptedPassword = bcrypt.hashSync(pw, saltRounds);
// 비번 암호화(m2)
bcrypt.hash(pw, saltRounds, (err, encryptedPassword) => {
   console.log(err)
   console.log(encryptedPassword)
})
// 비교
bcrypt.compare(pw, encryptedPassword, (err, same) => {
   console.log(err)
   console.log(same) //true
})

export default {
  name: "scryptA",
  data() {
    return {
      password: null,
      id,
      saltRounds,
      pw,

      salt,
      encryptedPassword,
    };
  },
  methods: {
 
  },
};
// var bcrypt = require('bcrypt');
/*
const saltRounds = 10; // Round 수      

//비밀번호 암호화
//1 hash
const pw = '1234'
bcrypt.hash(pw, saltRounds, function(err, hash) {
   console.log(same); //true
 
})
//2 hashSync
const encryptedPw = bcrypt.hashSync(pw, saltRounds);
const same = bcrypt.compareSync(pw, saltRounds);


const myPlaintextPassword = '123456';
const someOtherPlaintextPassword = '654321';
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
   bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res == true
  });
});
 */
</script>

<style>
</style>