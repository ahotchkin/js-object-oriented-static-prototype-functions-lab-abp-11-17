function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  return email.map(function(emailData)){
    return new IcebreakerResponse(emailData[0], emailData[1])
    
  })
}