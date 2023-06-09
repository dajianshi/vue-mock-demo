<template>
  <div class="home">
      <template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="time"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="orgId"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="recipeId"
            label="发票ID">
          </el-table-column>
		  <el-table-column
		    prop="address"
		    label="地址">
		  </el-table-column>
<!-- 		  <el-table-column
		    prop="title"
		    label="图片">
		       <template slot-scope="scope">
                   <el-image :src="scope.row.thumbnail_pic_s"></el-image>
			  </template>
		  </el-table-column> -->
        </el-table>
      </template>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
	  return{
		  tableData:[],
	  }
  },
  mounted(){
	this.getdata()  
  },
  methods:{
	getdata(){
		let url="/user"
		this.$request(url, {}, "GET")
		.then((res) => {
		  this.tableData=res.data.data
		  console.log(this.tableData)
		})
	},  
  }
}
</script>

