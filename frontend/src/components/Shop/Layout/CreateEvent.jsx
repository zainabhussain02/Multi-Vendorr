import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { categoriesData } from "../../../static/data";
import { createevent } from "../../../redux/actions/event";

const CreateEvent = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.events);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);
    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    setStartDate(startDate);
    setEndDate(null);
    document.getElementById("end-date").min = minEndDate
      .toISOString()
      .slice(0, 10);
  };
  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value);
    setEndDate(endDate);
  };
  const today = new Date().toISOString().slice(0, 10);

  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : today;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Event created sucessfully!");
      navigate("/dashboard-events");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    newForm.append("start_Date",startDate.toISOString());
    newForm.append("Finish_Date",endDate.toISOString());
    dispatch(createevent(newForm));
  };

  
  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-poppins text-center">Create Event </h5>
      {/* create event  form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="p-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none   focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your  event prouct name..."
          />
        </div>
        <br />
        <div>
          <label className="p-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            rows="8"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-400 rounded-[3px] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your event  product description ..."
          ></textarea>
        </div>
        <br />
        <div>
          <label className="p-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category"> Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="p-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter your event prouct tags name..."
          />
        </div>
        <br />
        <div>
          <label className="p-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none  focus:ring-blue-500  focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter your event prouct original price..."
          />
        </div>
        <br />
        <div>
          <label className="p-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none  focus:ring-blue-500 focus:border-blue-500  sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Enter your event prouct price with discount  ..."
          />
          <br />
          <div>
            <label className="p-2">
              Product Stock <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={stock}
              className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none  focus:ring-blue-500  focus:border-blue-500 sm:text-sm"
              onChange={(e) => setStock(e.target.value)}
              placeholder="Enter your event  prouct stock..."
            />
          </div>
          <br />
          <div>
            <label className="p-2">
              Event Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="price"
              id="start-date"
              value={startDate ? startDate.toISOString().slice(0, 10) : ""}
              className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none  focus:ring-blue-500  focus:border-blue-500 sm:text-sm"
              onChange={handleStartDateChange}
              min={today}
              placeholder="Enter your event  prouct stock..."
            />
          </div>
          <br />
          <div>
            <label className="p-2">
              Event End Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="price"
              id="end-date"
              value={endDate ? endDate.toISOString().slice(0, 10) : ""}
              className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none  focus:ring-blue-500  focus:border-blue-500 sm:text-sm"
              onChange={handleEndDateChange}
              min={minEndDate}
              placeholder="Enter your event  prouct stock..."
            />
          </div>
          <br />
          <div>
            <label className="p-2">
              Upload Images <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name=""
              id="upload"
              className="hidden"
              multiple
              onChange={handleImageChange}
            />
            <div className="w-full flex items-center flex-wrap">
              <label htmlFor="upload">
                <AiOutlinePlusCircle className="mt-3" size={30} color="#555" />
              </label>
              {images &&
                images.map((i) => (
                  <img
                    src={URL.createObjectURL(i)}
                    key={i}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                ))}
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Create"
                className="mt-2 appearance-none block w-full px-3 h-[35px]  border border-gray-400 rounded-[3px] placeholder-gray-500  focus:outline-none  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
