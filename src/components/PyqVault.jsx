import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown, Menu, X } from "lucide-react";
import Footer from "./Footer";

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
            pdfs: [
              { name: "Introduction to Programming", path: "/pdfs/resume-raj.pdf" },
              { name: "Resume Raj", path: "/pdfs/resume-raj.pdf" },
            ],
          },
          {
            name: "Mathematics",
            pdfs: [
              { name: "Calculus", path: "/pdfs/calculus.pdf" },
              { name: "Algebra", path: "/pdfs/algebra.pdf" },
            ],
          },
        ],
      },
      {
        name: "Semester 2",
        subjects: [
          {
            name: "Physics",
            pdfs: [
              { name: "Mechanics", path: "/pdfs/mechanics.pdf" },
              { name: "Electromagnetism", path: "/pdfs/electromagnetism.pdf" },
            ],
          },
          {
            name: "Chemistry",
            pdfs: [
              { name: "Organic Chemistry", path: "/pdfs/organic_chemistry.pdf" },
              { name: "Inorganic Chemistry", path: "/pdfs/inorganic_chemistry.pdf" },
            ],
          },
        ],
      },
    ],
  };

  const handleDownload = (pdfPath, pdfName) => {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = pdfName;
  
  // Append link to the document
  document.body.appendChild(link);
  
  // Trigger the download
  link.click();
  
  // Remove the link from the document
  document.body.removeChild(link);
};


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <a className="flex items-center gap-2" href="#">
            <span className="text-3xl font-extrabold">Questor</span>
          </a>
          <nav className={`md:flex items-center gap-6 ${menuOpen ? "flex" : "hidden"}`}>
            <a className="hover:text-purple-200 transition-colors" href="#">Semesters</a>
            <a className="hover:text-purple-200 transition-colors" href="#">Subjects</a>
            <a className="hover:text-purple-200 transition-colors" href="#">About</a>
            <a className="hover:text-purple-200 transition-colors" href="#">Contact</a>
          </nav>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent hover:bg-white hover:text-purple-600 h-10 px-4 py-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      <main className="flex-1 py-12">
        <section className="bg-gradient-to-b from-purple-600 to-indigo-600 py-20 text-white">
          <div className="container mx-auto flex flex-col items-center gap-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold tracking-wide text-center"
            >
              Welcome to Questor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg text-center text-lg leading-relaxed"
            >
              Organize and access your previous year question papers with ease.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-lg"
            >
              <input
                className="w-full h-12 border border-transparent bg-white text-purple-600 text-sm rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                placeholder="Search for PDFs..."
              />
            </motion.div>
          </div>
        </section>
        <section className="container mx-auto py-12">
          <div data-orientation="vertical">
            {dummyData.semesters.map((semester, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4 rounded-lg overflow-hidden shadow-md"
              >
                <h3 className="flex">
                  <button
                    type="button"
                    aria-controls={`accordion-${index}`}
                    aria-expanded={accordionOpen === index}
                    className="flex-1 flex items-center justify-between bg-white px-6 py-4 text-lg font-medium transition-all hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div>{semester.name}</div>
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        accordionOpen === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: accordionOpen === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white"
                >
                  <div className="px-6 py-4">
                    {semester.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {subject.name}
                        </h4>
                        <ul className="space-y-2">
                          {subject.pdfs.map((pdf, pdfIndex) => (
                            <li
                              key={pdfIndex}
                              className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                            >
                              <span className="text-sm text-gray-600">
                                {pdf.name}
                              </span>
                              <button
                                onClick={() => handleDownload(pdf.path, pdf.name)}
                                className="flex items-center gap-1 text-purple-600 hover:text-purple-700 transition-colors"
                              >
                                <Download className="w-4 h-4" />
                                <span className="text-xs">Download</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <aside className="bg-white p-6 shadow-md rounded-lg mx-4 mb-8">
        <h2 className="text-xl font-bold mb-4 text-purple-600">Filter PDFs</h2>
        <div className="grid gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-800">Subject</h3>
            <div className="grid gap-2">
              {["Computer Science", "Mathematics", "Physics", "Chemistry"].map(
                (subject, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 shrink-0 rounded-sm border border-purple-600 text-purple-600 focus:ring-2 focus:ring-purple-300"
                    />
                    <span className="text-gray-600">{subject}</span>
                  </label>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-800">Year</h3>
            <div className="grid gap-2">
              {["2022", "2021", "2020", "2019"].map((year, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 shrink-0 rounded-sm border border-purple-600 text-purple-600 focus:ring-2 focus:ring-purple-300"
                  />
                  <span className="text-gray-600">{year}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <Footer/>
    </div>
  );
};

export default PyqVault;