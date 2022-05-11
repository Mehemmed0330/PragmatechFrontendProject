import * as types from './actionTypes';

const initialState = {
    isLoading: true,
    posts: [],
}

const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET__LOADING:
            state = {...state, isLoading: payload };
            return state;
        case types.ADD__POST:
            state = {...state, posts: [...state.posts, payload] };
            return state;
        case types.SET__POSTS:
            state = {...state, posts: payload };
            return state;
        case types.RESET__POST:
            state = initialState;
            return state;
        case types.ADD__COMMENT:
            const findPost = state.posts.find((pst) => pst.postId === payload.postId);
            const comments = findPost.postData.comments;
            comments.push(payload.comment);
            findPost.postData.comments = comments;
            state = {...state, posts: state.posts.map((pt) => pt.postId === payload.postId ? findPost : pt) };
            return state;

        case types.DELETE__COMMENT:
            const currentPost = state.posts.find((pst) => pst.postId === payload.postId);
            const filteredComments = findPost.postData.comments.filter((cmt, index) => parseInt(index) !== parseInt(payload.index));
            currentPost.postData.comments = filteredComments;
            state = {...state, posts: state.posts.map((pt) => pt.postId === payload.postId ? currentPost : pt) };
            return state;
        case types.ADD__REPLY:
            const oldPost = state.posts.find((pst) => pst.postId === payload.postId);

            oldPost.postData.comments = payload.oldComments;
            state = {...state, posts: state.posts.map((pt) => pt.postId === payload.postId ? oldPost : pt) };
            return state;
        default:
            return state;

        case types.DELETE__POST:
            const filteredPosts = state.posts.filter((pst) => pst.postId !== payload.postId);
            state = {...state, posts: filteredPosts };
            return state;
    }
};
export default postReducer;