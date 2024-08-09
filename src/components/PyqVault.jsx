import React, { useState } from "react";

const PyqVault = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  const dummyData = {
    semesters: [
      {
        name: "Semester 1",
        subjects: [
          {
            name: "Computer Science",
            pdfs: ["Introduction to Programming.pdf", "Data Structures.pdf"],
          },
          {
            name: "Mathematics",
            pdfs: ["Calculus.pdf", "Algebra.pdf"],
          },
        ],
      },
      {
        name: "Semester 2",
        subjects: [
          {
            name: "Physics",
            pdfs: ["Mechanics.pdf", "Electromagnetism.pdf"],
          },
          {
            name: "Chemistry",
            pdfs: ["Organic Chemistry.pdf", "Inorganic Chemistry.pdf"],
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-700 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center gap-2" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <span className="text-2xl font-extrabold">PYQ Vault</span>
          </a>
          <nav
            className={`md:flex items-center gap-6 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <a className="hover:underline" href="#">
              Semesters
            </a>
            <a className="hover:underline" href="#">
              Subjects
            </a>
            <a className="hover:underline" href="#">
              About
            </a>
            <a className="hover:underline" href="#">
              Contact
            </a>
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-blue-600 hover:bg-blue-800 hover:text-white h-10 px-4 py-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-1 py-12">
        <section className="bg-blue-600 py-20 text-white">
          <div className="container mx-auto flex flex-col items-center gap-6">
            <h1 className="text-5xl font-bold tracking-wide">
              Welcome to PYQ Vault
            </h1>
            <p className="max-w-lg text-center text-lg leading-relaxed">
              Organize and access your previous year question papers with ease.
            </p>
            <div className="w-full max-w-lg">
              <input
                className="flex h-12 border border-transparent bg-white text-black text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                placeholder="Search for PDFs..."
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12">
          <div data-orientation="vertical">
            {dummyData.semesters.map((semester, index) => (
              <div key={index} className="border-b">
                <h3 className="flex">
                  <button
                    type="button"
                    aria-controls={`accordion-${index}`}
                    aria-expanded={accordionOpen === index}
                    className="flex-1 flex items-center justify-between bg-gray-200 px-6 py-4 text-lg font-medium transition-all hover:bg-gray-300 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div>{semester.name}</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-5 h-5 transform transition-transform ${
                        accordionOpen === index ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id={`accordion-${index}`}
                  hidden={accordionOpen !== index}
                  role="region"
                  className="overflow-hidden transition-all px-6 py-4"
                >
                  {semester.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <h4 className="font-semibold text-gray-800">
                        {subject.name}
                      </h4>
                      <ul className="list-disc pl-5">
                        {subject.pdfs.map((pdf, pdfIndex) => (
                          <li
                            key={pdfIndex}
                            className="text-sm text-gray-600 hover:text-gray-800"
                          >
                            {pdf}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <aside className="bg-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4">Filter PDFs</h2>
        <div className="grid gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Subject</h3>
            <div className="grid gap-2">
              {["Computer Science", "Mathematics", "Physics", "Chemistry"].map(
                (subject, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 shrink-0 rounded-sm border border-blue-600 text-blue-600 focus:ring-2 focus:ring-blue-300"
                    />
                    {subject}
                  </label>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Year</h3>
            <div className="grid gap-2">
              {["2022", "2021", "2020", "2019"].map((year, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 shrink-0 rounded-sm border border-blue-600 text-blue-600 focus:ring-2 focus:ring-blue-300"
                  />
                  {year}
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <span className="text-2xl font-extrabold">PYQ Vault</span>
          </div>
          <div className="text-sm text-center md:text-left">
            © 2024 PYQ Vault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PyqVault;
