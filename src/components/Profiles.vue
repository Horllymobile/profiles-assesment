<template>
  <div>
    <div class="row">
     <table class="table table-bordered table-responsive">
    <thead class="bg-primary text-white">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Username</th>
        <th>Email</th>
        <th>PhoneNumber</th>
        <th>Payment Method</th>
        <th>Credit Card Type</th>
        <th>Domain Name</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="(profile) in displayedPosts" :key="profile.Email">
      <td>{{ profile.FirstName }}</td>
      <td>{{ profile.LastName }}</td>
      <td>{{ profile.Gender }}</td>
      <td>{{ profile.UserName }}</td>
      <td>{{ profile.Email }}</td>
      <td>{{ profile.PhoneNumber }}</td>
      <td>{{ profile.PaymentMethod }}</td>
      <td>{{ profile.CreditCardType }}</td>
      <td>{{ profile.DomainName }}</td>
    </tr>
    </tbody>
  </table>
    </div>
    <div class="row">
			<ul class="pagination">
				<li class="page-item">
					<button type="button" class="page-link" v-if="page != 1" @click="page--"> &lt;</button>
				</li>
				<li class="page-item">
					<button type="button" class="page-link" :class="{'bg-primary': page === pageNumber}" v-for="(pageNumber, index) in pages.slice(page-1, page+5)" :key="index" @click="page = pageNumber"> {{pageNumber}} </button>
				</li>
				<li class="page-item">
					<button type="button" @click="page++" v-if="page < pages.length" class="page-link">&gt;</button>
				</li>
			</ul>
    </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
			// posts : [''],
			page: 1,
			perPage: 20,
			pages: [],		
		}
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
  },
  mounted(){
    //console.log(this.listData[0]);
    //console.log(this.paginatedData());
  },
  methods: {
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    },
    setPages () {
			let numberOfPages = Math.ceil(this.listData.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
      }
		},
		paginate (data) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  data.slice(from, to);
		}
  },
  computed: {
    
    displayedPosts () {
			return this.paginate(this.listData);
		}
    
  },
  watch: {
    // posts () {
    //   this.setPages();
    //   console.log('it is working')
		// }
  },
  created(){
    this.setPages();
  },
  filters:{
    trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
  },
};
</script>

<style scoped>
    .name{
      font-size: 1em;
      line-height: -7em;
    }
    .username{
      font-size: 0.7em;
      line-height: 1em;
    }
    .paymethod{
      font-size: 1em;
      line-height: -7em;
    }
    button.page-link {
      display: inline-block;
    }
    button.page-link {
      font-size: 20px;
      color: #29b3ed;
      font-weight: 500;
    }
    .offset{
      width: 500px !important;
      margin: 20px auto;  
    }
</style>
