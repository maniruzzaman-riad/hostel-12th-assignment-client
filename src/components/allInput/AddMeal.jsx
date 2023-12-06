import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import SectionTitle from "../Sheard/SectionTitle";
import useMealsSecure from "../Hooks/useMealsSecure";


const AddMeal = () => {
    const axiosSecure = useMealsSecure()
    const { user } = useContext(AuthContext)
    const [addMeal, setAddMeal] = useState(true)
    const currentDate = new Date()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        // console.log("yes i am clicked");
        // console.log(addMeal);
        const mealInfo = {
            meal_category: data.category,
            description: data.description,
            distributor: data.distributor,
            image: data.image,
            price: data.price,
            rating: data.rating,
            meal_title: data.title,
            distributor_email: user.email,
            post_date: currentDate

        }
        if(addMeal){
            axiosSecure.post('/meals',mealInfo)
            .then(res=>{
                console.log(res);
            })
        }

        // loginUser(data.email, data.password)
        // .then(result=>{
        //     if(result){
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Login succesfull",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //     }
        // })
    }

    return (
        <div>
            <SectionTitle title="add new meal"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-base font-bold">Title *</span>
                        </label>
                        <input type="text" placeholder="Meal Title" {...register("title", { required: true })} name="title" className="input input-bordered" />
                        {errors.title && <span>Title is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-base font-bold">Category *</span>
                        </label>
                        <select type="select" defaultValue={'default'} {...register("category", { required: true })} name="category" className="select select-bordered w-full">
                            <option disabled value="default">Choose Your Category</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-base font-bold">Price *</span>
                        </label>
                        <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-base font-bold">Post by</span>
                        </label>
                        <input defaultValue={user.displayName} {...register("distributor", { required: true })} className="input input-bordered" readOnly />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-base font-bold">Post date</span>
                        </label>
                        <DatePicker
                            // {...register("post_date", { required: true })}
                            selected={currentDate}
                            dateFormat="dd-MM-yyyy"
                            readOnly
                            className="input input-bordered"
                        ></DatePicker>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-base font-bold">Rating *</span>
                        </label>
                        <input type="number" placeholder="rating" {...register("rating", { required: true })} name="rating" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-base font-bold">Meal Banner *</span>
                    </label>
                    <input type="text" placeholder="Image Link" {...register("image", { required: true })} name="image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-base font-bold">Meal Description *</span>
                    </label>
                    <textarea className="input input-bordered" placeholder="Write Your Short description" {...register("description", { required: true })} name="description" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="form-control mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button onClick={() => setAddMeal(true)} className="btn btn-primary">Add Meal</button>
                    <button onClick={() => setAddMeal(false)} className="btn btn-secondary">Upcoming</button>
                </div>
            </form>
        </div>
    );
};

export default AddMeal;