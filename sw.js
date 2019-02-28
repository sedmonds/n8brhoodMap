self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then( (cache) => {
     // return cache.addAll(fileNamesToCache);  
    
      return cache.addAll(
        [
          '/', '/index.html',  'index.css',
        ]
      );
    })
  ); 
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then( (response) => {
      if (response) {
        console.log('Found ', event.request, ' in cache.');
        return response;
      } else {
        console.log(event.request, ' does not exist in the cache, FETCHING!');  
        return fetch(event.request).then( (response) => {
          caches.open('v1').then( (cache) => {
            //cache.put(event.request, response.clone());
            cache.put(event.request, response)
          })
          return response;
        }).catch( (error) => {
          console.log(error)
        });
      }
    })
  );
});