import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 
        "Bearer BjCWtkjmzSqoV-9YSxpUCHq87PGKwBJ0o1h3g8Fnuc5uZMK-5f76Z0Hwq99D2-MNUSZbIc5gSo6uKvQn6g3gS5KjURxeaYvJsbpzzUVH2cFadW5dJ2F8ZtRu8LXrZ3Yx"
    }
})