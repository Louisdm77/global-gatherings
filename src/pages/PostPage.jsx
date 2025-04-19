import React from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

// Static article data as an array
const articles = [
  {
    slug: "santorini",
    title: "Discover the Wonders of Santorini",
    image:
      "https://i.pinimg.com/736x/7c/28/ea/7c28eaf433cee4728de91f55122a5fe5.jpg",
    content: `
      **A Paradise in the Aegean Sea**

      Santorini, a jewel in the Aegean Sea, is renowned for its dramatic caldera views, white-washed buildings with blue domes, and some of the most breathtaking sunsets in the world. This volcanic island offers a perfect blend of natural beauty, rich history, and vibrant culture, making it an ideal destination for travelers seeking both relaxation and adventure.

      **Explore Charming Villages**

      Join Global Gatherings on a curated tour where you’ll explore the charming villages of Oia and Fira. In Oia, wander through narrow cobblestone streets lined with boutique shops and cafes, and marvel at the iconic blue-domed churches. Fira, the island’s capital, offers stunning views of the caldera and a lively atmosphere with its bustling markets and tavernas serving authentic Greek cuisine.

      **Unforgettable Experiences**

      Our guided tours include visits to iconic landmarks like the Akrotiri archaeological site, often referred to as the "Pompeii of the Aegean," where you can explore ancient ruins preserved by volcanic ash. Enjoy wine tasting at local vineyards, where Santorini’s unique volcanic soil produces world-class wines like Assyrtiko. Cap off your day with a sunset cruise that offers panoramic views of the island and its surrounding volcanic islets.

      **Relax and Unwind**

      Whether you're relaxing on a black sand beach like Perissa or soaking in the natural hot springs, Santorini promises an unforgettable experience. Let Global Gatherings handle the details while you immerse yourself in the magic of this enchanting island.
    `,
    date: "April 10, 2025",
  },
  {
    slug: "amazon",
    title: "Adventure in the Amazon Rainforest",
    image:
      "https://i.pinimg.com/736x/16/a0/3e/16a03e5bcb3f84aa92d709f850ec5039.jpg",
    content: `
      **Journey into the Heart of Nature**

      Embark on an unforgettable journey through the Amazon Rainforest with Global Gatherings. Spanning nine countries and covering over 5.5 million square kilometers, the Amazon is the world’s largest tropical rainforest, home to an incredible array of biodiversity and indigenous cultures. This adventure takes you deep into the heart of nature, where every moment is a new discovery.

      **Encounter Exotic Wildlife**

      Our expert guides will lead you through dense jungles, where you might spot jaguars, pink river dolphins, and vibrant macaws. Paddle along winding rivers in a traditional canoe, listening to the symphony of howler monkeys and toucans. At night, join a guided safari to see nocturnal creatures like caimans and owls, their eyes glowing in the darkness.

      **Connect with Indigenous Communities**

      A highlight of this trip is the opportunity to connect with indigenous communities who have lived in harmony with the rainforest for centuries. Learn about their traditions, from medicinal plant knowledge to sustainable hunting practices, and participate in cultural activities like crafting jewelry or preparing traditional meals.

      **Eco-Friendly Adventures**

      Stay in eco-friendly lodges nestled in the jungle, designed to minimize environmental impact while providing comfort. Each day offers new adventures, from treetop canopy walks to piranha fishing. This trip is perfect for thrill-seekers and nature lovers alike, offering a once-in-a-lifetime experience in one of the world's most unique ecosystems.
    `,
    date: "April 12, 2025",
  },
  {
    slug: "kyoto",
    title: "Cultural Immersion in Kyoto",
    image:
      "https://i.pinimg.com/736x/28/5a/8f/285a8f1a5c17aabef1261e537dc9bf4e.jpg",
    content: `
      **The Cultural Heart of Japan**

      Dive into the rich culture of Kyoto with Global Gatherings' curated experiences. Known as the cultural heart of Japan, Kyoto offers a blend of ancient traditions and serene beauty that captivates every traveler. With over 2,000 temples and shrines, historic geisha districts, and stunning natural landscapes, Kyoto is a city where the past and present coexist in harmony.

      **Explore Iconic Temples and Shrines**

      Visit iconic landmarks like Kinkaku-ji (the Golden Pavilion), a Zen temple covered in gold leaf that reflects beautifully in its surrounding pond. Wander through Fushimi Inari Shrine, famous for its thousands of red torii gates that form a mesmerizing path up the mountain. Our tours also take you to the serene Arashiyama Bamboo Grove, where towering bamboo stalks create a tranquil, otherworldly atmosphere.

      **Traditional Experiences**

      Participate in a traditional tea ceremony, where you’ll learn the art of matcha preparation and the philosophy behind this centuries-old ritual. Try your hand at calligraphy or kimono dressing, and explore the historic Gion district, where you might catch a glimpse of a geisha on her way to an appointment.

      **Seasonal Beauty**

      Our tours include seasonal experiences, such as cherry blossom viewing in spring at Maruyama Park or admiring the fiery autumn foliage at Tofuku-ji Temple. Savor kaiseki cuisine, a multi-course meal that showcases Kyoto’s culinary artistry, and explore local markets like Nishiki Market for a taste of regional delicacies. Kyoto will leave you with memories to cherish forever.
    `,
    date: "April 15, 2025",
  },
];

const PostPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const currentArticleIndex = articles.findIndex(
    (article) => article.slug === slug
  );
  const currentArticle = articles[currentArticleIndex];

  if (!currentArticle) {
    return <div className="text-center py-16">Article not found.</div>;
  }

  // Determine previous and next articles
  const prevArticle =
    currentArticleIndex > 0 ? articles[currentArticleIndex - 1] : null;
  const nextArticle =
    currentArticleIndex < articles.length - 1
      ? articles[currentArticleIndex + 1]
      : null;

  // Filter out the current article for "Other Articles"
  const otherArticles = articles.filter((article) => article.slug !== slug);

  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="text-indigo-800 hover:text-purple-600 mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Article Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          {currentArticle.title}
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Published on {currentArticle.date}
        </p>
        <img
          src={currentArticle.image}
          alt={currentArticle.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {currentArticle.content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-6 mt-8">
          {prevArticle ? (
            <Link to={`/post/${prevArticle.slug}`}>
              <button className="text-indigo-800 font-bold hover:text-purple-600 transition">
                ← Back: {prevArticle.title}
              </button>
            </Link>
          ) : (
            <div></div> 
          )}
          {nextArticle ? (
            <Link to={`/post/${nextArticle.slug}`}>
              <button className="text-indigo-800 font-bold hover:text-purple-600 transition">
                Up Next: {nextArticle.title} →
              </button>
            </Link>
          ) : (
            <div></div> // Empty div to maintain flex layout
          )}
        </div>

        {/* Other Articles Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            Other Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.map((article) => (
              <Link
                to={`/post/${article.slug}`}
                key={article.slug}
                className="flex flex-col"
              >
                <div className="w-full h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indigo-900 mt-4">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link to="/">
            <button className="bg-indigo-800 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition">
              Explore More Adventures
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPage;