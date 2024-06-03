import { Button, TextInput } from "flowbite-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AddNews = () => {
  return (
    <div className="max-w-lg mx-auto w-full p-3">
      <h1 className="text-5xl font-bold text-center">Add a News</h1>

      <div className="my-16">
        <form>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Category"
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="author"
              placeholder="Author"
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <TextInput
              // className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <Button
              // className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              gradientDuoTone="purpleToPink"
            >
              Add a news
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
