function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email)){
    return new IcebreakerResponse(email[0], email[1])
  })
}

const email = [
  ["avi@flatironschool.com"],
  ["grace@hopper.com"],
  ["alan@xparc.com"]
]

let icebreakerResponse = IcebreakerResponse.BatchCreate(email)
