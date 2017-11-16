function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email){
  return email.map(function(emailData)){
    return new IcebreakerResponse(emailData[0], emailData[1])

  })
}

const email = [
  ["avi@flatironschool.com"],
  ["grace@hopper.com"],
  ["alan@xparc.com"]
]

let icebreakerResponse = IcebreakerResponse.BatchCreate(email)