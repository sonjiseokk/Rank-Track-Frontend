<template>
    <LeaderBoard />
    <div class="right-panel">
        <NoticeBoard />
        <RealTimeChat />
        <NotificationFeed />
        <RisingUser />
    </div>
</template>

<script>
import LeaderBoard from '@/components/main/LeaderBoard.vue';
import NoticeBoard from '@/components/main/NoticeBoard.vue';
import RealTimeChat from '@/components/main/RealTimeChat.vue';
import NotificationFeed from '@/components/main/NotificationFeed.vue';
import RisingUser from '@/components/main/RisingUser.vue';

export default {
    name: 'MainPage',
    components: {
        LeaderBoard, NoticeBoard,
        RealTimeChat,
        NotificationFeed,
        RisingUser
    }
}
</script>

<style></style>