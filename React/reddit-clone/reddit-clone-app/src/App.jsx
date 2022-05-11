import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CreatePostArea from "./components/CreatePostArea";
import { Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from "./redux/post/postActionCreators"
import PostDetail from './components/PostDetail';
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme, lightTheme } from "./theme/theme";







function App() {
  const isLoading = useSelector((state) => state.post.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isLoading) {
      dispatch(fetchPosts())
    }

  }, [isLoading, dispatch]);
  const theme = useSelector((state) => state.theme);



  return (

    <div className="App">
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>

        {/* <Router> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<CreatePostArea />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
        {/* </Router> */}
      </ThemeProvider>

    </div>
    // </ThemeProvider>
  );
}

export default App;
