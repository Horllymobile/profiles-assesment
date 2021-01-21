<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-lg-2">
        <div class="form-group">
          <label for="cardType">Sort Cart Type</label>
          <select
            id="cardType"
            class="custom-select"
            v-model="cardType"
            @click="filterCardType()"
          >
            <option value="">All</option>
            <option value="JCB">JCB</option>
            <option value="MSC">Master</option>
          </select>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="form-group" style="margin-top:1.9em !important;">
          <input type="search" class="form-control" v-model.trim="searchInput"
            @keydown="searchData()"
          id="search" placeholder="Search names">
        </div>
      </div>
      <div class="col-lg-2">
        <div class="form-group">
          <label for="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            class="custom-select"
            v-model="paymentMethod"
            @click="filterPaymentMethod()"
          >
            <option value="">All</option>
            <option value="paypal">Paypal</option>
            <option value="check">Check</option>
            <option value="cc">Credit Card</option>
          </select>
        </div>
      </div>
    </div>
    <!-- <div > -->
      <Profiles v-if="filteredProfiles" :listData="filteredProfiles" :size="filteredProfiles.length"/>

    <!-- </div> -->
  </div>
</template>

<script>
import Profiles from './Profiles'
import axios from "axios";
export default {
  data() {
    return {
      searchInput: '',
      records: null,
      paymentMethod: null,
      cardType: null,
      filteredProfiles: null,
    };
  },
  components:{
    Profiles
  },
  methods: {
    searchData() {
      let searchingDatas = this.records.profiles
      if(this.searchInput){
        this.filteredProfiles = [ ...searchingDatas ]
          .filter(item => item.FirstName.toLowerCase().includes(this.searchInput.toLowerCase()))
      }else{
        this.filteredProfiles = this.records.profiles
      }
    },
    fetchProfilesJson() {
      axios
        .get("data/profile.json")
        .then((res) => {
          this.records = res.data.records;
          this.filteredProfiles = this.records.profiles;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    filterCardType() {
      if (this.cardType) {
        this.filteredProfiles = this.records.profiles.filter((item) => item.CreditCardType == this.cardType);
      } else {
        this.filteredProfiles = this.records.profiles;
      }
    },
    filterPaymentMethod() {
      if (this.paymentMethod){
        this.filteredProfiles = this.records.profiles.filter((item) => item.PaymentMethod == this.paymentMethod)
      } else {
        this.filteredProfiles = this.records.profiles;
      }
    },
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
  mounted(){
    this.fetchProfilesJson();
    setTimeout(() => {
      this.filteredProfiles = this.records.profiles;
    }, 1000)
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/style.css");
</style>
