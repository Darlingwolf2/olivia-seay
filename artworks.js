// Work page shows every entry, in this order.
// Homepage shows only entries with a "home" number, in that order.
// On the Work page every image is sized from w (real width) and f, so small works look small.
// s = optional extra shrink for the two largest works on the homepage (1 = true scale).
// w = real width in cm; the homepage sizes each work in proportion to it. f = border allowance in the image file.
// To add an image: put the file in /assets and add  image: "/olivia-seay/assets/filename.jpg"
window.ARTWORKS = [
  { title: "Ceiling zero", w: 102, f: 1.07, s: 0.75, dimensions: "Dimensions", medium: "Medium", date: "Year", tone: "ochre", home: 1 },
  { title: "Whether for long or for just a little", w: 76, f: 1.091, s: 0.75, dimensions: "102 x 76 cm (40 x 30 in.)", medium: "Oil / primed studio paper", date: "Nov 2026", image: "/olivia-seay/assets/whether-for-long.jpg", home: 5 },
  { title: "Amphibious", w: 23, f: 1.091, s: 1.15, dimensions: "30 x 23 cm (12 x 9 in.)", medium: "Oil / primed studio paper", date: "Nov 2026", image: "/olivia-seay/assets/amphibious.jpg", home: 2 },
  { title: "Loves me, loves me not", w: 23, f: 1.093, dimensions: "30 x 23 cm (12 x 9 in.)", medium: "Oil / primed studio paper", date: "Oct 2026", image: "/olivia-seay/assets/loves-me.jpg" },
  { title: "Loveless letters", w: 42, f: 1.071, s: 1.15, dimensions: "29.7 x 42 cm (11.7 x 16.5 in.)", medium: "Oil / primed studio paper", date: "Oct 2026", image: "/olivia-seay/assets/loveless-letters.jpg", home: 4 },
  { title: "Subtle door", w: 23, f: 1.095, s: 1.15, dimensions: "30 x 23 cm (12 x 9 in.)", medium: "Oil / primed studio paper", date: "Nov 2026", image: "/olivia-seay/assets/subtle-door.jpg", home: 3 },
  { title: "Beggar, or thief?", w: 29.7, f: 1.102, dimensions: "42 x 29.7 cm (16.5 x 11.7 in.)", medium: "Oil / primed studio paper", date: "Sept 2026", image: "/olivia-seay/assets/beggar-thief.jpg" },
  { title: "Aparigraha", w: 29.7, f: 1.102, dimensions: "42 x 29.7 cm (16.5 x 11.7 in.)", medium: "Oil / primed studio paper", date: "Sept 2026", image: "/olivia-seay/assets/aparigraha.jpg" },
  { title: "Rivers bend", w: 29.7, f: 1.102, dimensions: "42 x 29.7 cm (16.5 x 11.7 in.)", medium: "Oil / primed studio paper", date: "Sept 2026", image: "/olivia-seay/assets/rivers-bend.jpg" },
  { title: "Despite my silver", w: 42, f: 1.07, dimensions: "29.7 x 42 cm (11.7 x 16.5 in.)", medium: "Oil / primed studio paper", date: "Sept 2026", image: "/olivia-seay/assets/despite-my-silver.jpg" },
  { title: "Beautiful again", w: 30, f: 1.095, dimensions: "40 x 30 cm (16.5 x 11.7 in.)", medium: "Oil / primed studio paper", date: "2026", image: "/olivia-seay/assets/beautiful-again.jpg" },
  { title: "Revelations at the kitchen sink", w: 42, f: 1.102, dimensions: "60.5 x 42 cm (24 x 16.5 in.)", medium: "Oil / primed studio paper", date: "June 2026", image: "/olivia-seay/assets/kitchen-sink.jpg" },
  { title: "The shape of it", w: 42, f: 1.074, dimensions: "28 x 42 cm (11 x 16.5 in.)", medium: "Oil / primed studio paper", date: "June 2026", image: "/olivia-seay/assets/the-shape-of-it.jpg" },
  { title: "Finnegan’s blanket", w: 42, f: 1.07, dimensions: "28 x 42 cm (11 x 16.5 in.)", medium: "Oil / primed studio paper", date: "June 2026", image: "/olivia-seay/assets/finnegans-blanket.jpg" }
];
