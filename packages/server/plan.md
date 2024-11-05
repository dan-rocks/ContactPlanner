Plan.
Server paths:
no path
  If no path it will send the user to the website for the app that's basically an ad for it.  
  auth
    post(auth/new-user) Stores information then sends email verification token to user's email.
    post(auth/verify-email) This route verifies the user if they have the correct email verification token.
    get(auth/verify-token) This route generates a new email verification token and link and updates it in the database.
    
    post(auth/sign-in) This route will sign the user in and the res will have tokens and their schedule object.

    post(auth/refresh) This route will give the user a new access token if their refresh token is fine. Removes previous refresh token.

    post(auth/sign-out) Signs out the user and destroys their current access and refresh token for that device.

    post(auth/forgot-password) Requires email. Deletes old pw reset tokens, generates a token and sends it to the email with a link to the new password page.
    auth/
    post(auth/verify-reset-pw) Requires userID (from searchParams), reset pw token, new password. Uses middleware to validate token schema then middleware to verify the resetPW token then updates the password in the database.

  app
    patch(update-sch) receives userID and schedule and updates the schedule object that belongs to that user.
    delete(delete-sch) receives userID and deletes user's schedule object.




wedding
  post(/rsvp) will add their information to the database.
    1. verify the name, email, address exist and then validate the email (because it's unique)
    2. Verify email is unique, if not then senderrorres
    3. if unique, add to database
    4. send success res