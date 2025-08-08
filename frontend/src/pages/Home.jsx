// import React, { useState } from "react";
// import axios from "axios";

//  const hijabProducts = [
//   {
//     id: 1,
//     name: "Classic Black Hijab",
//     description: "Elegant and timeless black hijab for any outfit.",
//     image: "https://static-01.daraz.pk/p/a085e9ca1515221a4c083c4c16b59062.jpg",
//   },
//   {
//     id: 2,
//     name: "Silk White Hijab",
//     description: "Soft silk hijab, perfect for formal events.",
//     image: "https://blackcamels.com.pk/cdn/shop/products/01-9_60605c6d-6189-47ee-8e4c-330f3ea010c5.jpg?v=1753964196",
//   },
//   {
//     id: 3,
//     name: "Casual Beige Hijab",
//     description: "Lightweight hijab for everyday comfort.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQQPC82mcH7cm_MS9n7GNegFYnPeflGEySw&s",
//   },
//   {
//     id: 4,
//     name: "Patterned Hijab",
//     description: "Trendy hijab with colorful patterns.",
//     image: "https://i.pinimg.com/originals/7c/7f/cb/7c7fcb47e65fec252042d36326030554.jpg",
//   },
//   {
//     id: 5,
//     name: "Chiffon Pink Hijab",
//     description: "Flowy chiffon hijab in a soft pink shade.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEMee0khnHpPBHFADGp56T0N8vmY_YuGo9Q&s",
//   },
//   {
//     id: 6,
//     name: "Grey Cotton Hijab",
//     description: "Breathable cotton fabric for everyday wear.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSih0_1dD-7clQqnPajc2W8qgtHtvkocMwmyA&s",
//   },
//   {
//     id: 7,
//     name: "Formal Blue Hijab",
//     description: "Ideal for professional and formal settings.",
//     image: "https://mala.pk/cdn/shop/files/urban_1.jpg?v=1752753227",
//   },
//   {
//     id: 8,
//     name: "Ombre Hijab",
//     description: "Beautiful ombre shades blending into each other.",
//     image: "https://cdn.shopify.com/s/files/1/0268/6189/5740/files/Accessory_Compatible_Hijab-min_large.jpg?v=1594728220",
//   },
//   {
//     id: 9,
//     name: "Luxury Satin Hijab",
//     description: "Premium satin hijab for luxurious styling.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF_Zrc8MlKzxr4rcrAuyuwSj58pV-xBk6Kg&s",
//   },
//   {
//     id: 10,
//     name: "Sport Hijab",
//     description: "Light and breathable for physical activity.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgx1X-l8MoPYv392fQVpJy8ncYjt8mciUxWg&s",
//   },
//   {
//     id: 11,
//     name: "Boho Hijab",
//     description: "Bohemian style with artistic flair.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXq2X3rweKCTjqocIL-L5lK4mxqc8W8Rp6g&s",
//   },
//   {
//     id: 12,
//     name: "Lace Trim Hijab",
//     description: "Soft material with delicate lace trim.",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb38d-Q6EEMiUuQl_kN_2i_FpcZlfIjrzf1g&s",
//   },
// ];

// const Star = ({ filled, onClick }) => (
//   <span
//     onClick={onClick}
//     className={`cursor-pointer text-xl ${filled ? "text-yellow-500" : "text-gray-300"}`}
//   >
//     ★
//   </span>
// );

// const Home = () => {
//   const [ratings, setRatings] = useState({});
//   const [reviews, setReviews] = useState({});
//   const [submitted, setSubmitted] = useState({});

//   const handleRating = (productId, star) => {
//     setRatings((prev) => ({
//       ...prev,
//       [productId]: star,
//     }));
//   };

//   const handleReviewChange = (productId, value) => {
//     setReviews((prev) => ({
//       ...prev,
//       [productId]: value,
//     }));
//   };

//   const handleSubmit = async (productId) => {
//     const product = hijabProducts.find((item) => item.id === productId);
//     const ratingData = {
//       productId: product.id,
//       title: product.name,
//       image: product.image,
//       rating: ratings[productId],
//       review: reviews[productId] || "",
//     };

//     try {
//       const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/rate/userrating`, ratingData);
//       console.log("Rating + Review saved:", data);
//       setSubmitted((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));
//     } catch (err) {
//       console.error("Failed to save review:", err);
//     }
//   };

//   return (
//     <div className="p-6 bg-black min-h-screen">
//       <h1 className="text-3xl font-bold text-white text-center mb-8">Hijab Collection</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//         {hijabProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
//           >
//             <img
//               src={`${product.image}?w=400&h=250&auto=format&fit=crop`}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 flex flex-col flex-grow">
//               <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
//               <p className="text-sm text-gray-600 mb-2">{product.description}</p>

//               {/* Star Rating */}
//               <div className="flex gap-1 mb-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     filled={star <= (ratings[product.id] || 0)}
//                     onClick={() => handleRating(product.id, star)}
//                   />
//                 ))}
//               </div>

//               {/* Review Textarea */}
//               <textarea
//                 placeholder="Write your review..."
//                 className="border p-2 text-sm rounded resize-none mb-2 h-20"
//                 value={reviews[product.id] || ""}
//                 onChange={(e) => handleReviewChange(product.id, e.target.value)}
//               />

//               {/* Submit Button */}
//               <button
//                 onClick={() => handleSubmit(product.id)}
//                 className="bg-black text-white py-1 px-4 rounded hover:bg-gray-800 transition"
//                 disabled={!ratings[product.id] || submitted[product.id]}
//               >
//                 {submitted[product.id] ? "Submitted" : "Submit Review"}
//               </button>

//               {/* Confirmation Message */}
//               {submitted[product.id] && (
//                 <p className="text-green-600 text-sm mt-2">Thank you for your feedback!</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



















import React, { useState, useEffect } from "react";
import axios from "axios";

const hijabProducts = [
  {
    id: 1,
    name: "Classic Black Hijab",
    description: "Elegant and timeless black hijab for any outfit.",
    image: "https://static-01.daraz.pk/p/a085e9ca1515221a4c083c4c16b59062.jpg",
  },
  {
    id: 2,
    name: "Silk White Hijab",
    description: "Soft silk hijab, perfect for formal events.",
    image: "https://blackcamels.com.pk/cdn/shop/products/01-9_60605c6d-6189-47ee-8e4c-330f3ea010c5.jpg?v=1753964196",
  },
    {
    id: 3,
    name: "Casual Beige Hijab",
    description: "Lightweight hijab for everyday comfort.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQQPC82mcH7cm_MS9n7GNegFYnPeflGEySw&s",
  },
  {
    id: 4,
    name: "Patterned Hijab",
    description: "Trendy hijab with colorful patterns.",
    image: "https://i.pinimg.com/originals/7c/7f/cb/7c7fcb47e65fec252042d36326030554.jpg",
  },
  {
    id: 5,
    name: "Chiffon Pink Hijab",
    description: "Flowy chiffon hijab in a soft pink shade.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEMee0khnHpPBHFADGp56T0N8vmY_YuGo9Q&s",
  },
  {
    id: 6,
    name: "Grey Cotton Hijab",
    description: "Breathable cotton fabric for everyday wear.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSih0_1dD-7clQqnPajc2W8qgtHtvkocMwmyA&s",
  },
  {
    id: 7,
    name: "Formal Blue Hijab",
    description: "Ideal for professional and formal settings.",
    image: "https://mala.pk/cdn/shop/files/urban_1.jpg?v=1752753227",
  },
  {
    id: 8,
    name: "Ombre Hijab",
    description: "Beautiful ombre shades blending into each other.",
    image: "https://cdn.shopify.com/s/files/1/0268/6189/5740/files/Accessory_Compatible_Hijab-min_large.jpg?v=1594728220",
  },
  {
    id: 9,
    name: "Luxury Satin Hijab",
    description: "Premium satin hijab for luxurious styling.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF_Zrc8MlKzxr4rcrAuyuwSj58pV-xBk6Kg&s",
  },
  {
    id: 10,
    name: "Sport Hijab",
    description: "Light and breathable for physical activity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgx1X-l8MoPYv392fQVpJy8ncYjt8mciUxWg&s",
  },
  {
    id: 11,
    name: "Boho Hijab",
    description: "Bohemian style with artistic flair.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXq2X3rweKCTjqocIL-L5lK4mxqc8W8Rp6g&s",
  },
  {
    id: 12,
    name: "Lace Trim Hijab",
    description: "Soft material with delicate lace trim.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb38d-Q6EEMiUuQl_kN_2i_FpcZlfIjrzf1g&s",
  },
];

const Star = ({ filled, onClick }) => (
  <span
    onClick={onClick}
    className={`cursor-pointer text-xl ${filled ? "text-yellow-500" : "text-gray-300"}`}
  >
    ★
  </span>
);

const Home = () => {
  const [ratings, setRatings] = useState({});
  const [reviews, setReviews] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [existingReviews, setExistingReviews] = useState({});

  // Fetch existing reviews from backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/rate/all`);
        const reviewsData = res.data;
        const ratingsMap = {};
        const commentsMap = {};
        const submittedMap = {};

        reviewsData.forEach((item) => {
          ratingsMap[item.productId] = item.rating;
          commentsMap[item.productId] = item.comment;
          submittedMap[item.productId] = true;
        });

        setRatings(ratingsMap);
        setReviews(commentsMap);
        setSubmitted(submittedMap);
        setExistingReviews(commentsMap);
      } catch (error) {
        console.error("Error loading existing reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleRating = (productId, star) => {
    setRatings((prev) => ({ ...prev, [productId]: star }));
  };

  const handleReviewChange = (productId, value) => {
    setReviews((prev) => ({ ...prev, [productId]: value }));
  };

  const handleSubmit = async (productId) => {
    const product = hijabProducts.find((item) => item.id === productId);
    const ratingData = {
      productId: product.id,
      title: product.name,
      image: product.image,
      rating: ratings[productId],
      comment: reviews[productId] || "",
    };

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/rate/userrating`, ratingData);
      setSubmitted((prev) => ({ ...prev, [productId]: true }));
      setExistingReviews((prev) => ({ ...prev, [productId]: reviews[productId] }));
    } catch (err) {
      console.error("Failed to save review:", err);
    }
  };

  return (
    <div className="p-6 bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-white text-center mb-8">Hijab Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {hijabProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <img
              src={`${product.image}?w=400&h=250&auto=format&fit=crop`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>

              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    filled={star <= (ratings[product.id] || 0)}
                    onClick={() => handleRating(product.id, star)}
                  />
                ))}
              </div>

              <textarea
                placeholder="Write your review..."
                className="border p-2 text-sm rounded resize-none mb-2 h-20"
                value={reviews[product.id] || ""}
                onChange={(e) => handleReviewChange(product.id, e.target.value)}
              />

              <button
                onClick={() => handleSubmit(product.id)}
                className="bg-black text-white py-1 px-4 rounded hover:bg-gray-800 transition"
                disabled={!ratings[product.id]}
              >
                {submitted[product.id] ? "Update Review" : "Submit Review"}
              </button>

              {existingReviews[product.id] && (
                <p className="text-green-700 text-sm mt-2 italic">
                  Your review: "{existingReviews[product.id]}"
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
