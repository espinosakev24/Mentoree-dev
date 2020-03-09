import axios from 'axios';

export const postClass = newPost => {
  return axios
    .post('api/posts/', {
      post_id: newPost.post_id,
      student_id: newPost.student_id,
      title: newPost.title,
      description: newPost.description,
      category: newPost.category,
      schedule: newPost.schedule,
      price: newPost.price,
      size: newPost.size,
      location: newPost.location
    })
    .then(res => {
      console.log('Post created!');
    });
};
