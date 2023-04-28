import axios from 'axios';
import {isEmpty} from "lodash";

const baseUrl = `http://localhost:3002`;

export const getPostsApi = () => {
  return axios({
    url: `${baseUrl}/posts`,
    method: 'get'
  })
}

export const postPostApi = (post, username) => axios({
  method: 'post',
  url: `${baseUrl}/posts`,
  data: { ...post, username }
});

export const deletePostApi = (id) => axios({
  method: 'delete',
  url: `${baseUrl}/posts/${id}`
});

export const toggleLikePost = (post, username) => axios({
    method: 'patch',
    url: `${baseUrl}/posts/${post._id}`,
    data: {...post, username},
  })


