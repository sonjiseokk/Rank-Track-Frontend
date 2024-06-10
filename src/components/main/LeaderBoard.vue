<template>
  <div class="rank-track">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>이름</th>
          <th>핸들</th>
          <th>티어</th>
          <th>AC Score</th>
          <th>푼 문제 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member,index) in memberList" :key="member.handle">
          <td>
            <router-link :to="{ name: 'detail', params: { handle: member.handle }}">{{ index + 1 }}</router-link>
          </td>
          <td>{{ member.name }}</td>
          <td>{{ member.handle }}</td>
          <td>{{ member.tier }}</td>
          <td>{{ member.rating }}</td>
          <td>{{ member.solvedCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from '@/api/http-common'
export default {
  data() {
    return {
      memberList: [],
    }
  },
  mounted() {
    http.get('/member/list')
      .then((response) => {
        this.memberList = response.data.data
        console.log(this.memberList);
      })
  }
}
</script>

<style>
.rank-track {
  flex: 2;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.rank-track table {
  width: 100%;
  border-collapse: collapse;
}

.rank-track th,
.rank-track td {
  border: 1px solid #dee2e6;
  padding: 12px;
  text-align: left;
}

.rank-track th {
  background-color: #f1f3f5;
  color: #495057;
}

.rank-track td {
  background-color: #fff;
  color: #495057;
}
</style>