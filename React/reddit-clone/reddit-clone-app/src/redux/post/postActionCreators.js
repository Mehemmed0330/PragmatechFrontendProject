import * as types from "./actionTypes";
import { firestore, storage } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import Home from "../../components/Home";
import { collection, query, where, onSnapshot } from "firebase/firestore";

// actions
const setLoading = data => ({
    type: types.SET__LOADING,
    payload: data,
});

const addPost = data => ({
    type: types.ADD__POST,
    payload: data,
})

const getPosts = data => ({
    type: types.SET__POSTS,
    payload: data,
})

const resetPost = data => ({
    type: types.RESET__POST,
})
const addComment = data => ({
    type: types.ADD__COMMENT,
    payload: data,
})

const deleteComment = data => ({
    type: types.DELETE__COMMENT,
    payload: data,
})

const addReply = data => ({
    type: types.ADD__REPLY,
    payload: data,
})

const deletePost = data => ({
    type: types.DELETE__POST,
    payload: data,
})
// action creators

export const doPost = (data, image, setProgress) => dispatch => {
    // const navigate = useNavigate()

    firestore.collection("posts").add(data).then(async res => {
        const document = await res.get();
        const postData = { data: document.data(), id: document.id };
        const uploadRef = storage.ref(`posts/${document.id}`);

        uploadRef.put(image).on("state_changed", snapshot => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        }, error => {
            console.log(error);
        }, async () => {
            const url = await uploadRef.getDownloadURL();
            firestore.collection("posts").doc(document.id).update({
                image: url
            }).then(() => {
                postData.data.image = url;
                dispatch(addPost(postData));
                // navigate("/");

            }).catch(error => {
                console.log(error);
            });
        }).catch(err => {
            console.log(err);
        });

    })

}

export const fetchPosts = () => dispatch => {
    dispatch(setLoading(true));
    // firestore.collection("posts").get().then(posts => {

    //     const allPosts = [];
    //     posts.forEach((post) => {
    //         const data = { postData: post.data(), postId: post.id };
    //         allPosts.push(data);
    //     })
    //     dispatch(getPosts(allPosts));
    //     dispatch(setLoading(false));

    // }).catch(err => {
    //     console.log(err);
    //     console.error(err);
    // })
    // firestore.collection("posts").where("createdBy", "!=", "1")
    //     .onSnapshot((querySnapshot) => {
    //         const allPosts = [];
    //         querySnapshot.forEach((post) => {
    //             const data = { postData: post.data(), postId: post.id };
    //             // allPosts.push(data);
    //             allPosts.push(data);
    //         });
    //         dispatch(getPosts(allPosts));
    //         dispatch(setLoading(false));
    //     }).catch(err => {
    //         console.log(err);
    //         console.error(err);

    //     });

    firestore.collection("posts")
        .onSnapshot((snapshot) => {
            const allPosts = [];
            snapshot.forEach((post) => {
                const data = { postData: post.data(), postId: post.id };
                // allPosts.push(data);
                allPosts.push(data);
            });
            dispatch(getPosts(allPosts));
            dispatch(setLoading(false));
        }, (error) => {
            console.log(err);
            //         console.error(err);
        });



}


//for comments

export const doComment = (comment, postId, prevComments) => (dispatch) => {

    const oldComments = prevComments;
    oldComments.push(comment);
    firestore.collection("posts").doc(postId).update({
        comments: oldComments,
    }).then(() => {
        dispatch(({ comment, postId }));

    }).catch(err =>
        console.error(err));
}


export const removeComment = (index, postId, prevComments) => (dispatch) => {

    const filteredcomments = prevComments?.filter((cmt, id) => id !== index);
    firestore.collection("posts").doc(postId).update({
        comments: filteredcomments,
    }).then(() => {
        console.log(alert("comment deleted"));
        dispatch(deleteComment({ index, postId }));

    }).catch(err =>
        console.error(err));
}



// for replies
export const doReply = (reply, postId, prevComments, index) => (dispatch) => {

    const oldComments = prevComments;
    const replies = oldComments[index].replies;
    replies.push(reply);
    oldComments[index].replies = replies;

    firestore.collection("posts").doc(postId).update({
        comments: oldComments,
    }).then(() => {
        console.log(alert("comment added"));
        dispatch(addReply({ oldComments, postId }));

    }).catch(err =>
        console.error(err));
}


export const removePost = (postId, imgUrl) => (dispatch) => {
    storage
        .refFromURL(imgUrl)
        .delete()
        .then(() => {
            firestore
                .collection("posts")
                .doc(postId)
                .delete()
                .then(() => {
                    dispatch(deletePost({ postId }));
                })
                .catch((err) => {
                    console.Log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });

}