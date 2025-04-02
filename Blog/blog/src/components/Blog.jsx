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


function Blog() {

    const Movies = [
        {
            id: 1,
            movie: "ShawShank Redemption",
            Description: "The Shawshank Redemption (1994), directed by Frank Darabont and based on Stephen King's novella Rita Hayworth and Shawshank Redemption, is a timeless tale of hope, perseverance, and friendship. The story follows Andy Dufresne, a quiet yet intelligent banker who is wrongfully convicted of murdering his wife and her lover. Sentenced to life imprisonment at Shawshank State Penitentiary, he must endure the brutal realities of prison life while maintaining an unshakable sense of hope. Inside Shawshank, Andy befriends Ellis Red Redding, a longtime inmate known for his ability to get things. Over the years, Andy earns the respect of fellow prisoners and even the corrupt Warden Norton, using his financial expertise to assist in laundering money. Despite facing cruelty and injustice, he remains patient and determined, working tirelessly on a secret plan that unfolds in one of cinema’s most breathtaking climaxes.With powerful performances from Tim Robbins and Morgan Freeman, the film explores themes of freedom, redemption, and the enduring strength of the human spirit. Though it initially underperformed at the box office, The Shawshank Redemption has since gained worldwide recognition and is now regarded as one of the greatest films of all time, consistently topping audience rankings on platforms like IMDb.",
            content: "The Shawshank Redemption is a powerful tale of hope, friendship, and perseverance, following a wrongly convicted man’s journey to freedom and justice.",
            image: ImageA
        },
        {
            id:2,
            movie: "Godfather",
            Description: "The Godfather, directed by Francis Ford Coppola, is a legendary crime drama based on Mario Puzo’s novel. The film follows the powerful Corleone family, one of the most influential mafia dynasties in post-war America. Vito Corleone (Marlon Brando), the aging patriarch, balances family loyalty with the brutal realities of the criminal underworld.When rival gangs challenge the Corleones, violence erupts, forcing his youngest son, Michael Corleone (Al Pacino), to step up and protect the family. Initially an outsider who rejects the mafia life, Michael is drawn into the world of crime, transforming into a cold and calculating leader. His rise to power is marked by strategic assassinations, betrayals, and moral dilemmas, as he cements his place as the new Godfather.The film explores themes of power, loyalty, betrayal, and the corruption of the American Dream, making it one of the greatest and most influential films in cinematic history. With iconic performances, unforgettable dialogue, and masterful storytelling, The Godfather remains a timeless classic.",
            content: "The Godfather is a gripping saga of power, loyalty, and betrayal, following the rise of Michael Corleone as he takes over his family's ruthless mafia empire",
            image:ImageB
        },
        {
            id:3,
            movie:"Dark Knight",
            Description:"The Dark Knight, directed by Christopher Nolan, is a critically acclaimed superhero thriller that redefines the genre. Set in Gotham City, it follows Batman (Christian Bale) as he faces his greatest challenge yet—the anarchic and unpredictable Joker (Heath Ledger), who seeks to plunge the city into chaos.As Joker unleashes terror, Batman, Commissioner Gordon (Gary Oldman), and Harvey Dent (Aaron Eckhart) fight to restore order. However, Joker’s mind games push Gotham’s heroes to their limits, testing their morals and forcing Bruce Wayne to question his role as the city's protector.With a gritty, realistic tone, stunning action sequences, and a legendary performance by Heath Ledger, The Dark Knight explores themes of chaos vs. order, heroism, and sacrifice, cementing itself as one of the greatest films of all time.",
            content:"The Dark Knight is a gripping battle between Batman and the Joker, exploring chaos, morality, and the true cost of heroism in Gotham City.",
            image:ImageC
        },
        {
            id:4,
            movie:"Interstellar",
            Description:"Interstellar, directed by Christopher Nolan, is a mind-bending sci-fi epic that explores space, time, and human survival. Set in a dystopian future where Earth is dying, the film follows Cooper (Matthew McConaughey), a former NASA pilot, who joins a daring space mission to find a new habitable planet for humanity.As Cooper and his team travel through a wormhole near Saturn, they encounter mysterious planets, time dilation, and the paradoxes of relativity. Meanwhile, his daughter Murph (Jessica Chastain) unravels secrets on Earth that could save mankind. The film blends stunning visuals, emotional depth, and complex scientific concepts, making it one of the most profound space adventures ever created. With a breathtaking score by Hans Zimmer and a story that delves into love, sacrifice, and the nature of time, Interstellar stands as a cinematic masterpiece that pushes the boundaries of storytelling and science fiction.",
            content:"Interstellar is a breathtaking sci-fi epic about a space mission to find a new home for humanity, exploring love, time, and survival across the cosmos.",
            image:ImageD
        },
        {
            id:5,
            movie:"Shutter Island",
            Description:"Directed by Martin Scorsese, Shutter Island is a gripping psychological thriller that follows Teddy Daniels (Leonardo DiCaprio), a U.S. Marshal sent to investigate the disappearance of a patient from Ashecliffe Hospital, an isolated mental institution. As he delves deeper, strange occurrences, cryptic clues, and eerie visions begin to unsettle him, making him question both the facility’s motives and his own perception of reality.With its dark, atmospheric setting, mind-bending twists, and intense performances, the film explores themes of madness, trauma, and self-deception, keeping the audience guessing until the very last scene.",
            content:"Shutter Island is a gripping psychological thriller that follows a U.S. Marshal’s investigation into a mysterious asylum, unraveling secrets that challenge his perception of reality.",
            image:ImageE
        },
        {
            id: 6,
            movie: "Inception",
            Description: "Inception, directed by Christopher Nolan, is a mind-bending sci-fi thriller that explores the concept of dreams within dreams. Dom Cobb (Leonardo DiCaprio) is a skilled thief who steals secrets from within the subconscious. Given a final chance at redemption, he must plant an idea into a target’s mind, leading to an intense journey through layered dreamscapes filled with action, deception, and emotional weight.",
            content: "Inception is a visually stunning sci-fi thriller about a thief who manipulates dreams to complete one final, impossible mission.",
            image: ImageF
        },
        {
            id: 7,
            movie: "Avengers: Endgame",
            Description: "Avengers: Endgame, directed by the Russo brothers, is the epic conclusion to the Infinity Saga. Following the devastating effects of Thanos’ snap, the remaining Avengers must band together for a daring time-travel mission to restore the universe. Filled with nostalgia, emotional moments, and jaw-dropping action, this film is a celebration of the Marvel Cinematic Universe.",
            content: "Avengers: Endgame is a thrilling and emotional culmination of the Marvel saga, as Earth's mightiest heroes fight to undo Thanos' destruction.",
            image: ImageG
        },
        {
            id: 8,
            movie: "Fight Club",
            Description: "Fight Club, directed by David Fincher, is a cult classic psychological thriller that delves into themes of identity, consumerism, and chaos. Edward Norton stars as an unnamed narrator who forms an underground fight club with the charismatic and mysterious Tyler Durden (Brad Pitt). As the club spirals into an anarchistic movement, the narrator struggles to distinguish reality from illusion.",
            content: "Fight Club is a mind-bending psychological thriller about an insomniac who starts a secret fight club, only to face shocking revelations.",
            image: ImageH
        },
        {
            id: 9,
            movie: "The Matrix",
            Description: "The Matrix, directed by the Wachowskis, is a groundbreaking sci-fi action film that questions reality. Neo (Keanu Reeves), a hacker, discovers that the world he lives in is a simulation created by AI to control humanity. With the help of Morpheus (Laurence Fishburne) and Trinity (Carrie-Anne Moss), he must embrace his destiny and fight against the machines to free humanity.",
            content: "The Matrix is a sci-fi classic that follows a hacker’s journey into a simulated reality, leading to an epic battle against AI overlords.",
            image: ImageI
        },
        {
            id: 10,
            movie: "The Prestige",
            Description: "The Prestige, directed by Christopher Nolan, is a gripping tale of rivalry, obsession, and illusion. Starring Christian Bale and Hugh Jackman, the film follows two magicians locked in a bitter feud, each trying to outdo the other in creating the ultimate trick. As their rivalry escalates, dark secrets and sacrifices unfold in this mesmerizing narrative.",
            content: "The Prestige is a thrilling story of obsession and deception between two rival magicians, filled with twists and mind-blowing revelations.",
            image: ImageJ
        }

    ]
    return (
        <div className="bg-gray-900 text-white min-h-screen">
          <Navbar />
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-yellow-400 mb-6">Movie Blog</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {Movies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-yellow-400 transition"
                >
                  <h2 className="text-xl font-semibold text-yellow-400">
                    {movie.movie}
                  </h2>
                  <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-[300px] object-cover rounded-md mb-3"
              />
                  <h3 className='font-bold my-4'>Description</h3><p className="mt-2 text-gray-300 text-sm">{movie.Description}</p>

                  
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    export default Blog;
