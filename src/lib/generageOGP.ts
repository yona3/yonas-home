import base64url from "base64url";

const imageUrl =
  "https://images.microcms-assets.io/assets/3c1fa25360b2455ab94fa433bfcfb496/34083129afa54933b48ec5d774a4750c/%40js_yona%20(1).png";

export const generateOGPUrl = (title: string) => {
  const base64title = base64url(title);
  const textImage = `https://images.microcms-assets.io/~text?txtsize=48&w=1000&h=400&txt-align=center,middle&txtfont=Hiragino%20Sans%20W6&txt64=${base64title}`;
  const textImageUrl = base64url(textImage);
  return `${imageUrl}?w=1200&mark-align=center%2Cmiddle&mark64=${textImageUrl}`;
};
