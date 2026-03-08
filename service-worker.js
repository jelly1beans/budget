self.addEventListener("install", function(e){
  e.waitUntil("budget-cache".then(function(cache){
    return cache.addAll(["index.html"]);
  })
);
});