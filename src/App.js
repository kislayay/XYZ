
import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { Box } from '@mui/material';
// import ExerciseDetail from './pages/ExerciseDetail';
// import Home from './pages/Home';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import FilterableSelect from './components/SelectOption';
import Debounce from './components/Debounce';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // const [toggle, setToggle] = useState(false);


  function handlemessage() {
    alert("Passing function as a Prop");
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res?.data);
      setLoading(true)
    }
    fetchPosts(); // calling the function
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);    //(0,10)

  const paginate = (pageNumber) => {

    setCurrentPage(pageNumber)

  }

  return (
    <div>
      {/* <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box> */}
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      {/* <SelectOption options={[
        { label: 'Option1', value: 'option1' },
        { label: 'Option2', value: 'option2' },
        { label: 'option3', value: 'option3' }
      ]} /> */}
      <FilterableSelect />
      <Debounce onClick={handlemessage} />
    </div>
  );
}

export default App;
