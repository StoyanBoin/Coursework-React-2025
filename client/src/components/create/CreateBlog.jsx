import { useNavigate } from "react-router";
import useRequest from "../../hooks/useRequest.jsx";
import useForm from "../../hooks/useForm.jsx";

export default function CreateBlog({
    user,
}) {
    const navigate = useNavigate();
    const { request } = useRequest();

    const createBlogHandler = async (values) => {
        const data = values;

        data._createdOn = Date.now();
        data._creatorId = user?._id;

        if (!data.title || !data.imageUrl || !data.body) {
            return alert('All fields are required!');
        }
        if (data.title.length < 4) {
            return alert('Title must be at least 4 characters long!');
        }
        if (data.body.length < 10) {
            return alert('Body must be at least 10 characters long!');
        }
        if (data.imageUrl != '' && !/^https?:\/\/.+/i.test(data.imageUrl)) {
            return alert('Image URL must start with http:// or https://');
        }

        try {
            await request('http://localhost:3030/jsonstore/blog', 'POST', data);
            
            console.log(user);
            
            navigate('/blog');
        }
        catch (err) {
            alert(err.message);
        }
    }

    const {
        registerFild,
        formAction,
    } = useForm(createBlogHandler, {
        body: '',
        _id: '',
        title: '',
        author: user?.username || '',
        date: new Date().toISOString().split('T')[0],
        imageUrl: '',
        _createdOn: false,
    });

    return (
        <>
            {/* Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>New Blog Post</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <h2 className="mb-4 text-center">Add Blog Post</h2>
                <form action={formAction} className="mx-auto" style={{ maxWidth: 600 }}>

                    <div className="mb-3">
                        <label><strong>Title:</strong></label>
                        <input type="text" {...registerFild('title')} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label><strong>Image URL:</strong></label>
                        <input type="text" {...registerFild('imageUrl')} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label><strong>Body:</strong></label>
                        <textarea {...registerFild('body')} className="form-control" rows={6}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>

    );
}