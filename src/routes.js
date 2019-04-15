import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import singleBlog from './components/singleBlog'
export default[
    {
        path:'/',component:ShowBlogs
    },
    {
        path:'/addBlog',component:AddBlog
    },
    {
        path:'/blog/:id',component:singleBlog
    }
]