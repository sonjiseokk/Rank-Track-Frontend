<template>
    <div class="user-profile-page">
        <header class="header" :style="{ backgroundImage: 'url(your-background-image-url.jpg)' }">
            <div class="profile-picture">
                <img :src="user.profileImageUrl" alt="Profile Picture" />
            </div>
            <div class="user-info">
                <h1>{{ user.name }}</h1>
                <p>{{ user.handle }}</p>
            </div>
        </header>
        <main class="main-content">
            <div class="left-section">
                <div class="info-item">
                    <span>Problems Solved</span>
                    <strong>{{ user.solvedCount }}</strong>
                </div>
                <div class="info-item">
                    <span>AC Score</span>
                    <strong>{{ user.rating }}</strong>
                </div>
                <div class="info-item">
                    <span>Class Ranking</span>
                    <strong>{{ user.classRank }}등</strong>
                </div>
                <div class="info-item">
                    <span>Tier</span>
                    <strong>{{ user.tier }}</strong>
                </div>
            </div>
            <div class="right-section">
                <div class="chart">
                    <h3>Problems Solved by Day</h3>
                    <!-- Add your chart component or library here -->
                </div>
                <div class="chart">
                    <h3>Problems Solved by Tier</h3>
                    <!-- Add your chart component or library here -->
                </div>
                <div class="chart">
                    <h3>Predictive Progress</h3>
                    <!-- Add your chart component or library here -->
                </div>
                <div class="chart">
                    <h3>User Analysis</h3>
                    <!-- Add your chart component or library here -->
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import http from '@/api/http-common'
export default {
    data() {
        return {
            user: {},
        };
    },
    mounted(){
        http.get(`/member/detail/${this.$route.params.handle}`)
        .then((response) => {
            this.user = response.data.data;
            console.log(response.data.data);
        })
    }
};
</script>

<style scoped>
.user-profile-page {
    width: 100%;
    font-family: Arial, sans-serif;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-size: cover;
  background-position: center;
  color: black;
  width: 98%;
  height: 300px; /* Adjust height as needed */
  /* background-image: url('@/assets/logo.png'); /* Update this with the correct path */
  background-color: wheat;
  border-radius: 10px;
}

.profile-picture img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}

.user-info {
    text-align: center;
}


.main-content {
    display: flex;
    padding: 20px;
}

.left-section {
    flex: 1;
    padding-right: 20px;
}

.info-item {
    margin-bottom: 20px;
}

.info-item span {
    display: block;
    font-weight: bold;
}

.info-item strong {
    font-size: 24px;
}

.right-section {
    flex: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.chart {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>