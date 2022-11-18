<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useFetch } from "../composables/useFetch";
import axios from "axios";

const serverAuthenticated = ref();
const serverUser = ref();
const posts = ref();

const serverAuthenticatedReq = async () => {
  const { data, response, error } = await useFetch(`/auth/isAuthenticated`, {});
  serverAuthenticated.value = data.value as string;
};

const serverUserReq = async () => {
  const { data, response, error } = await useFetch(`/auth/user`, {});
  serverUser.value = data.value;
};

const loadPosts = async () => {
  const { data, response, error } = await useFetch(
    `https://dummyjson.com/posts`,
    {}
  );
  posts.value = data.value;
};

const init = async () => {
  await serverAuthenticatedReq();
  await serverUserReq();
  await loadPosts();
};

init();
</script>

<template>
  <div>
    <div>
      <h1>User Data</h1>
      <p>Server authenticated = {{ serverAuthenticated }}</p>
      <p>user = {{ serverUser }}</p>
    </div>
    <a href="/auth/login">Server Login</a>
    <br />
    <a href="/auth/logout">Server Logout</a>
    <br />
    <div>
      <h2>Posts</h2>
      <p>
        {{ posts }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
