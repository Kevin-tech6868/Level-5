import React from 'react'
import Navbar from './Navbar'
import ImageA from '../assets/ShawShank_redemption.jpg';
import ImageB from "../assets/R (3).jpg";
import ImageC from "../assets/dark_knight.jpg";
import ImageD from "../assets/Interstellar post.jpg";
import ImageE from "../assets/Shutter Island.jpg";
import ImageF from "../assets/Inception.jpg";
import ImageG from "../assets/endgame.jpeg";
import ImageH from "../assets/R (4).jpg";
import ImageI from "../assets/R (5).jpg";
import ImageJ from "../assets/The prestige.jpg"

function Summary() {
  const Movies = [
    {
      id: 1,
      movie: "Shawshank Redemption",
      summary: "A banker is sentenced to life in Shawshank prison for a crime he didn't commit. Over the years, he befriends fellow inmate Red and devises a daring escape plan, proving that hope is the ultimate key to freedom.",
      image: ImageA
    },
    {
      id: 2,
      movie: "Godfather",
      summary: "The story of the powerful Corleone crime family, led by Vito Corleone and later his son Michael, as they navigate loyalty, betrayal, and the ruthless world of organized crime.",
      image: ImageB
    },
    {
      id: 3,
      movie: "Dark Knight",
      summary: "Batman faces his greatest challenge when the Joker, a sadistic criminal mastermind, unleashes chaos on Gotham City, forcing the hero to question his own morals and limits.",
      image: ImageC
    },
    {
      id: 4,
      movie: "Interstellar",
      summary: "A group of astronauts embarks on a journey through a wormhole in search of a new habitable planet, while a father and daughter struggle with the passage of time and the survival of humanity.",
      image: ImageD
    },
    {
      id: 5,
      movie: "Shutter Island",
      summary: "A U.S. Marshal investigates the disappearance of a patient from a psychiatric facility on a remote island, uncovering shocking truths about the institution and himself.",
      image: ImageE
    },
    {
      id: 6,
      movie: "Inception",
      summary: "A skilled thief who specializes in stealing secrets through dreams is given the task of planting an idea into someone's mind, leading to a mind-bending journey through multiple dream layers.",
      image: ImageF
    },
    {
      id: 7,
      movie: "Avengers Endgame",
      summary: "The surviving Avengers and their allies must unite for a final battle against Thanos, attempting to undo the devastation he caused and restore balance to the universe.",
      image: ImageG
    },
    {
      id: 8,
      movie: "Fight Club",
      summary: "An insomniac office worker forms an underground fight club with a charismatic soap salesman, leading to an anarchic movement that spirals out of control.",
      image: ImageH
    },
    {
      id: 9,
      movie: "The Matrix",
      summary: "A computer hacker discovers that reality is a simulated world controlled by machines, and he joins a group of rebels to fight for humanity’s freedom.",
      image: ImageI
    },
    {
      id: 10,
      movie: "The Prestige",
      summary: "Two rival magicians engage in a lifelong feud of obsession and deception, each striving to create the ultimate illusion at great personal cost.",
      image: ImageJ
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Movie Summaries</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {Movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-yellow-400 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-[300px] object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{movie.movie}</h2>
              <h3 className="font-bold my-3 text-yellow-400">Summary</h3>
              <p className="mt-2 text-gray-300 text-sm">{movie.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Summary;
