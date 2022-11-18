This sample is about a Problem Mock Service Worker is producing when try to use Auth0 on server middleware with express-openid-connect.

Once you try to login or logout, so that the redirect to auth0 would happen the browser stucks in endless load.

This does not happen without Mock Service Worker. Then auth0 is working perfectly fine. So it seems to be related to Mock Service Worker. I also found a related issue on auth0/nextjs-auth0 where a user is reporting the same problem but within another setup: https://github.com/auth0/nextjs-auth0/issues/606

"Debugging shows the last event to have successfully cloned a request to /.well-known/openid-configuration, but then hangs after the event closes. Any ideas on what could be causing this? Underlying got client?"

Honestly this problem is a real big issue for my current customer project. If we are not able to solve it we will need to move away from MSW, as changing the AUTH0 approach is no option. But i would like to prevent that move.

Steps to reproduce:

run npm install
run npm run dev
within preview, try to click login button. -> browser will endlessly load
stop project
comment out MSW
start project again, login link to Auth0 will work.

I really would appreciate help/fix on this.
Best regards, Annick
