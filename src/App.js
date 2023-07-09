import "./App.css";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Results = () => {
  const [searchResults, setSearchResults] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const userfunc = async () => {
    try {
      const res = await axios.get("http://localhost:5000/employees");
      setSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userfunc();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // const results = searchResults.filter(
    //   (employee) =>
    //     employee.name.toLowerCase().includes(query.toLowerCase()) ||
    //     employee.role.toLowerCase().includes(query.toLowerCase())
    // );

    // setSearchResults(results);
  };

  const highlightText = (text) => {
    const startIndex = text.toLowerCase().indexOf(searchQuery.toLowerCase());
    if (startIndex === -1) {
      return text;
    }

    const endIndex = startIndex + searchQuery.length;
    return (
      <>
        {text.substring(0, startIndex)}
        <span className="bg-yellow-200">
          {text.substring(startIndex, endIndex)}
        </span>
        {text.substring(endIndex)}
      </>
    );
  };

  return (
    <div className="App flex items-center justify-center item-center  flex-col pt-2 lg:pt-32 pb-5 ">
      <label class="text-2xl lg:text-6xl 2xl:text-6xl xl:text-6xl block m-4 text-center  font-extrabold	 tracking-wider	 text-[#008B8B] uppercase">
        Looking for an employee
      </label>
      <label class="text-lg lg:text-2xl 2xl:text-2xl xl:text-2xl block m-4 text-center  	 tracking-wider	 text-[#ffff] ">
        click on the search bar to learn our suggestion
      </label>
      <div
        className="bg-gray-200 rounded-2xl w-[80%] lg:w-[40%] 2xl:w-[40%] xl:w-[40%]"
        style={{ position: "relative", border: "1px solid black" }}
      >
        <div className="flex flex-row ">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 border border-gray-500 rounded-2xl w-full focus:outline-none focus:ring focus:border-blue-500"
          />
          <i
            class="fa fa-search bg-[#008B8B] rounded-full overflow h-10 w-10 text-center pt-0 sm:pt-2 cursor-pointer"
            style={{ position: "absolute", top: "0px", right: "-40px" }}
          ></i>
        </div>
        <ul className="mt-2 h-64 overflow-y-scroll ">
          {searchResults &&
            searchResults
              ?.filter(
                (emp) =>
                  emp?.name?.toLowerCase().includes(searchQuery) ||
                  emp?.role?.toLowerCase().includes(searchQuery)
              )
              .map((employee) => (
                <li key={employee.id} className="flex items-center  space-x-2">
                  <img
                    src={employee.photo}
                    alt={employee.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="text-[#840404]">
                      {highlightText(employee.name)}
                    </p>
                    <p className="text-gray-500">
                      {highlightText(employee.role)}
                    </p>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
