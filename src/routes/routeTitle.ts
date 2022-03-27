export const allRouteTitles = {
  "/home/tweet/": "Tweet",
  "/home/search": "Search",
  "/home": "Home",
  "/explore": "Explore",
  "/messages": "Messages",
  "/bookmarks": "Bookmarks",
  "/lists": "Lists",
  "/profile": "Profile",
};

export function getTitleByLocation(loc: string, allRoute: object) {
  let result = "/home";
  let lucky = allRoute[loc];
  if (lucky) return lucky;

  Object.keys(allRoute).find((e) => {
    if (loc.includes(e, 0)) {
      result = e;
      return true;
    }});
  return allRoute[result];
};
