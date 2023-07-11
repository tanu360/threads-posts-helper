# threads-posts-helper
Convert Threads Post URL to ID or vice-versa.

# Usage
```JavaScript
threads.decode('CuP48CiS5sx')
>>> 3138977881796614961

threads.encode('3138977881796614961')
>>> CuP48CiS5sx

threads.getPostUrl('3138977881796614961')
>>> https://www.threads.net/t/CuP48CiS5sx/

threads.getPostID('https://www.threads.net/t/CuP48CiS5sx/')
>>> 3138977881796614961
```
