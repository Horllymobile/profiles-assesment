<template>
  <div class="mt-5">

    <div class="row">
        <div class="col-lg-2">
          <div class="form-group">
            <label for="cardType">Sort Cart Type</label>
            <select id="cardType" class="custom-select" v-model="cardType" @click="filterCardType()">
              <option value=''>All</option>
              <option value="JCB">JCB</option>
              <option value="MSC">Master</option>
            </select>
          </div>
        </div>
        <div class="col-lg-8">
          
        </div>
        <div class="col-lg-2">
          <div class="form-group">
          <label for="paymentMethod">Payment Method</label>
            <select id="paymentMethod" class="custom-select" v-model="paymentMethod"
             @click="filterPaymentMethod()">
              <option value="">All</option>
              <option value="paypal">Paypal</option>
              <option value="check">Check</option>
              <option value="cc">Credit Card</option>
            </select>
          </div>
        </div>
    </div>

    <pagination v-model="filteredProfiles" :records="filteredProfiles"></pagination>

    <!-- <div v-if="records" class="row">
      <div class="col-lg-3 mb-2" v-for="profile in filteredProfiles || records.profiles" :key="profile.Email">
        <div class="card">
          <div class="card text-left">
            <div class="card-body">
              <h4 class="card-title">{{ profile.FirstName}} {{ profile.LastName }}</h4>
              <p class="card-text">Card Type: {{ profile.CreditCardType }} </p>
              <p class="card-text">Payment Method: {{ profile.PaymentMethod }} </p>
              <p class="card-text">Email: {{ profile.Email }} </p>
            </div>
          </div>
        </div>
    </div> 
    
  </div>-->
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      records: null,
      paymentMethod: null,
      cardType: null,
      filteredProfiles: null,
      page: 1
    }
  },
  methods: {
  fetchProfilesJson(){
      axios.get('data/profile.json')
        .then(res => {
          this.records = res.data.records;
        })
        .catch(err => {
          console.log(err)
        })
  },

  filterCardType(){
      if(this.cardType){
        this.filteredProfiles = this.records.profiles.filter(item => item.CreditCardType == this.cardType)
        console.log(this.filteredProfiles);
      }else {
        this.filteredProfiles = this.records.profiles;
        console.log(this.filteredProfiles);
      }
  },
  filterPaymentMethod(){
      if(this.paymentMethod){
        this.filteredProfiles = this.records.profiles.filter(item => item.PaymentMethod == this.paymentMethod);
        console.log(this.filteredProfiles);
      }else {
        this.filteredProfiles = this.records.profiles;
        console.log(this.filteredProfiles);
      }
  }
    //fetchProfiles(){
     // axios.get('https://api.enye.tech/v1/challenge/records')
      //  .then(res => {
       //   this.records = res.data;
       //   console.log(this.records);
      //  })
      //  .catch(err => {
       //   console.log(err)
       // } )
    //}
  },
  computed: {
  },
  watch: {
   
  },
  created() {
    this.fetchProfilesJson()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import url('../assets/style.css');
</style>
