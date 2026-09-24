/* ============================================================
   RASHKA BARRE VIDEO STORE — PRODUCTS
   ============================================================

   HOW TO ADD A NEW VIDEO
   -----------------------
   1. Put the thumbnail image inside the  images/  folder.
   2. (Optional) Put a short preview clip inside the  videos/  folder.
   3. Copy one of the product objects below and paste it at the top
      of the PRODUCTS list.
   4. Change the id, title, description, price, thumbnail, preview
      and paymentUrl.
   5. Save this file and upload it to GitHub.

   IMPORTANT SECURITY WARNING
   --------------------------
   GitHub Pages is PUBLIC hosting. Anything you upload here can be
   downloaded by anyone who knows the link.
   NEVER upload your full paid videos here. Only upload:
     - thumbnails (images)
     - short promotional previews (a few seconds / low quality)
   The full paid video must be delivered later through a secure
   video hosting / delivery service, NOT through this repository.

   PAYMENT
   -------
   For now, every product uses paymentUrl: "#".
   Later, replace "#" with your real checkout link, for example a
   WaafiPay, EVC Plus, E-Dahab, Salaam Mastercard or other payment
   provider checkout URL. The website reads this field automatically,
   so you do NOT need to change any other file.
   ============================================================ */

const PRODUCTS = [

  {
    id: "video-001",
    title: "Mogadishu After Dark",
    description: "A cinematic night-time journey through the streets, sounds and stories of Mogadishu.",
    price: "$5",
    thumbnail: "images/thumb-001.jpg",
    preview: "videos/preview-001.mp4",
    paymentUrl: "#"
  },

  {
    id: "video-002",
    title: "The Long Road Home",
    description: "An intimate documentary about returning to a place you thought you had left behind.",
    price: "$7",
    thumbnail: "images/thumb-002.jpg",
    preview: "videos/preview-002.mp4",
    paymentUrl: "#"
  },

  {
    id: "video-003",
    title: "Coastlines",
    description: "A quiet, visual experience along the Somali coastline — light, water and time.",
    price: "$5",
    thumbnail: "images/thumb-003.jpg",
    preview: "",
    paymentUrl: "#"
  }

];

/* ============================================================
   DO NOT EDIT BELOW THIS LINE
   ============================================================ */
window.PRODUCTS = PRODUCTS;
