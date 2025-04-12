
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function App() {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-12 flex flex-col items-center gap-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">WECAN PLUMBINGINC</h1>
        <p className="text-lg md:text-xl">Serving since 2016</p>
        <p className="mt-2">Phone: 778-919-9209 | Email: wecanplumbing@gmail.com</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[1, 2, 3].map((img) => (
          <img
            key={img}
            src={`https://source.unsplash.com/800x600/?plumbing,${img}`}
            alt="plumbing"
            className="rounded-2xl shadow-md object-cover w-full h-60"
          />
        ))}
      </div>

      <button
        className="px-6 py-3 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-md"
        onClick={() => setShowForm(true)}
      >
        Book an Appointment
      </button>

      {showForm && (
        <div className="w-full max-w-xl mt-4 shadow-xl bg-white p-6 rounded-2xl space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Appointment Form</h2>
          <input className="w-full p-2 border rounded" placeholder="Full Name" />
          <input className="w-full p-2 border rounded" placeholder="Phone Number" />
          <input className="w-full p-2 border rounded" placeholder="Address" />
          <input className="w-full p-2 border rounded" type="datetime-local" />
          <textarea className="w-full p-2 border rounded" placeholder="Additional Notes"></textarea>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Submit</button>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
