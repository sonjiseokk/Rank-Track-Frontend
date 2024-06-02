<template>
    <div class="rank-track">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Tier</th>
                    <th>AC Score</th>
                    <th>Solved Problems</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>12345</td>
                    <td>Platinum</td>
                    <td>1500</td>
                    <td>120</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

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