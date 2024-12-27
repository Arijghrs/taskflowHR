import React, { useState } from "react";
//import axios from "axios";

export default function Time() {
  const [times, setTimes] = useState({
    entryTime: "",
    lunchStart: "",
    lunchEnd: "",
    exitTime: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5002/employee/trackTime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(times),
        credentials: "include",
      });
      if (response.status === 201) {
        alert("Time tracking submitted successfully");
        setTimes({ entryTime: "", lunchStart: "", lunchEnd: "", exitTime: "" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(err.response?.data?.error || "Failed to submit time tracking");

      if (err.response?.status === 401) {
        // Redirect to login if not authenticated
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Time Tracking
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Entry Time
            </label>
            <input
              type="time"
              value={times.entryTime}
              onChange={(e) =>
                setTimes({ ...times, entryTime: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Lunch Break
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="time"
                value={times.lunchStart}
                onChange={(e) =>
                  setTimes({ ...times, lunchStart: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <span>to</span>
              <input
                type="time"
                value={times.lunchEnd}
                onChange={(e) =>
                  setTimes({ ...times, lunchEnd: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Exit Time
            </label>
            <input
              type="time"
              value={times.exitTime}
              onChange={(e) => setTimes({ ...times, exitTime: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                     disabled:bg-blue-300 transition-colors"
          >
            {loading ? "Submitting..." : "Submit Time"}
          </button>
        </form>
      </div>
    </div>
  );
}
